
import React, { useState } from 'react';
import './index.css';

const Modify = () => {

  // code inspired from a tutorial on marketsplash to build a search bar
  const [contact, setContact] = useState('');

  function perform(event) {
    event.preventDefault();
    console.log(contact);
  }

  const data = ['Holborn', 'London', 'Russia'];

  const caseSensitiveSearch = data.filter(item => 
    item.toLowerCase().includes(contact.toLowerCase()));


  return (
    <div className = "container">  
        <div className="user">
          <div>
          <form onChange={perform}>
            <input type="text" value={contact} id="search" placeholder="Search.." onChange={(e) => setContact(e.target.value)}/>
          </form>  
            
          </div>
          <ul id= "names">
            {caseSensitiveSearch.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

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
              <input id="fields" type="checkbox" />checkbox 1<br />
              <input id="fields" type="checkbox" />checkbox 1<br />
              <input id="fields" type="checkbox" />checkbox 1<br />
              <input id="fields" type="checkbox" />checkbox 1<br />
              <input id="fields" type="checkbox" />checkbox 1<br />
              <input id="fields" type="checkbox" />checkbox 1<br />
              <input id="fields" type="checkbox" />checkbox 1<br />
            </div>
          </div>
        </div>

        <div className="textcontainer">
          <button className="delete"> Delete Account </button>
          <input id="save" type="submit" value="Save" />
          <br />
        </div>

    </div>
  );
};

export default Modify;
function App() {
  return (
    
      <div>
        <Modify />
      </div>
  );
}
