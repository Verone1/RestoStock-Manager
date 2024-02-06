import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from '../assets/logo.png';

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

function Option() {
  return (
    <div id="leftPane" className="options">
      <a href="#">View Inventory</a>
      <a id="selected" href="#">Create Restaurant </a>
      <a href="#">Report faulty/ missing item</a>
      <a href="#">Mailbox</a>
    </div>
  );
}

const Create = () => {
  return (
    <div className="creation">
          <div className="description">
            <div>
              <a>*</a>
              <label>Name:</label>
              <input type="text" id="fields" placeholder="Enter Name" /><br />
            </div>
            <div>
              <a>*</a>
              <label>Phone Number:</label>
              <input type="text" id="fields" placeholder="Enter Number" /><br />
            </div>
            <div>
              <a>*</a>
              <label>Address:</label>
              <input data-type="currency" id="fields" placeholder="Enter Address" /><br />
            </div>
            <div>
              <a>*</a>
              <label>Area Manager:</label>
              <select id="fields">
                <option>AM example</option>
              </select>
            </div>
            <div>
              <input id="save" type="submit" value="Save" />
            </div>
          </div>
        </div>
  );
};

export default Create;

function App() {
  return (
    
      <div>
        <Header />
        <Option />
        <Create />
      </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root')); 
