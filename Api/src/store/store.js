import { configureStore } from "@reduxjs/toolkit";
import postsReducers from '../feature/apiSlice'

export const store = configureStore({
    reducer :{
        posts: postsReducers, // Add your slice here
    }
})