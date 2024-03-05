import React from 'react';
import '../index.css';


const CreateAM = () => {
  return (
    <div className="creation">
          <div>
            <a>*</a>
            <label>Name:</label>
            <input type="text" id="fields" placeholder="Enter Name" /><br />
          </div>
          <div>
            <a>*</a>
            <label>Phone Number:</label>
            <input type="text" id="fields" placeholder="Enter Number" /><br />
          </div>
          <div>
            <a>*</a>
            <label>Budget:</label>
            <input data-type="currency" id="fields" placeholder="Enter Budget" /><br />
          </div>
          <div>
            <a>*</a>
            <label>Restaurants:</label>
            <div id="restaurants">
              <div id="fields">
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
            <input id="save" type="submit" value="Save" />
          </div>
        </div>
  );
};

export default CreateAM;

