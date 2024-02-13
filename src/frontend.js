import React from 'react';
import './index.css'; //imports this file from the directory which is providing the CSS
import logo from './assets/logo.png';
import { NavLink } from "react-router-dom";

import Catalogue from './pages/catalogue';
import Create from './pages/create';
import CreateAM from './pages/createAM';
import Message from './pages/message';
import Modify from './pages/modify';
import Report from './pages/report';
import Approval from './pages/approval';


// The HTML of the Header section is saved under the below function which can be recalled so it can be rendered
const Header = () => {
  return (
    <header className="header">
      <img src={logo}></img>
      <div className= "icon">
        <button className="icon-button">VT</button>
        <div className="icon-list">
          <div href="#">logout</div>
        </div>
      </div>
    </header>
  );
}

// The HTML of the side options bar section is saved under the below function which can be recalled so it can be rendered
const Option = () => {
  // Assuming `access` is a variable accessible in this scope
  const access = 'am'; // Replace this with your actual logic

  return (
    <div id="leftPane" className="options">
      {access === 'restaurant' && (
        <>
          <NavLink to="/" className={Catalogue}>
            View Inventory
          </NavLink>
          <NavLink to="/" className={Catalogue}>
            Order items
          </NavLink>
          <NavLink to="/" className={Catalogue}>
            Report faulty/ missing item
          </NavLink>
          <NavLink to="/message" className={Message}>
            Mailbox
          </NavLink>
        </>
      )}
      {access === 'am' && (
        <>
          <NavLink to="/approval" className={Approval}>
            POS request Orders
          </NavLink>
          <NavLink to="/report" className={Report}>
            Report page
          </NavLink>
          <NavLink to="/report" className={Report}>
            Budget tracker
          </NavLink>
          <NavLink to="/message" className={Message}>
            Mailbox
          </NavLink>
        </>
      )}
      {access === 'headoffice' && (
        <>
          <NavLink to="/report" className={Report}>
            Report page
          </NavLink>
          <NavLink to="/create" className={Create}>
            Create Restaurant
          </NavLink>
          <NavLink to="/createam" className={CreateAM}>
            Create Area Manager
          </NavLink>
          <NavLink to="/modify" className={Modify}>
            Modify User
          </NavLink>
          <NavLink to="/message" className={Message}>
            Mailbox
          </NavLink>
        </>
      )}
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
