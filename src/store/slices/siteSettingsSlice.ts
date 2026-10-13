import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export interface SubscriberItem {
  _id: string;
  email: string;
  status: "active" | "unsubscribed";
  source?: string;
  createdAt: string;
  updatedAt: string;
}

export interface SocialLinksData {
  facebook: string;
  twitter: string;
  youtube: string;
  linkedin: string;
  instagram: string;
  github: string;
}

interface SiteSettingsState {
  // Subscribers
  subscribers: SubscriberItem[];
  subscribersLoading: boolean;
  subscribersError: string | null;
  subscribeSubmitting: boolean;
  subscribeSuccess: boolean;
  subscribeMessage: string | null;
  subscribeError: string | null;

  // Social Links
  socialLinks: SocialLinksData;
  socialLoading: boolean;
  socialUpdating: boolean;
  socialError: string | null;
  socialSuccessMessage: string | null;
}

const initialState: SiteSettingsState = {
  subscribers: [],
  subscribersLoading: false,
  subscribersError: null,
  subscribeSubmitting: false,
  subscribeSuccess: false,
  subscribeMessage: null,
  subscribeError: null,

  socialLinks: {
    facebook: "",
    twitter: "",
    youtube: "",
    linkedin: "",
    instagram: "",
    github: "",
  },
  socialLoading: false,
  socialUpdating: false,
  socialError: null,
  socialSuccessMessage: null,
};

// 1. Subscribe Email (Public)
export const subscribeNewsletter = createAsyncThunk(
  "siteSettings/subscribeNewsletter",
  async (email: string, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/newsletter/subscribe`, {
        email,
      });
      return response.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || err.message || "Failed to subscribe"
      );
    }
  }
);

// 2. Fetch All Subscribers (Admin)
export const fetchSubscribers = createAsyncThunk(
  "siteSettings/fetchSubscribers",
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/admin/subscribers`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || err.message || "Failed to fetch subscribers"
      );
    }
  }
);

// 3. Update Subscriber Status (Admin)
export const updateSubscriberStatus = createAsyncThunk(
  "siteSettings/updateSubscriberStatus",
  async (
    { id, status, token }: { id: string; status: "active" | "unsubscribed"; token: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/admin/subscribers/${id}/status`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data.subscriber;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || err.message || "Failed to update subscriber"
      );
    }
  }
);

// 4. Delete Subscriber (Admin)
export const deleteSubscriber = createAsyncThunk(
  "siteSettings/deleteSubscriber",
  async ({ id, token }: { id: string; token: string }, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_BASE_URL}/admin/subscribers/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return id;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || err.message || "Failed to delete subscriber"
      );
    }
  }
);

// 5. Fetch Social Links (Public)
export const fetchSocialLinks = createAsyncThunk(
  "siteSettings/fetchSocialLinks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/social-links`);
      return response.data.socialLinks;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || err.message || "Failed to fetch social links"
      );
    }
  }
);

// 6. Update Social Links (Admin)
export const updateSocialLinks = createAsyncThunk(
  "siteSettings/updateSocialLinks",
  async (
    { links, token }: { links: Partial<SocialLinksData>; token: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/admin/social-links`,
        links,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data.socialLinks;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || err.message || "Failed to update social links"
      );
    }
  }
);

export const siteSettingsSlice = createSlice({
  name: "siteSettings",
  initialState,
  reducers: {
    resetSubscribeStatus: (state) => {
      state.subscribeSubmitting = false;
      state.subscribeSuccess = false;
      state.subscribeMessage = null;
      state.subscribeError = null;
    },
    clearSocialFeedback: (state) => {
      state.socialSuccessMessage = null;
      state.socialError = null;
    },
  },
  extraReducers: (builder) => {
    // subscribeNewsletter
    builder
      .addCase(subscribeNewsletter.pending, (state) => {
        state.subscribeSubmitting = true;
        state.subscribeSuccess = false;
        state.subscribeError = null;
        state.subscribeMessage = null;
      })
      .addCase(subscribeNewsletter.fulfilled, (state, action) => {
        state.subscribeSubmitting = false;
        state.subscribeSuccess = true;
        state.subscribeMessage = action.payload.message || "Subscribed successfully!";
      })
      .addCase(subscribeNewsletter.rejected, (state, action) => {
        state.subscribeSubmitting = false;
        state.subscribeSuccess = false;
        state.subscribeError = (action.payload as string) || "Failed to subscribe";
      });

    // fetchSubscribers
    builder
      .addCase(fetchSubscribers.pending, (state) => {
        state.subscribersLoading = true;
        state.subscribersError = null;
      })
      .addCase(fetchSubscribers.fulfilled, (state, action) => {
        state.subscribersLoading = false;
        state.subscribers = action.payload.subscribers || [];
      })
      .addCase(fetchSubscribers.rejected, (state, action) => {
        state.subscribersLoading = false;
        state.subscribersError = (action.payload as string) || "Failed to load subscribers";
      });

    // updateSubscriberStatus
    builder
      .addCase(updateSubscriberStatus.fulfilled, (state, action: PayloadAction<SubscriberItem>) => {
        const updated = action.payload;
        const index = state.subscribers.findIndex((s) => s._id === updated._id);
        if (index !== -1) {
          state.subscribers[index] = updated;
        }
      });

    // deleteSubscriber
    builder
      .addCase(deleteSubscriber.fulfilled, (state, action: PayloadAction<string>) => {
        state.subscribers = state.subscribers.filter((s) => s._id !== action.payload);
      });

    // fetchSocialLinks
    builder
      .addCase(fetchSocialLinks.pending, (state) => {
        state.socialLoading = true;
      })
      .addCase(fetchSocialLinks.fulfilled, (state, action) => {
        state.socialLoading = false;
        if (action.payload) {
          state.socialLinks = action.payload;
        }
      })
      .addCase(fetchSocialLinks.rejected, (state, action) => {
        state.socialLoading = false;
        state.socialError = (action.payload as string) || "Failed to load social links";
      });

    // updateSocialLinks
    builder
      .addCase(updateSocialLinks.pending, (state) => {
        state.socialUpdating = true;
        state.socialError = null;
        state.socialSuccessMessage = null;
      })
      .addCase(updateSocialLinks.fulfilled, (state, action) => {
        state.socialUpdating = false;
        if (action.payload) {
          state.socialLinks = action.payload;
        }
        state.socialSuccessMessage = "Social media links updated successfully!";
      })
      .addCase(updateSocialLinks.rejected, (state, action) => {
        state.socialUpdating = false;
        state.socialError = (action.payload as string) || "Failed to update social links";
      });
  },
});

export const { resetSubscribeStatus, clearSocialFeedback } = siteSettingsSlice.actions;
export default siteSettingsSlice.reducer;
