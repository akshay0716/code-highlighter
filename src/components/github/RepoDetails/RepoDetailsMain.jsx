import React from 'react';
import Header from './Header';
import StatCard from './StatCard';
import AnalysisCard from './AnalysisCard';

const RepoDetailsMain = () => {
  const headerButtons = [
    { label: 'Fetch latest results', onClick: () => console.log('Fetch latest results') },
    { label: 'Change base branch', onClick: () => console.log('Change base branch') },
    { label: 'Start new scan', primary: true, onClick: () => console.log('Start new scan') },
  ];

  const stats = [
    { title: 'Docstring Absent', count: 3 },
    { title: 'Security Issues', count: 3 },
    { title: 'Complex functions', count: 0 },
    { title: 'Antipatterns/Bugs', count: 17 },
  ];

  const analysis = [
    { title: 'Dead code', description: 'Find unused code', icon: '🐞' },
    { title: 'Duplicate code', description: 'Find duplicated code across the repo', icon: '🔁' },
    { title: 'Secrets detection', description: 'Detect password, keys, secrets, etc.', icon: '🔑' },
    { title: 'Infra security', description: 'Detect infrastructure vulnerabilities', icon: '🔒' },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <Header title="react-node-boilerplate" buttons={headerButtons} />
      
      <div className="grid grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} title={stat.title} count={stat.count} />
        ))}
      </div>

      <h2 className="text-xl font-bold mb-4">Advanced Analysis</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {analysis.map((item, index) => (
          <AnalysisCard key={index} title={item.title} description={item.description} icon={item.icon} />
        ))}
      </div>
    </div>
  );
};

export default RepoDetailsMain;
