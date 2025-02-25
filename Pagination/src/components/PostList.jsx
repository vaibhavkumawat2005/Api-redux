import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, fetchPostById, setSearchTerms, setCurrrentPage } from "../features/ApiSlice";
import SearchBar from "./Search";
import PostDetail from "./PosDetail";
import Pagination from "./PAgination";

const PostList = () => {
    const dispatch = useDispatch();
    const { items, status, error, currentPage, totalPosts, postsPerPage } = useSelector(
        (state) => state.posts
    );

    useEffect(() => {
        dispatch(fetchPosts({ page: currentPage, limit: postsPerPage }));
    }, [dispatch, currentPage]);

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-center">Posts List</h1>
            <SearchBar />
            {status === "loading" && <p className="text-center text-blue-500">Loading...</p>}
            {status === "failed" && <p className="text-center text-red-500">Error: {error}</p>}
            
            <ul className="space-y-3">
                {items && items.length > 0 ? (
                    items.map((post) => (
                        <li key={post.id} className="bg-white shadow-md p-4 rounded-lg">
                            <button
                                onClick={() => dispatch(fetchPostById(post.id))}
                                className="text-lg font-semibold text-blue-600 hover:underline"
                            >
                                {post.title}
                            </button>
                        </li>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No posts available</p>
                )}
            </ul>
            <Pagination total={totalPosts} perPage={postsPerPage} currentPage={currentPage} />
            <PostDetail />
        </div>
    );
};







export default PostList;
