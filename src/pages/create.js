import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = () => {
  return (
    <header className="header">
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

function Option() {
  return (
    <div id="leftPane" className="options">
      <a href="#">View Inventory</a>
      <a href="#">Order Items </a>
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
              <input type="text" id="fields" placeholder="Enter Name" /><br />
            </div>
            <div>
              <a>*</a>
              <label>Budget:</label>
              <input data-type="currency" id="fields" placeholder="Enter Name" /><br />
            </div>
            <div>
              <a>*</a>
              <label>Restaurants:</label>
              <div id="restaurants">
                <input id="fields" type="checkbox" />checkbox 1<br />
                <input id="fields" type="checkbox" />checkbox 2<br />
                <input id="fields" type="checkbox" />checkbox 3<br />
                <input id="fields" type="checkbox" />checkbox 4<br />
                <input id="fields" type="checkbox" />checkbox 5<br />
                <input id="fields" type="checkbox" />checkbox 6<br />
                <input id="fields" type="checkbox" />checkbox 7<br />
                <input id="fields" type="checkbox" />checkbox 8<br />
              </div>
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
