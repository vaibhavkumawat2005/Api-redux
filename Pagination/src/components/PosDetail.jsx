import React from 'react'
import { useSelector } from "react-redux";

const PostDetail = () => {
    const { currentPost } = useSelector((state) => state.posts);
    if (!currentPost) return null;

    return (
        <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">{currentPost.title}</h2>
            <p className="mt-2 text-gray-700">{currentPost.body}</p>
            <h3 className="mt-4 text-xl font-semibold">Comments:</h3>
            <ul className="mt-2 space-y-2">
                {currentPost.comments?.length > 0 ? (
                    currentPost.comments.map((comment) => (
                        <li key={comment.id} className="bg-white p-3 rounded-lg shadow-sm">
                            {comment.body}
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
