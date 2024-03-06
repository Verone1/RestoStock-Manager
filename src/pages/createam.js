import React from 'react';
import '../index.css';


const CreateAM = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Create Area Manager</h1>
      <p className="page-description">
        Please fill out the following fields to create your new area manager.
      </p>
          <div>
            <a>*</a>
            <label>Name:</label>
            <input type="text" id="area-manager-page-fields" placeholder="Enter Name" /><br />
          </div>
          <div>
            <a>*</a>
            <label>Phone Number:</label>
            <input type="text" id="area-manager-page-fields" placeholder="Enter Number" /><br />
          </div>
          <div>
            <a>*</a>
            <label>Budget:</label>
            <input data-type="currency" id="area-manager-page-fields" placeholder="Enter Budget" /><br />
          </div>
          <div>
            <a>*</a>
            <label>Restaurants:</label>
            <div id="areamanager-page-restaurants-list">
              <div id="area-manager-page-fields">
              <input id="fields" type="checkbox"/>
              <label for="fields"> Restaurant 1</label>
              <input id="fields" type="checkbox"/>
              <label for="fields"> Restaurant 2</label>
              <input id="fields" type="checkbox"/>
              <label for="fields"> Restaurant 1</label>
              <input id="fields" type="checkbox"/>
              <label for="fields"> Restaurant 2</label>
              <input id="fields" type="checkbox"/>
              <label for="fields"> Restaurant 2</label>
              </div>
            </div>
          </div>
          <div>
            <input id="areamanager-page-save-button" type="submit" value="Save" />
          </div>
        </div>
  );
};

export default CreateAM;
