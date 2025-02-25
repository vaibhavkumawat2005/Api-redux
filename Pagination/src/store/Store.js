import { configureStore } from "@reduxjs/toolkit";
import postsReducers from '../features/ApiSlice'

export const store = configureStore({
    reducer :{
        posts: postsReducers, // Add your slice here
    }
})