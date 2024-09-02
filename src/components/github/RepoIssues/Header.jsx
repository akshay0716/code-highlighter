import React from 'react';

const Header = ({ repoName, branchName, issueCount, onFilter, onBulkSelect, onGenerateDocstring }) => {
  return (
    <header className="flex justify-between items-center mb-4 p-4 bg-gray-900 text-white">
      <div>
        <h2 className="text-2xl font-bold">{repoName}</h2>
        <p className="text-white">Base branch: {branchName}</p>
      </div>
      <div className="flex space-x-4">
        <button 
          className="bg-gray-700 text-white px-4 py-2 rounded-md flex items-center"
          onClick={onFilter}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v1H3V4zm0 3h18v1H3V7zm0 3h18v1H3v-1zm0 3h18v1H3v-1zm0 3h18v1H3v-1z" />
          </svg>
          Filter files
        </button>
        <button 
          className="bg-gray-700 text-white px-4 py-2 rounded-md flex items-center"
          onClick={onBulkSelect}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v6h14V3m-7 18v-6m-6 6h12m-6-6h6v6H5v-6z" />
          </svg>
          Bulk Select
        </button>
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center"
          onClick={onGenerateDocstring}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 3h6m-6-6V4a2 2 0 012-2h6a2 2 0 012 2v6m-8 8h6m-6-3h6m-6-3v6" />
          </svg>
          Generate docstring
        </button>
      </div>
    </header>
  );
};

export default Header;
