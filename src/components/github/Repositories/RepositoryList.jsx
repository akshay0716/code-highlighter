import React from 'react';
import RepositoryItem from './RepositoryItem';

const RepositoryList = ({ repositories }) => (
  <div>
    {repositories.map((repo, index) => (
      <RepositoryItem 
        key={index}
        name={repo.name}
        visibility={repo.visibility}
        language={repo.language}
        size={repo.size}
        lastUpdated={repo.lastUpdated}
      />
    ))}
  </div>
);

export default RepositoryList;
