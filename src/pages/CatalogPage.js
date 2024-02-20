import React, { useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const OrderPopup = ({ onClose }) => {
  const itemNames = ["Burger", "Fries", "Drinks"];

  return (
    <div className="popup">
      <div className="popup-content">
        <h3>Place Your Order</h3>
        <label>Item Name:
          <select>
            {itemNames.map(name => <option key={name} value={name}>{name}</option>)}
          </select>
        </label>
        <label>Quantity:
        <input
          type="number"
            id="quantity"
            required
            min="0"
          />
        </label>
        <label>Reason for request:
          <input type="text" placeholder="Enter reason" />
        </label>
        <button onClick={onClose}>Cancel</button>
        <button onClick={onClose}>Confirm Order</button>
      </div>
    </div>
  );
};

const CatalogPage = ({ items, setItems }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOrder = (item) => {
    setIsPopupOpen(true);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div className="catalog-page">
      <div className="inventory-container">
        {items.map((item, index) => (
          <div key={index} className="inventory-item">
            <div className="image-container">
              <img src={item.image} alt={item.name} />
            </div>
            <h3>{item.name}</h3>
            <Link to={`/details/${item.name}`}>
              <button className="details-button">Details</button>
            </Link>
            <button className="order-button" onClick={() => handleOrder(item)}>Order</button>
            <button className="remove-button" onClick={() => handleRemoveItem(index)}>Remove</button>
          </div>
        ))}
      </div>
      <button className="add-item-button" onClick={() => handleAddItem({ name: "New Item", image: "url_to_image" })}>Add Item</button>
      {isPopupOpen && <OrderPopup onClose={() => setIsPopupOpen(false)} />}
    </div>
  );
};

export default CatalogPage;
