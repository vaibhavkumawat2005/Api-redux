import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the base API URL
const BASE_URL = "https://jsonplaceholder.typicode.com";

// Fetch paginated posts
export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async ({ page = 1, limit = 10 }) => {
        const response = await axios.get(`${BASE_URL}/posts`, {
            params: { _page: page, _limit: limit },
        });

        const total = parseInt(response.headers["x-total-count"] || "100"); // ✅ Fixed

        return {
            posts: response.data,
            total,
        };
    }
);

// Fetch a single post along with comments
export const fetchPostById = createAsyncThunk(
    "posts/fetchPostById",
    async (postId) => {
        const [postResponse, commentsResponse] = await Promise.all([
            axios.get(`${BASE_URL}/posts/${postId}`),
            axios.get(`${BASE_URL}/posts/${postId}/comments`), // ✅ Fixed incorrect URL
        ]);

        return {
            ...postResponse.data,
            comments: commentsResponse.data,
        };
    }
);

const postSlice = createSlice({
    name: "posts",
    initialState: {
        items: [],
        currentPost: null,
        status: "idle",
        error: null,
        searchterms: "",
        currentPage: 1,
        totalPosts: 0,
        postsPerPage: 10,
        filter: {
            userId: null,
        },
    },

    reducers: {
        setSearchTerms: (state, action) => {
            state.searchterms = action.payload;
            state.currentPage = 1;
        },
        setCurrrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = { ...state.filter, ...action.payload };
            state.currentPage = 1;
        },
        clearFilter: (state) => {
            state.filter = { userId: null };
            state.searchterms = "";
            state.currentPage = 1;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload.posts;
                state.totalPosts = action.payload.total; // ✅ Fixed
                state.error = null;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(fetchPostById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchPostById.fulfilled, (state, action) => {
                state.status = "succeeded"; // ✅ Fixed
                state.currentPost = action.payload;
            })
            .addCase(fetchPostById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { setSearchTerms, setCurrrentPage, setFilter, clearFilter } = postSlice.actions;
export default postSlice.reducer;
