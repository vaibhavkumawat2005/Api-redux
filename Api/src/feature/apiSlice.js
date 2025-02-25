// Redux, redux-thunk

import {createSlice , createAsyncThunk} from "@reduxjs/toolkit"

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const reponse = await fetch ("https://jsonplaceholder.typicode.com/posts");
    return reponse.json();
});


const postSlice = createSlice({
    name: 'posts',
    initialState:{
        data: [],
        loading: false,
        error :null,
    },


    extraReducers:(builder) => {
        builder
        .addCase(fetchPosts.pending, (state) =>{

            state.loading = true;
        })
        .addCase(fetchPosts.fulfilled , (state,action) => {
            state.loading = false;
            state.data = action.payload; 
        })
        .addCase(fetchPosts.rejected, (state,action) => {
            state.loading = false;
            state.error = action.error.message;  //Assuming error message is in the error object
        });
    },


});


export default postSlice.reducer