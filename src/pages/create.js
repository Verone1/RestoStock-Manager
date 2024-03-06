import React from 'react';
import '../index.css';


const Create = () => {
  return (
    <div className="createres-page-container">
      <h1 className="report-page-title">Create Restaurant</h1>
      <p className="report-page-description">
        Please fill out the following fields to create your restaurant.
      </p>
      <div>
        <a>*</a>
        <label>Name:</label>
        <input type="text" id="createres-page-fields" placeholder="Enter Name" /><br />
      </div>
      <div>
        <a>*</a>
        <label>Phone Number:</label>
        <input type="text" id="createres-page-fields" placeholder="Enter Number" /><br />
      </div>
      <div>
        <a>*</a>
        <label>Address:</label>
        <input id="createres-page-fields" placeholder="Enter Address" /><br />
      </div>
      <div>
        <a>*</a>
        <label>Area Manager:</label>
        <select id="createres-page-fields">
          <option>AM example</option>
        </select>
      </div>
      <div>
        <input id="save-button" type="submit" value="Save" />
      </div>
    </div>
  );
}

export default Create;
