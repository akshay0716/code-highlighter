import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeLineHighlighter = ({ code, startLine, endLine }) => {
  const getLineProps = (lineNumber) => {
    if (lineNumber >= startLine && lineNumber <= endLine) {
      return {
        style: { backgroundColor: 'rgba(255, 99, 71, 0.2)' }, // Highlighted in light red
      };
    }
    return {};
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-lg text-white">
      <h2 className="text-xl font-bold mb-2">Code with Highlighted Lines</h2>
      <SyntaxHighlighter
        language="xml"
        style={vscDarkPlus}
        showLineNumbers
        wrapLines
        lineProps={(lineNumber) => getLineProps(lineNumber)}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeLineHighlighter;
