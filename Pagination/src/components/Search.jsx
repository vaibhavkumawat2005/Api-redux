import React from 'react'
import { useDispatch } from "react-redux";
import {setSearchTerms} from "../features/ApiSlice"

const SearchBar = () => {
    const dispatch = useDispatch();

    return (
        <div className="flex justify-center mb-4">
            <input
                type="text"
                placeholder="Search posts..."
                className="border p-2 rounded-md w-full max-w-md shadow-sm"
                onChange={(e) => dispatch(setSearchTerms(e.target.value))}
            />
        </div>
    );
};

export default SearchBar;
