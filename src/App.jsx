import React, { useState, useEffect } from 'react';
// import AntipatternsBugs from './components/AntipatternsBugs';
// import DocstringAbsent from './components/DocstringAbsent';
// import SecurityIssues from './components/SecurityIssues';
import "./App.css"
import CodeDiffViewer from './components/CodeDiffViewer';
import CodeLineHighlighter from './components/CodeLineHighlighter';
import CustomDiff from './components/CustomDiff';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const bugData = {
  extra: {
    lines: `      <activity
      android:name=".MainActivity"
      android:label="@string/app_name"
      android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode"
      android:launchMode="singleTask"
      android:windowSoftInputMode="adjustResize"
      android:exported="true">
      <intent-filter>
          <action android:name="android.intent.action.MAIN" /> 
           <activity
      android:name=".MainActivity"
      android:label="@string/app_name"
      android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode"
      android:launchMode="singleTask"
      android:windowSoftInputMode="adjustResize"
      android:exported="true">
      <intent-filter>
          <action android:name="android.intent.action.MAIN" />
           <action android:name="android.intent.action.MAIN" /> 
           <activity
      android:name=".MainActivity"
      android:label="@string/app_name"
      android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode"
      android:launchMode="singleTask"
      android:windowSoftInputMode="adjustResize"
      android:exported="true">
      <intent-filter>
          <action android:name="android.intent.action.MAIN" />
          `,
  },
  start: {
    line: 15,
  },
  end: {
    line: 17,
  },
};

const oldCode = `
import React, { useState, useEffect } from 'react';
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }, [count]);
  return (
    <div>
      <h1>Hello, World!</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me  Click me Click me
      </button>
    </div>
  );
}
export default App;
import React, { useState, useEffect } from 'react';
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('React');
  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }, [count]);
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
export default App;
import React, { useState, useEffect } from 'react';
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
export default App;
`;

const newCode = `
import React, { useState, useEffect } from 'react';
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('React');
  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }, [count]);
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
export default App;
import React, { useState, useEffect } from 'react';
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('React');
  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }, [count]);
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
export default App;
import React, { useState, useEffect } from 'react';
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('React');
  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }, [count]);
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me 
      </button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
export default App;
`;


function App() {


  return (
    <Router>
      <Routes>


      <Route path="/" element={
          <div className="min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-4xl font-bold mb-8">Code Line Highlighter</h1>
            <CodeLineHighlighter
              code={bugData.extra.lines}
              startLine={bugData.start.line}
              endLine={bugData.end.line}
            />
          </div>} />

        <Route path="/code-hightlighter" element={
          <div className="min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-4xl font-bold mb-8">Code Line Highlighter</h1>
            <CodeLineHighlighter
              code={bugData.extra.lines}
              startLine={bugData.start.line}
              endLine={bugData.end.line}
            />
          </div>} />


        <Route path="/code-difference-viewer" element={
          <div className="min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-4xl font-bold mb-8">Code Difference Viewer</h1>
            <CodeDiffViewer oldCode={oldCode} newCode={newCode} language="javascript" />
          </div>} />


        <Route path="/custom-code-difference-viewer" element={
          <div className="min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-4xl font-bold mb-8">Code Diff Viewer Example</h1>
            <CustomDiff oldCode={oldCode} newCode={newCode} language="javascript" />
          </div>} />

      </Routes>
    </Router>
  );
}

export default App;
