import React from 'react';
import DiffViewer from 'react-diff-viewer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeDiffViewer = ({ oldCode, newCode, language }) => {

    const renderSyntaxHighlightedLine = (code) => (
            <SyntaxHighlighter
              language={language || 'javascript'}
              style={vscDarkPlus}
              showLineNumbers={false} // Disable line numbers here since `react-diff-viewer` handles them
              wrapLines={true}
              PreTag="div"
              customStyle={{
                margin: 0,
                padding: 0,
                lineHeight: '1.2em',
                whiteSpace: 'pre-wrap',
                backgroundColor: 'transparent',
              }}
            >
              {code}
            </SyntaxHighlighter>
          );


  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <DiffViewer
        oldValue={oldCode}
        newValue={newCode}
        splitView={true}
        showDiffOnly={true}
        useDarkTheme={true}
        leftTitle="Original Code"
        rightTitle="Modified Code"
        renderContent={renderSyntaxHighlightedLine}
        codeFoldMessageRenderer={(totalFoldedLines) => `Expand ${totalFoldedLines} lines`}
        extraLinesSurroundingDiff={1}
        linesOffset={0}
        styles={{
          variables: {
            dark: {
              highlightBackground: '#073642',
              highlightGutterBackground: '#002b36',
              gutterBackground: '#073642',
              gutterBackgroundDark: '#002b36',
              diffViewerBackground: '#011627',
              diffViewerColor: '#d6deeb',
            },
          },
        //   codeFold: {
        //     backgroundColor: '#1e1e1e',
        //     color: '#d4d4d4',
        //     cursor: 'pointer',
        //   },
        //   line: {
        //     fontSize: '14px',
        //     lineHeight: '1.5',
        //   },
        //   contentText: {
        //     color: '#d4d4d4',
        //   },
        //   gutter: {
        //     background: '#1e1e1e',
        //     color: '#d4d4d4',
        //     border: 'none',
        //   },
        }}
      />
    </div>
  );
};

export default CodeDiffViewer;


