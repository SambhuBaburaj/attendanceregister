import React, { useState } from 'react';

const DropdownMenu = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [showOptions, setShowOptions] = useState(true)
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleOptionClick = (option) => {
    setSelectedValue(option);
  };

  return (
    <div className="relative">
      <button
        className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md focus:outline-none"
        onClick={() => setShowOptions(!showOptions)}
      >
        {selectedValue || 'Select an option'}
        <svg
          className="w-4 h-4 inline-block ml-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.707a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className="absolute z-10 w-full mt-2 rounded-md bg-white shadow-lg"
        style={{ display: showOptions ? 'block' : 'none' }}
      >
        {options.map((option) => (
          <button
            key={option}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
