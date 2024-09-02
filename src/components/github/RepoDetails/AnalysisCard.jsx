import React from 'react';

const AnalysisCard = ({ title, description, icon }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
    <div className="text-4xl">{icon}</div>
    <div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  </div>
);

export default AnalysisCard;
