// DiffViewer.jsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import * as Diff from 'diff';


const CodeLineHighlighter = ({ code, highlightedLines, language, highlightColor }) => {
    const getLineProps = (lineNumber) => {
      if (highlightedLines.some(([start, end]) => lineNumber >= start && lineNumber <= end)) {
        return {
          style: { backgroundColor: highlightColor }, // Use the highlight color
        };
      }
      return {};
    };
  
    return (
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers
        wrapLines
        lineProps={(lineNumber) => getLineProps(lineNumber)}
      >
        {code}
      </SyntaxHighlighter>
    );
  };

// Component to display code differences side by side
const DiffViewer = ({ oldCode, newCode, language = 'javascript' }) => {
  // Compute differences
  const diff = Diff.diffLines(oldCode, newCode);

  // Initialize line number trackers
  let oldLineStart = 1;
  let newLineStart = 1;
  const oldHighlights = [];
  const newHighlights = [];

  // Track line numbers to highlight
  diff.forEach((part) => {
    if (part.added) {
      newHighlights.push([newLineStart, newLineStart + part.count - 1]);
      newLineStart += part.count;
    } else if (part.removed) {
      oldHighlights.push([oldLineStart, oldLineStart + part.count - 1]);
      oldLineStart += part.count;
    } else {
      oldLineStart += part.count;
      newLineStart += part.count;
    }
  });

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <div style={{ flex: 1 }}>
        <h2 className="text-xl font-bold mb-2">Old Code</h2>
        <CodeLineHighlighter
          code={oldCode}
          highlightedLines={oldHighlights}
          language={language}
          highlightColor="rgba(255, 99, 71, 0.2)" // Light red for removed lines
        />
      </div>
      <div style={{ flex: 1 }}>
        <h2 className="text-xl font-bold mb-2">New Code</h2>
        <CodeLineHighlighter
          code={newCode}
          highlightedLines={newHighlights}
          language={language}
          highlightColor="rgba(144, 238, 144, 0.2)" // Light green for added lines
        />
      </div>
    </div>
  );
};

export default DiffViewer;
