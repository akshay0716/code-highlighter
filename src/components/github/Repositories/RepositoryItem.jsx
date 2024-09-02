import React from 'react';

const RepositoryItem = ({ name, visibility, language, size, lastUpdated }) => (
  <div className="bg-gray-800 p-4 rounded-lg mb-2 flex justify-between items-center">
    <div>
      <h3 className="text-xl font-bold">{name}</h3>
      <span className={`text-sm ${visibility === 'public' ? 'text-green-500' : 'text-yellow-500'}`}>
        {visibility}
      </span>
      <p className="text-white">{language} • {size} KB</p>
    </div>
    <p className="text-white">{`Updated ${lastUpdated} days ago`}</p>
  </div>
);

export default RepositoryItem;
