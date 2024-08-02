import React, { useState } from 'react';
import Dropdown from './Dropdown';

const Result = ({ response }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const filteredResponse = {};
  if (selectedOptions.includes('Alphabets')) {
    filteredResponse.alphabets = response.alphabets;
  }
  if (selectedOptions.includes('Numbers')) {
    filteredResponse.numbers = response.numbers;
  }
  if (selectedOptions.includes('Highest Alphabet')) {
    filteredResponse.highest_alphabet = response.highest_alphabet;
  }

  return (
    <div>
      <Dropdown selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
      <pre>{JSON.stringify(filteredResponse, null, 2)}</pre>
    </div>
  );
};

export default Result;
