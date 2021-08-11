import React, { useState } from 'react';
import { message } from 'statuses';
import './App.css';

function App() {
  const [messages, setMessages] = useState([
    'testing',
    'test is working',
    'glad it is working'
  ])
  return (
    <div className="App">
      <h1>Hello World</h1>
      <input />
      <button>Send Message</button>

      {
        messages&&
        messages.map((message)=>(
          <p>{message}</p>
        ))
      }
    </div>
  );
}

export default App;
