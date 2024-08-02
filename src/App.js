import React, { useState } from 'react';
import InputForm from './InputForm';
import Result from './Result';

function App() {
  const [response, setResponse] = useState(null);

  return (
    <div className="App">
      <header>
        <title>ABCD123</title>
      </header>
      <InputForm setResponse={setResponse} />
      {response && <Result response={response} />}
    </div>
  );
}

export default App;
