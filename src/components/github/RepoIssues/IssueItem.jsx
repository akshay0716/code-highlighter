import React, { useState } from 'react';
import CodeLineHighlighter from '../../CodeLineHighlighter';

const IssueItem = ({ fileName, line, issueCount, onAddToJira, onView, code, startLine, endLine }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  console.log("code",code)

  console.log("startLine",startLine)

  console.log("endLine",endLine)

  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-2 cursor-pointer" onClick={toggleAccordion}>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold">{fileName}</h3>
          <p className="text-white">Line {line}</p>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-white">{issueCount} {issueCount === 1 ? 'issue' : 'issues'}</span>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={(e) => {
              e.stopPropagation(); // Prevent toggling the accordion when clicking this button
            }}
          >
            Autofix
          </button>
          <div className="text-white">
            {isOpen ? '▲' : '▼'} {/* Up arrow for expanded, down arrow for collapsed */}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="mt-4">
          <div className="mb-4">
            <CodeLineHighlighter
              code={code}
              startLine={startLine}
              endLine={endLine}
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              className="bg-gray-600 text-white px-4 py-2 rounded-md"
              onClick={(e) => {
                e.stopPropagation();
                onAddToJira();
              }}
            >
              + Add to Jira
            </button>
            <button
              className="bg-gray-600 text-white px-4 py-2 rounded-md"
              onClick={(e) => {
                e.stopPropagation();
                onView();
              }}
            >
              View
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IssueItem;
