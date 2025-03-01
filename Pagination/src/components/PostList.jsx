import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, fetchPostById } from "../features/ApiSlice";
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
        <div className="w-full p-6 bg-gray-900 text-white rounded-lg shadow-xl overflow-hidden">
            <h1 className="text-4xl font-bold text-center mb-6 text-gray-100">Posts List</h1>
            <SearchBar />
            {status === "loading" && <p className="text-center text-yellow-400">Loading...</p>}
            {status === "failed" && <p className="text-center text-red-400">Error: {error}</p>}
            
            <ul className="space-y-4 mt-4">
                {items && items.length > 0 ? (
                    items.map((post) => (
                        <li
                            key={post.id}
                            className="bg-gray-800 text-gray-200 shadow-lg p-5 rounded-lg transition-transform transform hover:scale-101 hover:shadow-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => dispatch(fetchPostById(post.id))}
                                className="text-xl font-semibold text-blue-400 hover:text-blue-600 hover:underline"
                            >
                                {post.title}
                            </button>
                        </li>
                    ))
                ) : (
                    <p className="text-center text-gray-400">No posts available</p>
                )}
            </ul>
            
            <div className="mt-6">
                <Pagination total={totalPosts} perPage={postsPerPage} currentPage={currentPage} />
            </div>
            <PostDetail />
        </div>
    );
};

export default PostList;