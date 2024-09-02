import React from 'react';

const SearchBar = ({ value, onChange }) => (
  <input 
    type="text"
    placeholder="Search"
    className="bg-gray-800 text-white p-2 rounded-md w-full mb-4"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default SearchBar;
