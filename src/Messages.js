import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; //imports this file from the directory which is providing the CSS
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';


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
      <Link to="/pages/view-inventory">View Inventory</Link>
      <Link to="/pages/order">Order Items</Link>
      <Link to="/pages/report">Report faulty/missing item</Link>
      <Link to="/pages/mailbox" className="selected_tab" >Mailbox</Link>
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
    <>
    <div className="requests">
        <div>Messages</div>
        {contacts.map((button, index) => (
          <button key={index} onClick={() => optionClick(button)}>
            {button}
          </button>
        ))}
    </div>

    <div className="description">
        {optionStatus && (
        <div>
          //db code to be added 
        </div>
      )}
    </div>

    <div className="textcontainer">
        <input type="text" id="textBox" placeholder="Enter message here..." />
        <input id="approve" type="submit" value="Send" />
        <br />
    </div>
    </>

  );
};    



export default Messages;



// All functions saved under the APP function
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Option />
        <Route path="/pages/view-inventory" component={ViewInventory} />
        <Route path="/pages/catalogue" component={catalogue} />
        <Route path="/pages/report" component={Report} />
        <Route path="/pages/mailbox" component={Mailbox} />
      </div>
    </Router>
  );
}

// Below code renders all functions stored under App()
ReactDOM.render(<App />, document.getElementById('root')); 
