import React, { useState } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import RepositoryList from './RepositoryList';

const RepositoriesMain = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [repositories, setRepositories] = useState([
    { name: 'react-node-boilerplate', visibility: 'public', language: 'JavaScript', size: 130, lastUpdated: 2157 },
    { name: 'Bootstrap-Boilerplate', visibility: 'public', language: 'JavaScript', size: 1393, lastUpdated: 2029 },
    { name: 'myrltech', visibility: 'private', language: 'JavaScript', size: 116682, lastUpdated: 2011 },
    { name: 'akshay-myrltech', visibility: 'private', language: 'No commit', size: 0, lastUpdated: 2004 },
    { name: 'Nodejs-Project', visibility: 'public', language: 'JavaScript', size: 3, lastUpdated: 1984 },
  ]);

  const filteredRepositories = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRefresh = () => {
    console.log('Refresh all repositories');
  };

  const handleAddRepository = () => {
    console.log('Add new repository');
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <Header 
        title="Repositories" 
        totalRepositories={repositories.length} 
        onRefresh={handleRefresh} 
        onAdd={handleAddRepository} 
      />
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <RepositoryList repositories={filteredRepositories} />
    </div>
  );
};

export default RepositoriesMain;
