import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Approval = () => {
  return (
    <div class="container">
      
      <div class="requests">
        <div>Pending Order Requests</div>
        <a>Restaurant London Holborn<br></br>Order ##000017##</a>
      </div>
      <div class="description">
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
        <button class="approve"> Approve </button> <button class="reject">Reject</button>
      </div>
  </div>
  );
};

export default Approval;

function App() {
  return (

      <div>
        <Approval />
      </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root')); 
