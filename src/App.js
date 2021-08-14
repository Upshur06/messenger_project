import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import './App.css';
import { db } from './utils/firebase';


function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState('');

  useEffect(()=>{
    setUserName(prompt('Enter your name'));
  },[])

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
        user: userName,
        content: input,
        timestamp: firebase.firestore.Timestamp.now()
      })

      setInput('');
  } 
  console.log(messages)

  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>Welcome to the chatroom: {userName}</h2>

      <form className='app_form'>
        <input vlaue={input} onChange={(e)=> setInput(e.target.value)}/>
        <button type='submit' onClick={sendMessageHandler}>Send Message</button>
      </form>
        
        <div className='messageCollection'>

        {
          messages.map((message)=>(
            <p>
              {message.user ? message.user : 'unknow user'}: {message.content}
            </p>
          ))
        }

        </div>

    </div>
  );
}

export default App;
