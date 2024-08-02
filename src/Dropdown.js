import React from 'react';

const Dropdown = ({ selectedOptions, setSelectedOptions }) => {
  const options = ['Alphabets', 'Numbers', 'Highest Alphabet'];

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  return (
    <div>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Dropdown;
