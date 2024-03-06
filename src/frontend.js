import React from 'react';
import './index.css';
import logo from './assets/logo.png';
import { NavLink } from "react-router-dom";
import { HiDocumentReport } from "react-icons/hi";
import { IoIosCreate } from "react-icons/io";
import { MdOutlineCreate } from "react-icons/md";
import { CiMail } from "react-icons/ci";


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

const Option = ({ access, user }) => {
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
          <NavLink to="/report" className={AdminReport}>
            <HiDocumentReport className='iconStyle' />
            Reports
          </NavLink>
          <NavLink to="/create" className={Create}>
            <IoIosCreate className='iconStyle' />
            Create Restaurant
          </NavLink>
          <NavLink to="/createam" className={CreateAM}>
            <IoIosCreate className='iconStyle' />
            Create Area Manager
          </NavLink>
          <NavLink to="/modify" className={Modify}>
            <MdOutlineCreate className='iconStyle' />
            Modify User
          </NavLink>
          <NavLink to="/message" className={Message}>
            <CiMail className='iconStyle' />
            Mailbox
          </NavLink>
          <div className="welcome-text">© 2024 | Restostock Manager. 
          You are logged in as {user}
          </div>
        </>
      )}
    </div>
  );
}

export default function App({ accessLevel, onLogout, user }) {
  return (
    <div>
      <Header onLogout={onLogout} user={user} />
      <Option access={accessLevel} />
    </div>
  );
}

