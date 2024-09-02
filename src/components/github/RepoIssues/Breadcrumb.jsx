import React from 'react';

const Breadcrumb = ({ paths }) => {
  return (
    <nav className="text-white text-sm mb-4">
      {paths.map((path, index) => (
        <span key={index}>
          {path}
          {index < paths.length - 1 && ' > '}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
