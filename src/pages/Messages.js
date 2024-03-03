import React, { useState } from 'react';

import './index.css'; //imports this file from the directory which is providing the CSS

function Messages() {
  const [option, optionStatus] = useState(null);

  const optionClick = (button) => {
    optionStatus(button);
  };

  const contacts = ['Restaurant London Holborn', 'Verone'];

  return (
    <div className="container">
      <div className="contact">
          <div>Messages</div>
          {contacts.map((button, index) => (
            <button key={index} onClick={() => optionClick(button)}>
              {button}
            </button>
          ))}
      </div>

      <div className="messages">
          {optionStatus && (
          <div>
            //db code to be added 
          </div>
        )}
      </div>

      <div className="textcontainer">
          <input type="text" id="textBox" placeholder="Enter message here..." />
          <input id="send" type="submit" value="Send" />
          <br />
      </div>
    </div>

  );
};    



export default Messages;

