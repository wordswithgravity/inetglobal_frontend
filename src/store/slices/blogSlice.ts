import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../utils/apiConfig";

export interface GraphPoint {
  label: string;
  value: number;
  color?: string;
}

export interface GraphData {
  title: string;
  type: "bar" | "line" | "pie" | "stats";
  data: GraphPoint[];
}

export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface LinkItem {
  text: string;
  url: string;
  isExternal?: boolean;
}

export interface BlogSection {
  _id?: string;
  heading: string;
  contentHtml?: string;
  paragraphs: string[];
  contentPoints?: string[];
  quote?: string;
  sectionImage?: {
    url: string;
    caption?: string;
    alt?: string;
  };
  tableData?: TableData;
  graphData?: GraphData;
  links?: LinkItem[];
  keyTakeaways?: string[];
}

export interface BlogItem {
  _id?: string;
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  authorBio: string;
  imageUrl: string;
  featured?: boolean;
  status: "draft" | "published" | "scheduled";
  scheduledAt?: string | null;
  tags: string[];
  sections: BlogSection[];
  relatedSlugs: string[];
  views?: number;
  createdAt?: string;
  updatedAt?: string;
}

interface BlogState {
  blogs: BlogItem[];
  adminBlogs: BlogItem[];
  currentBlog: BlogItem | null;
  loading: boolean;
  adminLoading: boolean;
  uploadingImage: boolean;
  error: string | null;
  successMessage: string | null;
}

const initialState: BlogState = {
  blogs: [],
  adminBlogs: [],
  currentBlog: null,
  loading: false,
  adminLoading: false,
  uploadingImage: false,
  error: null,
  successMessage: null,
};

// 1. Fetch public blogs
export const fetchPublishedBlogs = createAsyncThunk(
  "blog/fetchPublishedBlogs",
  async (
    params: { category?: string; search?: string; lang?: string } | undefined,
    { rejectWithValue },
  ) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/blogs`, {
        params,
      });
      return response.data.blogs;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data?.message || err.message);
      }
      return rejectWithValue("Failed to fetch blogs");
    }
  },
);

// 2. Fetch single blog by slug or ID
export const fetchBlogBySlug = createAsyncThunk(
  "blog/fetchBlogBySlug",
  async (
    payload: string | { identifier: string; lang?: string },
    { rejectWithValue },
  ) => {
    try {
      const identifier =
        typeof payload === "string" ? payload : payload.identifier;
      const lang = typeof payload === "string" ? undefined : payload.lang;
      const response = await axios.get(`${API_BASE_URL}/blogs/${identifier}`, {
        params: lang ? { lang } : undefined,
      });
      return response.data.blog;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data?.message || err.message);
      }
      return rejectWithValue("Failed to fetch blog details");
    }
  },
);

// 3. Admin: Fetch all blogs (Draft + Published)
export const fetchAdminBlogs = createAsyncThunk(
  "blog/fetchAdminBlogs",
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/admin/blogs`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data.blogs;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data?.message || err.message);
      }
      return rejectWithValue("Failed to fetch admin blogs");
    }
  },
);

// 4. Admin: Create Blog
export const createAdminBlog = createAsyncThunk(
  "blog/createAdminBlog",
  async (
    { blogData, token }: { blogData: Partial<BlogItem>; token: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/admin/blogs`,
        blogData,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      return response.data.blog;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data?.message || err.message);
      }
      return rejectWithValue("Failed to create blog");
    }
  },
);

// 5. Admin: Update Blog
export const updateAdminBlog = createAsyncThunk(
  "blog/updateAdminBlog",
  async (
    {
      id,
      blogData,
      token,
    }: { id: string; blogData: Partial<BlogItem>; token: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/admin/blogs/${id}`,
        blogData,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      return response.data.blog;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data?.message || err.message);
      }
      return rejectWithValue("Failed to update blog");
    }
  },
);

