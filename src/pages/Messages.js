import React, { useState, useEffect } from 'react';
import '../index.css';

const Messages = ({ user }) => {

  useEffect(() => {
    document.title = 'Mailbox | RestoStock Manager';
  })

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
    <div className="messages-page-container">
      <div className="messages-contact-container">
        <div>Messages</div>
        {names.map((button, index) => (
          <button key={index} onClick={() => optionClick(button.name)}>
            {button.name}
          </button>
        ))}
      </div>

      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
        <input
          type="text"
          id="messages-text-box"
          placeholder="Enter message here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button id="save-button" onClick={handleSendClick}>
          Send
        </button>
      </div>
    </div>
  );
}

export default function App({ user }) {
  return (
    <div>
      <Messages user={user} />
    </div>
  );
}

