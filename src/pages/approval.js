import React, { useState, useEffect } from 'react';
import '../index.css';

const Approval = () => {
  const [pendingOrders, setPendingOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  

  useEffect(() => {
    fetchPendingOrders();
  }, []);

  // this retrieves from the db the orders which have a status of pending so AM can approve/reject
  const fetchPendingOrders = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/approval');
      const data = await response.json();
      setPendingOrders(data);
    } catch (error) {
      console.error('Error fetching pending orders:', error);
    }
  };

  // this handles when the approve button is pressed
  // a POST function is sent to db.js acting as the API
  // ammending status to pending
  const handleA = async () => {
    if (selectedOrder) {
      try {
        await fetch(`http://localhost:3001/api/status`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ order_no: selectedOrder.order_no, status: 'Approved' }),
        });
        console.log('successful');
      } catch (error) {
        console.error('Error approving order:', error);
      }
    }
  };

  // same as handle A function but this changes status to reject instead
  const handleR = async () => {
    if (selectedOrder) {
      try {
        await fetch(`http://localhost:3001/api/status`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ order_no: selectedOrder.order_no, status: 'Rejected' }),
        });
        console.log('Rejection successful');
      } catch (error) {
        console.error('Error approving order:', error);
      }
    }
  };

  // both Click A and R ensures that the buttons POST to DB
  // then it makes sure the details displayed are no longer of the selected order
  // finally will refresh the page with the remaining orders without actually refreshing the page
  const clickA = () => {
    handleA();

    setSelectedOrder(null);
    fetchPendingOrders();
  };
  const clickR = () => {
    handleR();
    setSelectedOrder(null);
    fetchPendingOrders();
    
  };

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  return ( 
    <div class="approval-page-container">
      <div class="approval-requests-container">
        <div>Pending Order Requests</div>
        
        
        {pendingOrders.map((order) => (
          <a key={order.order_no} onClick={() => handleOrderClick(order)}>
            {order.site_name} <br />
            Order #{order.order_no}
          </a>
        ))}
      </div>
      <div class="approval-order_text">
        {selectedOrder && (
          <>
            <a><strong>Order Details:</strong></a>
            <a>Site Name: {selectedOrder.site_name}</a>
            <a>Request Date: {selectedOrder.request_date}</a>
            <a>Current Item Quantity: {selectedOrder.current_item_quantity}</a>
            <a>Requested Item Quantity: {selectedOrder.requested_item_quantity}</a>
            <a>Reason for Request: {selectedOrder.reason_for_request}</a>
            <a>Item Name: {selectedOrder.item_name}</a>
            <a>Item Cost: {selectedOrder.item_cost}</a>
            <a>Item Description: {selectedOrder.item_description}</a>
            <button class="approval-approve-button" onClick={clickA}> Approve </button> 
            <button class="approval-approve-button" onClick={clickR}>Reject</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Approval;
