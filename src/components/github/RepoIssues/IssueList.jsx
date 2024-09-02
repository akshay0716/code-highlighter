import React from 'react';
import IssueItem from './IssueItem';

const IssueList = ({ issues }) => (
  <div>
    <h2 className="text-xl font-bold text-white mb-4">{issues.length} Docstrings absent</h2>
    {issues.map((issue, index) => (
      <IssueItem
        key={index}
        fileName={issue.fileName}
        line={issue.line}
        issueCount={issue.issueCount}
        onAddToJira={issue.onAddToJira}
        onView={issue.onView}
        code={issue.code}         
        startLine={issue.startLine}
        endLine={issue.endLine}
      />
    ))}
  </div>
);

export default IssueList;
