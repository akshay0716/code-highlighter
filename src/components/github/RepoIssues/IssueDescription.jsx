import React from 'react';

const IssueDescription = ({ description, badPractice, goodPractice }) => (
  <div className="bg-gray-900 p-4 rounded-lg mb-4">
    <h4 className="text-lg font-bold">Description</h4>
    <p className="text-white mb-4">{description}</p>
    <h5 className="text-md font-bold text-red-500">Bad practice</h5>
    <pre className="bg-gray-800 text-red-500 p-2 rounded-md mb-4">{badPractice}</pre>
    <h5 className="text-md font-bold text-green-500">Good practice</h5>
    <pre className="bg-gray-800 text-green-500 p-2 rounded-md">{goodPractice}</pre>
  </div>
);

export default IssueDescription;
