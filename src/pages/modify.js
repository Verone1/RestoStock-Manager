import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";


// Abel's code to render for the Catalog page
const Modify = () => {
  return (
    <>  
        <div className="requests">
          <div>
            <input type="text" id="search" placeholder="Search.." />
          </div>
          <a>Restaurant London Holborn<br />19/11/2024 4:38pm</a>
          <a>Restaurant London Holborn<br />19/11/2024 4:38pm</a>
          <a>Restaurant London Holborn<br />19/11/2024 4:38pm</a>
          <a>Restaurant London Holborn<br />19/11/2024 4:38pm</a>
          <a>Restaurant London Holborn<br />19/11/2024 4:38pm</a>
          <a>Restaurant London Holborn<br />19/11/2024 4:38pm</a>
          <a>Restaurant London Holborn<br />19/11/2024 4:38pm</a>
          <a>Restaurant London Holborn<br />19/11/2024 4:38pm</a>
          <a>Restaurant London Holborn<br />19/11/2024 4:38pm</a>
          <a>Restaurant London Holborn<br />19/11/2024 4:38pm</a>
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
