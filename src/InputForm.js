import React, { useState } from 'react';

const InputForm = ({ setResponse }) => {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const parsedInput = JSON.parse(jsonInput);
      if (!Array.isArray(parsedInput.data)) {
        throw new Error('Invalid JSON format: data should be an array');
      }
      const response = await fetch('http://127.0.0.1:5000/bfhl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsedInput),
      });
      const data = await response.json();
      setResponse(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder='Enter JSON here...'
        />
        <button type="submit">Submit</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default InputForm;
