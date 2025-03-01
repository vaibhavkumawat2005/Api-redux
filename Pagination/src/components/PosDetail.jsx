import React from 'react'
import { useSelector } from "react-redux";

const PostDetail = () => {
    const { currentPost } = useSelector((state) => state.posts);
    if (!currentPost) return null;

    return (
        <div className="w-full mt-6 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 border-b pb-2">{currentPost.title}</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">{currentPost.body}</p>
            <h3 className="mt-6 text-2xl font-semibold text-gray-900">Comments:</h3>
            <ul className="mt-4 space-y-3">
                {currentPost.comments?.length > 0 ? (
                    currentPost.comments.map((comment) => (
                        <li key={comment.id} className="bg-gray-100 p-4 rounded-lg shadow-md border border-gray-300">
                            <p className="text-gray-800">{comment.body}</p>
                        </li>
                    ))
                ) : (
                    <p className="text-gray-500">No comments available</p>
                )}
            </ul>
        </div>
    );
};

export default PostDetail