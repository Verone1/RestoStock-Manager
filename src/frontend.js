import React from 'react';
import './index.css';
import logo from './assets/logo.png';
import { NavLink } from "react-router-dom";

import Catalogue from './pages/catalogue';
import Create from './pages/create';
import CreateAM from './pages/createam';
import Message from './pages/Messages';
import Modify from './pages/modify';
import AdminReport from './pages/adminReport';
import DamageReport from './pages/reportDamage';
import Approval from './pages/approval';

const Header = ({ onLogout, user }) => {
  return (
    <header className="header">
      <img src={logo} alt="Logo"></img>
      <div className="icon">
        <button className="icon-button">{user}</button>
        <div className="icon-list">
          <button onClick={onLogout}>Logout</button>
        </div>
      </div>
    </header>
  );
}

const Option = ({ access }) => {
  return (
    <div id="leftPane" className="options">
      {access === 'restaurant' && (
        <>
          <NavLink to="/" className={Catalogue}>
            View Inventory
          </NavLink>
          <NavLink to="/" className={Catalogue}>
            Order Items
          </NavLink>
          <NavLink to="/report" className={DamageReport}>
            Report faulty/missing item
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
          <NavLink to="/reports" className={DamageReport}>
            Report page
          </NavLink>
          <NavLink to="/report" className={AdminReport}>
            Budget tracker
          </NavLink>
          <NavLink to="/message" className={Message}>
            Mailbox
          </NavLink>
        </>
      )}
      {access === 'headoffice' && (
        <>
          <NavLink to="/adminReport" className={AdminReport}>
            Reports
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

export default function App({ accessLevel, onLogout, user }) {
  return (
    <div>
      <Header onLogout={onLogout} user={user}/>
      <Option access={accessLevel} />
    </div>
  );
}

