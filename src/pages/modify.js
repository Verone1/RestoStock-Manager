import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";


const Modify = () => {

  // code inspired from a tutorial on marketsplash to build a search bar
  const [contact, setContact] = useState('');

  function perform(event) {
    event.preventDefault();
    console.log(contact);
  }

  const data = ['Holborn', 'London'];

  const caseSensitiveSearch = data.filter(item => 
    item.toLowerCase().includes(contact.toLowerCase()));

  

  

  return (
    <>  

        
        <div className="requests">
          <div>
          <form onChange={perform}>
            <input type="text" value={contact} id="search" placeholder="Search.." onChange={(e) => setContact(e.target.value)}/>
          </form>  
            
          </div>
          <ul>
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
          <button className="reject"> Delete Account </button>
          <input id="approve" type="submit" value="Save" />
          <br />
        </div>

    </>
  );
};

export default Modify;
