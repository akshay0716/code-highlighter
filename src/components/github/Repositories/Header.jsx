import React from 'react';

const Header = ({ title, totalRepositories, onRefresh, onAdd }) => {
  return (
    <header className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-400">{totalRepositories} total repositories</p>
      </div>
      <div className="space-x-4">
        <button 
          className="bg-gray-700 text-white px-4 py-2 rounded-md" 
          onClick={onRefresh}
        >
          Refresh all
        </button>
        <button 
          className="bg-gray-500 text-black px-4 py-2 rounded-md" 
          onClick={onAdd}
        >
          + Add Repository
        </button>
      </div>
    </header>
  );
};

export default Header;
