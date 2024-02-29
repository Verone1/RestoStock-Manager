import React, { useState, useEffect } from 'react';
import '../index.css';

const Modify = () => {
  const [contact, setContact] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [names, setNames] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    const fetchNames = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/table2');
        
        const data = await response.json();
        setNames(data);
      } catch (error) {
        
      }
    };

    const fetchRestaurants = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/restaurants');
        
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
      }
    };

    fetchNames();
    fetchRestaurants();
  }, []);

  function perform(event) {
    event.preventDefault();
    console.log(contact);
  }

  const caseSensitiveSearch = names.filter((item) =>
    String(item.name).toLowerCase().includes(contact.toLowerCase())
  );



  const handleContactClick = (selectedItem) => {
    setSelectedContact(selectedItem);
  };

  return (
    <div className="container">
      <div className="user">
        <div>
          <form onChange={perform}>
            <input
              type="text"
              value={contact}
              id="search"
              placeholder="Search.."
              onChange={(e) => setContact(e.target.value)}
            />
          </form>
        </div>
        <ul id="names">
          {caseSensitiveSearch.map((item, index) => (
            <li key={index} onClick={() => handleContactClick(item)}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="description">
        <div>
          <a>*</a>
          <label>Name:</label>
          <input
            type="text"
            id="fields"
            placeholder="Enter Name"
            value={selectedContact ? selectedContact.name : ''}
            onChange={(e) => setSelectedContact({ ...selectedContact, name: e.target.value })}
          />
          <br />
        </div>
        <div>
          <a>*</a>
          <label>Phone Number:</label>
          <input
            type="text"
            id="fields"
            placeholder="Enter Phone Number"
            value={selectedContact ? selectedContact.phoneNumber : ''}
            onChange={(e) => setSelectedContact({ ...selectedContact, phoneNumber: e.target.value })}
          />
          <br />
        </div>
        <div>
          <a>*</a>
          <label>Budget:</label>
          <input
            type="text"
            id="fields"
            placeholder="Enter Budget"
            value={selectedContact ? selectedContact.budget : ''}
            onChange={(e) => setSelectedContact({ ...selectedContact, budget: e.target.value })}
          />
          <br />
        </div>
        <div>
          <a>*</a>
          <label>Restaurants:</label>
          <div id="restaurants">
            {restaurants.map((restaurant) => (
              <div key={restaurant.id}>
                <input type="checkbox" id={`restaurant-${restaurant.id}`} />
                <label htmlFor={`restaurant-${restaurant.id}`}>{restaurant.username}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="textcontainer">
        <button className="delete">Delete Account</button>
        <input id="save" type="submit" value="Save" />
        <br />
      </div>
    </div>
  );
};

export default Modify;
