import React from 'react';
import './index.css'; //imports this file from the directory which is providing the CSS
import PDQImage from '../assets/PDQ.png'; // Import PDQ image
import TabletTillImage from '../assets/Tablet till.png'; // Import Tablet Till image
import bumpbar from "../assets/bumpbar.jpg";
import cashregister from "../assets/cash register.jpg";
import kitchendisplaysystem from "../assets/kitchen display system.jpg";
import kitchenprinter from "../assets/kitchen printer.jpg";
import receiptprinter from "../assets/receipt printer.jpg";



// Abel's code to render for the Catalog page
const items = [
  { name: 'PDQ', image: PDQImage },
  { name: 'Tills', image: TabletTillImage },
  { name: 'Bumpbar', image: bumpbar },
  { name: 'Kitchen Display System', image: kitchendisplaysystem },
  { name: 'Cash Register', image: cashregister },
  { name: 'kitchen Printer', image: kitchenprinter },
  { name: 'Receipt Printer', image: receiptprinter },
  { name: 'kitchen Printer', image: kitchenprinter },
  // Add more items as needed
];

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
// All functions saved under the APP function
function App() {
  return (
    <div>
      <CatalogPage/>
    </div>
  );
}

const handleOrder = (item) => {
  // Handle the "Order" button click for the selected item
  console.log(`Order ${item.name}`);
};
