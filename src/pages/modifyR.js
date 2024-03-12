import React, { useState, useEffect } from 'react';
import '../index.css';

const ModifyR = () => {

  useEffect(() => {
    document.title = 'Modify Restaurant | RestoStock Manager';
  })

  const [contact, setContact] = useState('');
  const [names, setNames] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [restos, setRestos] = useState([]);

  useEffect(() => {
    const fetchNames = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/ams');

        const data = await response.json();
        setNames(data);
      } catch (error) {

      }
    };

    const fetchRestos = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/restaurants');
        const data = await response.json();
        setRestos(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRestos();
    fetchNames();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault(); // prevents from reloading the page
    const form = event.target.form;
     
    
    const formData = {
      name: form.elements.name.value,
      phoneNumber: form.elements.phoneNumber.value,
      budget: form.elements.address.value,
      restaurants: form.elements.ams.value,
    };

    
    // this reloads the form
    form.target.reset();
    
    try {
      const response = await fetch('http://localhost:3001/api/restaurant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // final check that it was submitted
      if (!response.ok) {
        form.target.reset();
        alert('please make sure that you have entered details correctly');
      } 
      
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    
  };



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
    <div className="modify-page-container">

      <div className="user">
        <div>
          <form onChange={perform}>
            <input
              type="text"
              value={contact}
              id="modify-page-search"
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

      <div className="modify-input-container">
        <div classname="title-container">
          <h1 className="page-title">Modify User</h1>
          <p className="page-description">
            Please select the user you would like to modify from the left hand pane and then follow the options below.
          </p>
        </div>
        <form>
          <div>
            <a>*</a>
            <label>Name:</label>
            <input
              type="text"
              id="page-fields"
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
              id="page-fields"
              placeholder="Enter Phone Number"
              value={selectedContact ? selectedContact.phone_number : ''}
              onChange={(e) => setSelectedContact({ ...selectedContact, phoneNumber: e.target.value })}
            />
            <br />
          </div>
          <div>
            <a>*</a>
            <label>Budget:</label>
            <input
              type="text"
              id="modify-page-fields"
              placeholder="Enter Address"
              value={selectedContact ? selectedContact.budget : ''}
              onChange={(e) => setSelectedContact({ ...selectedContact, address: e.target.value })}
            />
            <br />
          </div>
          <div>
          <a>*</a>
          <label>Restaurants:</label>
          <div id="restaurants">
            <div id="page-fields">
              {restos.map((restaurant) => (
                <div key={restaurant.name}>
                  <input
                    type="checkbox"
                    name="restaurant"
                    value={restaurant.name}
                  />
                  <label>{restaurant.name}</label>
                </div>
              ))}
            </div>
          </div>

          </div>
          <div className='modify-button-container'>
          <button id="save-button" onClick={(e) => handleSubmit(e)}>Save</button>
          <button id="delete-button">Delete Account</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModifyR;
