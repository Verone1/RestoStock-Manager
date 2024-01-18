import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";


// Abel's code to render for the Catalog page
const Create = () => {
  return (
    <div className="requests">
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
                <input id="fields" type="checkbox" />checkbox 2<br />
                <input id="fields" type="checkbox" />checkbox 3<br />
                <input id="fields" type="checkbox" />checkbox 4<br />
                <input id="fields" type="checkbox" />checkbox 5<br />
                <input id="fields" type="checkbox" />checkbox 6<br />
                <input id="fields" type="checkbox" />checkbox 7<br />
                <input id="fields" type="checkbox" />checkbox 8<br />
              </div>
            </div>
          </div>
        </div>
  );
};

export default Create;
