import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "https://api.inetglobalservices.com/api";

export interface InquiryItem {
  _id: string;
  fullName: string;
  email: string;
  companyName: string;
  phonePrefix: string;
  phoneNumber: string;
  service: string;
  message: string;
  status: "new" | "contacted" | "in-progress" | "resolved" | "closed";
  createdAt: string;
  updatedAt: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  companyName: string;
  phonePrefix: string;
  phoneNumber: string;
  service: string;
  message: string;
}

interface InquiryState {
  inquiries: InquiryItem[];
  count: number;
  loading: boolean;
  submitting: boolean;
  error: string | null;
  submitSuccess: boolean;
  filterStatus: string;
  filterService: string;
  searchQuery: string;
}

const initialState: InquiryState = {
  inquiries: [],
  count: 0,
  loading: false,
  submitting: false,
  error: null,
  submitSuccess: false,
  filterStatus: "all",
  filterService: "all",
  searchQuery: "",
};

// 1. Submit a new contact inquiry (Public)
export const submitInquiry = createAsyncThunk(
  "inquiries/submitInquiry",
  async (formData: InquiryFormData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/inquiries`, formData, {
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message ||
          err.message ||
          "Failed to submit inquiry",
      );
    }
  },
);

// 2. Fetch all inquiries (Admin protected)
export const fetchInquiries = createAsyncThunk(
  "inquiries/fetchInquiries",
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/admin/inquiries`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message ||
          err.message ||
          "Failed to fetch inquiries",
      );
    }
  },
);

// 3. Update inquiry status (Admin protected)
export const updateInquiryStatus = createAsyncThunk(
  "inquiries/updateInquiryStatus",
  async (
    {
      id,
      status,
      token,
    }: { id: string; status: InquiryItem["status"]; token: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/admin/inquiries/${id}/status`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );
      return response.data.inquiry;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message ||
          err.message ||
          "Failed to update inquiry status",
      );
    }
  },
);

// 4. Delete inquiry (Admin protected)
export const deleteInquiry = createAsyncThunk(
  "inquiries/deleteInquiry",
  async ({ id, token }: { id: string; token: string }, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_BASE_URL}/admin/inquiries/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return id;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message ||
          err.message ||
          "Failed to delete inquiry",
      );
    }
  },
);

export const inquirySlice = createSlice({
  name: "inquiries",
  initialState,
  reducers: {
    setFilterStatus: (state, action: PayloadAction<string>) => {
      state.filterStatus = action.payload;
    },
    setFilterService: (state, action: PayloadAction<string>) => {
      state.filterService = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    resetSubmitState: (state) => {
      state.submitting = false;
      state.submitSuccess = false;
      state.error = null;
    },
    clearInquiryError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // submitInquiry
    builder
      .addCase(submitInquiry.pending, (state) => {
        state.submitting = true;
        state.error = null;
        state.submitSuccess = false;
      })
      .addCase(submitInquiry.fulfilled, (state) => {
        state.submitting = false;
        state.submitSuccess = true;
      })
      .addCase(submitInquiry.rejected, (state, action) => {
        state.submitting = false;
        state.error = (action.payload as string) || "Failed to submit inquiry";
      });

    // fetchInquiries
    builder
      .addCase(fetchInquiries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInquiries.fulfilled, (state, action) => {
        state.loading = false;
        state.inquiries = action.payload.inquiries || [];
        state.count =
          action.payload.count || action.payload.inquiries?.length || 0;
      })
      .addCase(fetchInquiries.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Failed to fetch inquiries";
      });

    // updateInquiryStatus
    builder
      .addCase(
        updateInquiryStatus.fulfilled,
        (state, action: PayloadAction<InquiryItem>) => {
          const updated = action.payload;
          const index = state.inquiries.findIndex(
            (inq) => inq._id === updated._id,
          );
          if (index !== -1) {
            state.inquiries[index] = updated;
          }
        },
      )
      .addCase(updateInquiryStatus.rejected, (state, action) => {
        state.error = (action.payload as string) || "Failed to update status";
      });

    // deleteInquiry
    builder
      .addCase(
        deleteInquiry.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.inquiries = state.inquiries.filter(
            (inq) => inq._id !== action.payload,
          );
          state.count = state.inquiries.length;
        },
      )
      .addCase(deleteInquiry.rejected, (state, action) => {
        state.error = (action.payload as string) || "Failed to delete inquiry";
      });
  },
});

export const {
  setFilterStatus,
  setFilterService,
  setSearchQuery,
  resetSubmitState,
  clearInquiryError,
} = inquirySlice.actions;

export default inquirySlice.reducer;
