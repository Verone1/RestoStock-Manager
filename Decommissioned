import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; //imports this file from the directory which is providing the CSS


// The HTML of the Header section is saved under the below function which can be recalled so it can be rendered
function Header() {
  return (
    <header className="header">
      <a> Home </a>
      <p>Hospitality </p>
      <div className= "icon">
        <button className="icon-button">VT</button>
        <div className="icon-list">
          <div href="#">Sign out</div>
        </div>
      </div>
    </header>
  );
}

// The HTML of the side options bar section is saved under the below function which can be recalled so it can be rendered
function Option() {
  return (
    <div id="leftPane" className="options">
      <a href="#">View Inventory</a>
      <a href="order">Order Items </a>
      <a href="#">Report faulty/ missing item</a>
      <a href="#">Mailbox</a>
    </div>
  );
}


// Abel's code to render for the Catalog page
const items = [
  { name: 'PDQ', image: 'C:\Users\veron\hospitality-stock-system\src\PDQ.png' },
  { name: 'Tills', image: 'card.png' },
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



// All functions saved under the APP function
function App() {
  return (
    <div>
      <Header/>
      <Option />
      <CatalogPage/>
    </div>
  );
}


const handleOrder = (item) => {
  // Handle the "Order" button click for the selected item
  console.log(`Order ${item.name}`);
};



// Below code renders all functions stored under App()
ReactDOM.render(<App />, document.getElementById('root')); 
