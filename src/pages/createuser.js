import React, { useState, useEffect } from 'react';
import '../index.css';


const CreateUser = () => {

    useEffect(() => {
      document.title = 'Create Area Manager | RestoStock Manager';
    })
  
    const [restaurants, setRestaurants] = useState([]);
  
    // a GET request is done to collect the restaurants 
    useEffect(() => {
      const fetchRestaurants = async () => {
        try {
          const response = await fetch('http://localhost:3001/api/restaurants');
          const data = await response.json();
          setRestaurants(data);
        } catch (error) {
          console.error(error);
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
        const response = await fetch('http://localhost:3001/api/createuser', {
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
        <h1 className="page-title">Create User</h1>
        <p className="page-description">
          Please fill out the following details to create user.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <a>*</a>
          <label>Name:</label>
          <input type="text" name="name" id="page-fields" placeholder="Enter Username" /><br />
        </div>
        <div>
          <a>*</a>
          <label>Temp Password</label>
          <input type="password" name="password" id="page-fields" placeholder="Enter Passowrd" /><br />
        </div>
        <div>
          <a>*</a>
          <label>Restaurants:</label>
          <div id="restaurants">
            <div id="page-fields">
              {restaurants.map((restaurant) => (
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
        <div>
          <input id="save-button" type="submit" value="Save" />
        </div>
      </form>
    </div>
  );
};


export default CreateUser;
