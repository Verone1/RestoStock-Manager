import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './index.css';
import OrderPopup from './OrderPopup';


const ItemDetails = ({ items }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { itemName } = useParams();
  const navigate = useNavigate();
  const selectedItem = items.find((item) => item.name === itemName);

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  return (
    <div className='content'>
      <img src={selectedItem.image} alt={selectedItem.name} />
      <h1>{selectedItem.name}</h1>
      <p>Cost: {selectedItem.cost}</p>
      <p>Description: {selectedItem.description}</p>
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => setIsPopupOpen(true)}>Order</button>
      {isPopupOpen && <OrderPopup onClose={() => setIsPopupOpen(false)} />}
    </div>
  );
};

export default ItemDetails;
