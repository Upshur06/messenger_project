import React, { useState } from 'react';
import { message } from 'statuses';
import './App.css';

function App() {

  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    'testing',
    'test is working',
    'glad it is working'
  ])

  const sendMessageHandler = (e) => {
      e.preventDefault();
      setMessages([...messages, input]); 
      setInput('');
  } 

  return (
    <div className="App">
      <h1>Hello World</h1>
      <input vlaue={input} onChange={(e)=> setInput(e.target.value)}/>
      <button onClick={sendMessageHandler}>Send Message</button>

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
