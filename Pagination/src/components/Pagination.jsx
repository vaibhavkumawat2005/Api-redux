import React from 'react'
import {useDispatch} from 'react-redux'
import {setCurrrentPage} from '../features/ApiSlice'

const Pagination = ({ total, perPage, currentPage }) => {
    const dispatch = useDispatch();
    const totalPages = Math.ceil(total / perPage);

    return (
        <div className="mt-6 flex justify-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i}
                    onClick={() => dispatch(setCurrrentPage(i + 1))}
                    disabled={currentPage === i + 1}
                    className={`px-4 py-2 rounded-md ${
                        currentPage === i + 1
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                >
                    {i + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination
