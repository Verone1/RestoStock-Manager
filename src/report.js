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

const ReportPage = () => {
  return (
    <div className='report-page'>
      <div className="title-container">
        <h1 className="page-title">Report Management</h1>
        <p className="page-description">
          Here you can view and manage various reports related to inventory, orders, and more.
        </p>
      </div>
      <div className='inventory-container'>
        <button type='button' className='custom-button'>Report 1</button>
        <button type='button' className='custom-button'>Report 2</button>
        <button type='button' className='custom-button'>Report 3</button>
        <button type='button' className='custom-button'>Report 4</button>
        {/* Add more buttons as needed */}
      </div>
    </div>
  );
};

export default ReportPage;



// All functions saved under the APP function
function App() {
  return (
    <div>
      <Header />
      <Option />
      <ReportPage />
    </div>
  );
}

// Below code renders all functions stored under App()
ReactDOM.render(<App />, document.getElementById('root'));
