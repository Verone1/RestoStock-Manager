import React from 'react';
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
  return (
    <>
    <div className="requests">
        <div>Messages</div>
        <a>Restaurant London Holborn<br></br>19/11/2024 4:38pm</a>
    </div>

    <div className="description">
        <div>Restaurant London HolbornRestaurant London Holborn</div>
        <div>Restaurant London HolbornRestaurant London Holborn</div>
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
    <div>
      <Header/>
      <Option />
      <Messages/>
    </div>
  );
}





// Below code renders all functions stored under App()
ReactDOM.render(<App />, document.getElementById('root')); 
