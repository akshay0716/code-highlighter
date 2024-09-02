import React from 'react';
import ReactDiffViewer from 'react-diff-viewer';

const oldCode = `
const a = 10
const b = 10
const c = () => console.log('foo')

if(a > 10) {
  console.log('bar')
}

console.log('done')
`;
const newCode = `
const a = 10
const boo = 10

if(a === 10) {
  console.log('bar')
}
`;

const OldCodeViewer = ({ oldValue }) => {
    return (
      <div className="border p-2">
        <h2 className="text-lg font-semibold mb-2">Old Code</h2>
        <ReactDiffViewer
          oldValue={oldValue}
          splitView={false}
        //   renderContent={({ line }) => <div style={{ padding: '4px', borderBottom: '1px solid #ddd' }}>{line.content}</div>}
        />
      </div>
    );
  };

  const NewCodeViewer = ({ newValue }) => {
    return (
      <div className="border p-2">
        <h2 className="text-lg font-semibold mb-2">New Code</h2>
        <ReactDiffViewer
          newValue={newValue}
          splitView={false}
        //   renderContent={({ line }) => <div style={{ padding: '4px', borderBottom: '1px solid #ddd' }}>{line.content}</div>}
        />
      </div>
    );
  };
  

  const CustomLineRenderer = ({ line, lineNumber }) => {
    const style = getHighlightStyle(lineNumber);
  
    return (
      <div style={{ ...style, padding: '4px', borderBottom: '1px solid #ddd' }}>
        {line.content}
      </div>
    );
  };

function CodeComparison() {
  return (
    <div className="p-4">
      <button className="bg-blue-500 text-white py-2 px-4 rounded mb-4">Create Pull Request</button>
      <div className="flex space-x-4">
        <div className="flex-1 border p-2">
          <OldCodeViewer oldValue={oldCode} />
        </div>
        <div className="flex-1 border p-2">
          <NewCodeViewer newValue={newCode} />
        </div>
      </div>
    </div>
  )
}

export default CodeComparison