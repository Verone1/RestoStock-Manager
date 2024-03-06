import React from 'react';
import '../index.css';


const Approval = () => {
  return (
    <div class="approval-page-container">
      <div class="approval-requests-container">
        <div>Pending Order Requests</div>
        <a>Restaurant London Holborn<br></br>Order ##000017##</a>
      </div>
      <div className="modify-input-container">
        <div className="title-container">
          <h1 className="page-title">Create Restaurant</h1>
          <p className="page-description">
            Please fill out the following fields to create your restaurant.
          </p>
        </div>
        <div>
          <div class="approval-order_text">
            <a>Order No:</a>
            <br></br>
            <a>Site Name:</a>
            <br></br>
            <a>Request Date:</a>
            <br></br>
            <br></br>
            <a>Current site item quantity:</a>
            <br></br>
            <a>Item quantity:</a>
            <br></br>
            <a>Reason for request:</a>
            <br></br>
            <br></br>
            <a>Item name:</a>
            <br></br>
            <a>Item cost:</a>
            <br></br>
            <a>Item description:</a>
            <br></br>
            <button class="approval-approve-button"> Approve </button> <button class="approval-reject-button">Reject</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approval;

