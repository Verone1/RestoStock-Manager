import React, { useState, useEffect } from 'react';
import '../index.css';


const Create = () => {

  useEffect(() => {
    document.title = 'Create Restaurant | RestoStock Manager';
  })

  const [ams, setAms] = useState([]);

  // retreives all Area Managers from DB
  useEffect(() => {
    const fetchAms = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/restaurants');
        const data = await response.json();
        setAms(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAms();
  }, []);

  // creates user by sending POST request when save button is pressed
  const handleSubmit = async (form) => {
    form.preventDefault(); // prevents from reloading the page

    const formData = {
      name: form.target.elements.name.value,
      phoneNumber: form.target.elements.phoneNumber.value,
      address: form.target.elements.address.value,
      ams: form.target.elements.ams.value,
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


  return (
    <div className="page-container">
      <div classname="title-container">
        <h1 className="page-title">Create Restaurant</h1>
        <p className="page-description">
          Please fill out the following fields to create your restaurant.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <a>*</a>
          <label>Name:</label>
          <input type="text" name="name" id="page-fields" placeholder="Enter Name" /><br />
        </div>
        <div>
          <a>*</a>
          <label>Phone Number:</label>
          <input type="text" name="phoneNumber" id="page-fields" placeholder="Enter Number" /><br />
        </div>
        <div>
          <a>*</a>
          <label>Address:</label>
          <input id="page-fields" name="address" placeholder="Enter Address" /><br />
        </div>
        <div>
          <a>*</a>
          <label>Area Manager:</label>
          <select id="page-fields" name="ams">
            {ams.map((areaManager) => (
              <option key={areaManager.username} value={areaManager.username}>
                {areaManager.username}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input id="save-button" type="submit" value="Save" />
        </div>
      </form>
    </div>
  );
};


export default Create;
