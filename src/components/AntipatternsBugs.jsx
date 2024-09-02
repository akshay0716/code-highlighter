// src/components/AntipatternsBugs.jsx
import React from 'react';

function AntipatternsBugs({ bugs }) {
    
    console.log("AntipatternsBugs", bugs)
  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Antipatterns & Bugs</h2>
      <div className="space-y-4">
        {bugs.map((bug, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-md shadow">
            <div className="flex items-center justify-between">
              <span className={`text-sm font-medium ${bug.severity === 2 ? 'text-red-600' : 'text-yellow-600'}`}>
                Severity: {bug.severity === 2 ? 'Error' : 'Warning'}
              </span>
              <span className="font-bold text-blue-700">{bug.file}</span>
            </div>
            <p className="text-gray-700 mt-2">
              <span className="font-semibold">Message:</span> {bug.message}
            </p>
            <p className="text-gray-700 mt-1">
              <span className="font-semibold">Location:</span> Line {bug.line}, Column {bug.column}
            </p>
            <p className="text-gray-500 text-xs mt-2">Rule: {bug.ruleId}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AntipatternsBugs;
