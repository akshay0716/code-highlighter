import React from 'react';

const StatCard = ({ title, count }) => (
  <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-4xl font-extrabold">{count}</p>
  </div>
);

export default StatCard;
