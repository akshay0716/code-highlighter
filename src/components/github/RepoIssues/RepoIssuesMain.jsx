import React from 'react';
import Breadcrumb from './Breadcrumb';
import Header from './Header';
import IssueList from './IssueList';
import IssueDescription from './IssueDescription';

const RepoIssuesMain = () => {
  const issues = [
    {
      fileName: 'js/bootstrap.bundle.js',
      line: 10,
      issueCount: 74,
      onAddToJira: () => { },
      onView: () => { },
      code: `// Example code snippet
  function example() {
    console.log('This is an example function.');
  }
  example();`,
      startLine: 1,
      endLine: 3,
    },
    {
      fileName: 'js/bootstrap.js',
      line: 15,
      issueCount: 69,
      onAddToJira: () => { },
      onView: () => { },
      code: `// Another example code snippet
  const anotherExample = () => {
    console.log('This is another example.');
  };`,
      startLine: 1,
      endLine: 2,
    },
    {
      fileName: 'owl/owl.carousel.js',
      line: 20,
      issueCount: 2,
      onAddToJira: () => { },
      onView: () => { },
      code: `// More example code snippet
  let exampleVar = 42;
  console.log(exampleVar);`,
      startLine: 1,
      endLine: 2,
    },
  ];


  const description = `Omitting the trailing comma can lead to more consistent coding practices, especially in teams where members might use different programming languages or coding styles. Some languages, like JSON, do not support trailing commas, and maintaining consistency across different codebases can reduce confusion and errors.`;

  const badPractice = `const obj = {
  name: 'John',
  age: 30,
};`;

  const goodPractice = `const obj = {
  name: 'John',
  age: 30
};`;

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <Breadcrumb paths={['Analysis', 'Antipatterns', 'Unexpected trailing comma']} />
      <Header
        repoName="Nodejs-Boilerplate"
        branchName="main"
        issueCount={issues.length}
        onAutofix={() => console.log('Autofix issues')}
      />
      <div className="flex">
        {/* Left Side (Issue List) */}
        <div className="flex-[7] pr-4">
          <IssueList issues={issues} />
        </div>
        {/* Right Side (Description) */}
        <div className="flex-[3]">
          <IssueDescription
            description={description}
            badPractice={badPractice}
            goodPractice={goodPractice}
          />
        </div>
      </div>
    </div>
  );
};

export default RepoIssuesMain;
