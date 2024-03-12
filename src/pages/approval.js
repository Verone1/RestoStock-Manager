import React, { useState, useEffect } from 'react';
import '../index.css';

const Approval = () => {
  const [pendingOrders, setPendingOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    document.title = 'Approve Orders | RestoStock Manager';
  })

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
    <div class="modify-page-container">
      <div class="approval-requests-container">
        <div>Pending Order Requests</div>


        {pendingOrders.map((order) => (
          <a key={order.order_no} onClick={() => handleOrderClick(order)}>
            {order.site_name} <br />
            Order #{order.order_no}
          </a>
        ))}
      </div>
      <div class="modify-input-container">
        <div classname="title-container">
          <h1 className="page-title">Pending Order Requests</h1>
          <p className="page-description">
            Please approve/reject the requests recieved from the restaurants below
          </p>
        </div>
        <div>
          {selectedOrder && (
            <>
              <strong>Order Details:</strong>
              <br></br>
              <br></br><strong>Site Name:</strong> {selectedOrder.site_name}
              <br></br><strong>Request Date:</strong> {selectedOrder.request_date}
              <br></br><strong>Current Item Quantity:</strong> {selectedOrder.current_item_quantity}
              <br></br><strong>Requested Item Quantity:</strong> {selectedOrder.requested_item_quantity}
              <br></br><strong>Reason for Request:</strong> {selectedOrder.reason_for_request}
              <br></br><strong>Item Name:</strong> {selectedOrder.item_name}
              <br></br><strong>Item Cost:</strong> {selectedOrder.item_cost}
              <br></br><strong>Item Description:</strong> {selectedOrder.item_description}
              <div className='modify-button-container'>
                <button id="save-button" onClick={clickA}> Approve </button>
                <button id="delete-button" onClick={clickR}>Reject</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Approval;
