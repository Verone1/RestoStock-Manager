import React from 'react';
import './index.css';
import logo from './assets/logo.png';

import { NavLink } from "react-router-dom";
import { HiDocumentReport } from "react-icons/hi";
import { IoIosCreate, IoIosMail } from "react-icons/io";
import { MdOutlineCreate, MdInventory, MdRequestPage, MdReportProblem } from "react-icons/md";
import { FaBoxOpen } from "react-icons/fa6";
import { FaMoneyBillAlt } from "react-icons/fa";

import Catalogue from './pages/catalogue';
import Create from './pages/create';
import CreateAM from './pages/createam';
import Message from './pages/Messages';
import Modify from './pages/modify';
import AdminReport from './pages/adminReport';
import DamageReport from './pages/reportDamage';
import Approval from './pages/approval';
import Expenditure from './pages/ExpenditurePage';


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
            <MdInventory className='iconStyle' />
            View Inventory
          </NavLink>
          <NavLink to="/" className={Catalogue}>
            <FaBoxOpen className='iconStyle' />
            Order Items
          </NavLink>
          <NavLink to="/report" className={DamageReport}>
            <MdReportProblem className='iconStyle' />
            Report faulty/missing item
          </NavLink>
          <NavLink to="/message" className={Message}>
            <IoIosMail className='iconStyle' />
            Mailbox
          </NavLink>
        </>
      )}
      {access === 'am' && (
        <>
          <NavLink to="/approval" className={Approval}>
            <MdRequestPage className='iconStyle' />
            POS request Orders
          </NavLink>
          <NavLink to="/reports" className={DamageReport}>
            <HiDocumentReport className='iconStyle' />
            Reports
          </NavLink>

          <NavLink to="/message" className={Message}>
            <IoIosMail className='iconStyle' />
            Mailbox
          </NavLink>
        </>
      )}
      {access === 'headoffice' && (
        <>
          <NavLink to="/report" className={({ isActive }) => isActive ? "options.a AdminReport active-selection" : "options.a AdminReport"}>
            <HiDocumentReport className='iconStyle' />
            Reports
          </NavLink>
          <NavLink to="/create" className={({ isActive }) => isActive ? "options.a Create active-selection" : "options.a Create"}>
            <IoIosCreate className='iconStyle' />
            Create Restaurant
          </NavLink>
          <NavLink to="/expenditure" className={({ isActive }) => isActive ? "options.a Expenditure active-selection" : "options.a Expenditure"}>
            <FaMoneyBillAlt className='iconStyle' />
            Budget Tracker
          </NavLink>
          <NavLink to="/createam" className={({ isActive }) => isActive ? "options.a CreateAM active-selection" : "options.a CreateAM"}>
            <IoIosCreate className='iconStyle' />
            Create Area Manager
          </NavLink>
          <NavLink to="/modify" className={({ isActive }) => isActive ? "options.a Modify active-selection" : "options.a Modify"}>
            <MdOutlineCreate className='iconStyle' />
            Modify User
          </NavLink>
          <NavLink to="/message" className={({ isActive }) => isActive ? "options.a Message active-selection" : "options.a Message"}>
            <IoIosMail className='iconStyle' />
            Mailbox
          </NavLink>
        </>
      )}
      <div className="welcome-text">© 2024 | RestoStock Manager.
        You are logged in as <strong>{user}</strong>
      </div>
    </div>
  );
}

export default function App({ accessLevel, onLogout, user }) {
  return (
    <div>
      <Header onLogout={onLogout} user={user} />
      <Option access={accessLevel} user={user} />
    </div>
  );
}

