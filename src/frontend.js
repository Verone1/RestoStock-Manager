import React from 'react';
import './index.css'; //imports this file from the directory which is providing the CSS
import { Link } from "react-router-dom";


// The HTML of the Header section is saved under the below function which can be recalled so it can be rendered
function Header() {
  return (
    <header className="header">
      <a></a>
      <p>RestoStock Manager</p>
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
const Option = () => {
  return (
    <div id="leftPane" className="options">
      <a href="#">View Inventory</a>
      <a href="#">Order items</a>
      <a href="#">Report faulty/ missing item</a>
      <a href="#">Mailbox</a>
    </div>
  );
}

// All functions saved under the APP function
export default function App()  {
  return (
    <div>
      <Header/>
      <Option />
    </div>
  );
}