// 6. Admin: Delete Blog
export const deleteAdminBlog = createAsyncThunk(
  "blog/deleteAdminBlog",
  async ({ id, token }: { id: string; token: string }, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_BASE_URL}/admin/blogs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return id;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data?.message || err.message);
      }
      return rejectWithValue("Failed to delete blog");
    }
  },
);

// 7. Admin: Upload Image to Cloudinary
export const uploadImageCloudinary = createAsyncThunk(
  "blog/uploadImageCloudinary",
  async (
    { file, token }: { file: File; token: string },
    { rejectWithValue },
  ) => {
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await axios.post(
        `${API_BASE_URL}/admin/upload-image`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        },
      );
      return response.data.url;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data?.message || err.message);
      }
      return rejectWithValue("Image upload to Cloudinary failed");
    }
  },
);

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    clearBlogMessages: (state) => {
      state.error = null;
      state.successMessage = null;
    },
    setCurrentBlog: (state, action: PayloadAction<BlogItem | null>) => {
      state.currentBlog = action.payload;
    },
  },
  extraReducers: (builder) => {
    // fetchPublishedBlogs
    builder.addCase(fetchPublishedBlogs.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPublishedBlogs.fulfilled, (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
    });
    builder.addCase(fetchPublishedBlogs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // fetchBlogBySlug
    builder.addCase(fetchBlogBySlug.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchBlogBySlug.fulfilled, (state, action) => {
      state.loading = false;
      state.currentBlog = action.payload;
    });
    builder.addCase(fetchBlogBySlug.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // fetchAdminBlogs
    builder.addCase(fetchAdminBlogs.pending, (state) => {
      state.adminLoading = true;
      state.error = null;
    });
    builder.addCase(fetchAdminBlogs.fulfilled, (state, action) => {
      state.adminLoading = false;
      state.adminBlogs = action.payload;
    });
    builder.addCase(fetchAdminBlogs.rejected, (state, action) => {
      state.adminLoading = false;
      state.error = action.payload as string;
    });

    // createAdminBlog
    builder.addCase(createAdminBlog.pending, (state) => {
      state.adminLoading = true;
      state.error = null;
    });
    builder.addCase(createAdminBlog.fulfilled, (state, action) => {
      state.adminLoading = false;
      state.adminBlogs.unshift(action.payload);
      state.successMessage = "Blog post created successfully!";
    });
    builder.addCase(createAdminBlog.rejected, (state, action) => {
      state.adminLoading = false;
      state.error = action.payload as string;
    });

    // updateAdminBlog
    builder.addCase(updateAdminBlog.pending, (state) => {
      state.adminLoading = true;
      state.error = null;
    });
    builder.addCase(updateAdminBlog.fulfilled, (state, action) => {
      state.adminLoading = false;
      const index = state.adminBlogs.findIndex(
        (b) => (b._id || b.id) === (action.payload._id || action.payload.id),
      );
      if (index !== -1) {
        state.adminBlogs[index] = action.payload;
      }
      state.successMessage = "Blog post updated successfully!";
    });
    builder.addCase(updateAdminBlog.rejected, (state, action) => {
      state.adminLoading = false;
      state.error = action.payload as string;
    });

    // deleteAdminBlog
    builder.addCase(deleteAdminBlog.fulfilled, (state, action) => {
      state.adminBlogs = state.adminBlogs.filter(
        (b) => (b._id || b.id) !== action.payload,
      );
      state.successMessage = "Blog post deleted permanently.";
    });

    // uploadImageCloudinary
    builder.addCase(uploadImageCloudinary.pending, (state) => {
      state.uploadingImage = true;
    });
    builder.addCase(uploadImageCloudinary.fulfilled, (state) => {
      state.uploadingImage = false;
    });
    builder.addCase(uploadImageCloudinary.rejected, (state, action) => {
      state.uploadingImage = false;
      state.error = action.payload as string;
    });
  },
});

export const { clearBlogMessages, setCurrentBlog } = blogSlice.actions;
export default blogSlice.reducer;
