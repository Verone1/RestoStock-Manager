import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";


// Abel's code to render for the Catalog page
const items = [
  { name: 'Test', image: 'C:\Users\veron\hospitality-stock-system\src\PDQ.png' },
  { name: 'Test', image: 'card.png' },
  { name: 'Front of House Tablet', image: 'https://www.google.co.uk/search?newwindow=1&sca_esv=584594592&sxsrf=AM9HkKkKSqFld-GBLyTex7npcQeWXHJ_2w:1700660933792&q=pdq+machine&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjG-N3W39eCAxWEQUEAHa4aABQQ0pQJegQIDhAB&biw=1488&bih=742&dpr=1.25#imgrc=zCDql9NToQJV5M' },
  { name: 'Check-in PC', image: 'beef-burger-isolated-png.png' },
  { name: 'Check-in PC', image: 'beef-burger-isolated-png.png' },
  { name: 'Check-in PC', image: 'beef-burger-isolated-png.png' },
  // Add more items as needed
];


// Abel's code to render for the Catalog page
const CatalogPage = () => {
  return (
    <div className="catalog-page">
      <div className="inventory-container">
        {items.map((item, index) => (
          <div key={index} className="inventory-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <button onClick={() => handleOrder(item)}>Details</button>
            <button onClick={() => handleOrder(item)}>Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;


const handleOrder = (item) => {
  // Handle the "Order" button click for the selected item
  console.log(`Order ${item.name}`);
};