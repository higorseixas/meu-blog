import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://chat.openai.com/auth/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat Gpt
        </a>
      </header>
    </div>
  );
}

export default App;
