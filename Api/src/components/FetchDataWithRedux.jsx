import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../feature/apiSlice';

const FetchDataWithRedux = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (loading) return <p className="text-center text-blue-500 text-lg">Loading...</p>;
    if (error) return <p className="text-center text-red-500 text-lg">Error: {error.message || 'Something went wrong'}</p>;

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-4">Fetched Data</h1>
            {data?.length > 0 ? (
                <ul className="space-y-3">
                    {data.map((item) => (
                        <li 
                            key={item.id} 
                            className="p-3 bg-gray-100 border-l-4 border-blue-500 rounded-md shadow-sm"
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center text-gray-600">No data available</p>
            )}
        </div>
    );
}

export default FetchDataWithRedux;
