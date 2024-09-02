import React from 'react';

const Header = ({ title, buttons }) => {
  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="space-x-4">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md ${button.primary ? 'bg-gray-500 text-black' : 'bg-gray-700 text-white'}`}
            onClick={button.onClick}
          >
            {button.label}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
