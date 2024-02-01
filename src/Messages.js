import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'; //imports this file from the directory which is providing the CSS



// The HTML of the Header section is saved under the below function which can be recalled so it can be rendered
function Header() {
  return (
    <header className="header">
      <a> Home </a>
      <p>Hospitality Stock System </p>
      <div className= "icon">
        <button className="icon-button">VT</button>
        <div className="icon-list">
          <div href="#">Sign out</div>
        </div>
      </div>
    </header>
  );
}

// The HTML of the side options bar section is saved under the below function which can be recalled so it can be rendered
function Option() {
  return (
    <div id="leftPane" className="options">
      <a href="#">View Inventory</a>
      <a href="order">Order Items </a>
      <a href="#">Report faulty/ missing item</a>
      <a href="#">Mailbox</a>
    </div>
  );
}

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



// All functions saved under the APP function
function App() {
  return (
    
      <div>
        <Header />
        <Option />
        <Messages />
      </div>
  );
}

// Below code renders all functions stored under App()
ReactDOM.render(<App />, document.getElementById('root')); 





// Below code renders all functions stored under App()
ReactDOM.render(<App />, document.getElementById('root')); 
