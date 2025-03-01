import React from "react";
import { useDispatch } from "react-redux";
import { setSearchTerms } from "../features/ApiSlice";
import { Search } from "lucide-react";

const SearchBar = () => {
    const dispatch = useDispatch();

    return (
        <div className="flex justify-center mb-6">
            <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                    type="text"
                    placeholder="Search posts..."
                    className="w-full pl-10 pr-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    onChange={(e) => dispatch(setSearchTerms(e.target.value))}
                />
            </div>
        </div>
    );
};

export default SearchBar;
