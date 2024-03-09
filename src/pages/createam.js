import React, { useState, useEffect } from 'react';
import '../index.css';

const CreateAM = () => {
  const [restaurants, setRestaurants] = useState([]);

  // a GET request is done to collect the restaurants 
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/restaurants');
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error( error);
      }
    };

    fetchRestaurants();
  }, []);

  // the fields from the form are taken as an input and sent to db
  const handleSubmit = async (form) => {
    form.preventDefault(); // prevents from reloading the page

    const formData = {
      name: form.target.elements.name.value,
      phoneNumber: form.target.elements.phoneNumber.value,
      budget: form.target.elements.budget.value,
      restaurants: Array.from(form.target.elements.restaurant)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value),
    };

    
    // prevents invalid format to be submitted
    // more fields required upon testing
    if (formData.budget === '') {
      alert('Budget cannot be empty');
      return;
    }

    // this reloads the form
    form.target.reset();
    
    try {
      const response = await fetch('http://localhost:3001/api/am', {
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

  return (
    <div className="page-container">
      <div classname="title-container">
        <h1 className="page-title">Create Area Manager</h1>
        <p className="page-description">
          Please fill out the following fields to create your new area manager.
        </p>
      </div>
      <form onSubmit={handleSubmit} >
        <div>
          <span>*</span>
          <label>Name:</label>
          <input type="text" id="page-fields" name="name" placeholder="Enter Name" />
          <br />
        </div>
        <div>
          <span>*</span>
          <label>Phone Number:</label>
          <input type="text" id="page-fields" name="phoneNumber" placeholder="Enter Number" />
          <br />
        </div>
        <div>
          <span>*</span>
          <label>Budget:</label>
          <input type="text" id="page-fields" name="budget" placeholder="Enter Budget" />
          <br />
        </div>
        <div>
          <span>*</span>
          <label>Restaurants:</label>
          <div id="restaurants">
            <div id="page-fields">
              {restaurants.map((restaurant) => (
                <div key={restaurant.username}>
                  <input
                    type="checkbox"
                    name="restaurant"
                    value={restaurant.username}
                  />
                  <label>{restaurant.username}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <input id="save-button" type="submit" value="Save" />
        </div>
      </form>
    </div>
  );
};

export default CreateAM;
