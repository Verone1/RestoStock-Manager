import React from 'react';
import './CatalogPage.css'; // Import the CSS file
import { Link } from 'react-router-dom';



const CatalogPage = () => {
  return (
    <div className="catalog-page">
      <h1>Catalog Page</h1>
      <div className="inventory-container">
        {items.map((item, index) => (
          <div key={index} className="inventory-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
           
            <Link to={`/details/${item.name}`}>
              <button>Details</button>
            </Link>
            <button onClick={() => handleOrder(item)}>Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};



const handleOrder = (item) => {
  // Handle the "Order" button click for the selected item
  console.log(`Order ${item.name}`);
};

export default CatalogPage;
