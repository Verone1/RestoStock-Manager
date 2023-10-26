import React from 'react';
import './CatalogPage.css'; // Import the CSS file

const items = [
  { name: 'Item 1', image: 'beef-burger-isolated-png.png' },
  { name: 'Item 2', image: 'beef-burger-isolated-png.png' },
  { name: 'Item 3', image: 'beef-burger-isolated-png.png' },
  { name: 'Item 4', image: 'beef-burger-isolated-png.png' },
  // Add more items as needed
];

const CatalogPage = () => {
  return (
    <div className="catalog-page">
      <h1>Catalog Page</h1>
      <div className="inventory-container">
        {items.map((item, index) => (
          <div key={index} className="inventory-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <button onClick={() => handleDetails(item)}>Details</button>
            <button onClick={() => handleOrder(item)}>Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const handleDetails = (item) => {
  // Handle the "Details" button click for the selected item
  console.log(`Details for ${item.name}`);
};

const handleOrder = (item) => {
  // Handle the "Order" button click for the selected item
  console.log(`Order ${item.name}`);
};

export default CatalogPage;
