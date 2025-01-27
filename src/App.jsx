import React, { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";

import Frontend from "./frontend"
import Catalogue from "./pages/catalogue";
import Create from "./pages/create";
import Message from "./pages/Messages"
import CreateAM from "./pages/createam";
import Modify from "./pages/modify";
import ModifyR from "./pages/modifyR";
import Report from "./pages/adminReport";
import Reports from "./pages/reportDamage";
import Approval from "./pages/approval";
import Login from "./pages/login";
import Expenditure from "./pages/ExpenditurePage"
import CreateUser from "./pages/createuser";


function App() {
  
  const [loggedIn, setLoggedInState] = useState(false);
  const [accessLevel, setAccessLevel] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const logOut = () => {

    setLoggedInState(false);
    navigate("/login");
  }

  const loginCreds = (username, success) => {
    if(success) {
      setLoggedInState(true);
      setUser(username);
      setAccessLevel('headoffice');
      navigate('/report');
    }
  };


  if (!loggedIn) {
    return <Login onLogin={loginCreds} />;
  }
  else {
    return (
      <div className="app">
        <Frontend onLogout={logOut} accessLevel={accessLevel} user={user} />
        <Routes>
          <Route path="/" element={<Catalogue user={user} />} />
          <Route path="/create" element={<Create />} />
          <Route path="/createam" element={<CreateAM />} />
          <Route path="/message" element={<Message user={user} />} />
          <Route path="/modify" element={<Modify />} />
          <Route path="/report" element={<Report user={user} accessLevel={accessLevel}/>} />
          <Route path="/reports" element={<Reports user={user} />} />
          <Route path="/approval" element={<Approval user={user} />} />
          <Route path="/expenditure" element={<Expenditure />} />
          <Route path="/modifyR" element={<ModifyR />} />
          <Route path="/createuser" element={<CreateUser />} />
          <Route
            path="*"
            element={<h1 className="not-found">Page Not Found</h1>}
          />
        </Routes>
      </div>
    );
  }


}

export default App;
