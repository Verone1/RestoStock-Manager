import React from 'react';
import '../index.css';


const Approval = () => {
  return (
    <div class="approval-page-container">
      
      <div class="approval-requests-container">
        <div>Pending Order Requests</div>
        <a>Restaurant London Holborn<br></br>Order ##000017##</a>
      </div>
      <div class="approval-order_text">
        <a><strong>Order No:</strong></a>
        <br></br>
        <a><strong>Site Name:</strong></a>
        <br></br>
        <a><strong>Request Date:</strong></a>
        <br></br>
        <br></br>
        <a><strong>Current site item quantity:</strong></a>
        <br></br>
        <a><strong>Item quantity:</strong></a>
        <br></br>
        <a><strong>Reason for request:</strong></a>
        <br></br>
        <br></br>
        <a><strong>Item name:</strong></a>
        <br></br>
        <a><strong>Item cost:</strong></a>
        <br></br>
        <a><strong>Item description:</strong></a>
        <br></br>
        <button class="approval-approve-button"> Approve </button> <button class="approval-reject-button">Reject</button>
      </div>
  </div>
  );
};

export default Approval;

