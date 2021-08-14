import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import './App.css';
import { db } from './utils/firebase';


function App() {

  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(()=>{
    db.collection('messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot((snapshot) =>
      setMessages(snapshot.docs.map((doc)=>doc.data()))
    );

  },[])


  const sendMessageHandler = (e) => {
      e.preventDefault();

      db.collection('messages').add({
        content: input,
        timestamp: firebase.firestore.Timestamp.now()
      })

      setInput('');
  } 
  console.log(messages)

  return (
    <div className="App">
      <h1>Hello World</h1>

      <form>
        <input vlaue={input} onChange={(e)=> setInput(e.target.value)}/>
        <button type='submit' onClick={sendMessageHandler}>Send Message</button>
      </form>

      {
        messages&&
        messages.map((message)=>(
          <p>User: {message.content}</p>
        ))
      }
    </div>
  );
}

export default App;
