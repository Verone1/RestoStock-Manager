import React, { useState, useEffect } from 'react';
import '../index.css';

const Messages = ({ user }) => {
  const [option, setOption] = useState(null);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);
  const [names, setNames] = useState([]);

  const optionClick = (button) => {
    setOption(button);
  };

  const handleSendClick = () => {
    if (inputText.trim() !== '') {
      const newMessage = `${inputText}\n-  ${user}`;
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };



  useEffect(() => {
    const fetchNames = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/names');
        
        const data = await response.json();
        setNames(data);
      } catch (error) {
      }
    };

    fetchNames();
  }, []);

  

  

  return (
    <div className="container">
      <div className="contact">
        <div>Messages</div>
        {names.map((button, index) => (
          <button key={index} onClick={() => optionClick(button.name)}>
            {button.name}
          </button>
        ))}
      </div>

      <div className="messages">
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>

      <div className="textcontainer">
        <input
          type="text"
          id="textBox"
          placeholder="Enter message here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button id="send" onClick={handleSendClick}>
          Send
        </button>
        <br />
      </div>
    </div>
  );
}

export default function App({ user}) {
  return (
    <div>
      <Messages user={user} />
    </div>
  );
}

