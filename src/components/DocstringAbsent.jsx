// src/components/DocstringAbsent.jsx
import React from 'react';

function DocstringAbsent({ docstringAbsent }) {
    console.log("DocstringAbsent", docstringAbsent)
  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Docstring Absence Report</h2>
      <div className="space-y-4">
        {docstringAbsent.map((file, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-md shadow">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                File Path: 
                <span className="text-blue-600 ml-2">{file.filePath}</span>
              </span>
              <span className={`font-bold ${file.errorCount > 0 ? 'text-red-600' : 'text-green-600'}`}>Errors: {file.errorCount}</span>
            </div>
            <div className="mt-2 text-gray-700">
              <p>
                <span className="font-semibold">Fixable Errors:</span> {file.fixableErrorCount}
              </p>
              <p>
                <span className="font-semibold">Fixable Warnings:</span> {file.fixableWarningCount}
              </p>
              <p>
                <span className="font-semibold">Warnings:</span> {file.warningCount}
              </p>
              <p>
                <span className="font-semibold">Fatal Errors:</span> {file.fatalErrorCount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DocstringAbsent;
