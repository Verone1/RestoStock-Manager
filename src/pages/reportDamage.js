import React, { useState, useEffect } from 'react';
import '../index.css';

const ReportPage = () => {

  useEffect(() => {
    document.title = 'Report Damage | RestoStock Manager';
  })

  const [item, setItem] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = () => {
    // Handle the form submission, you can send the data to HR or perform any necessary actions
    console.log('Submitted:', { item, description, location });
    // You might want to reset the form after submission
    setItem('');
    setDescription('');
    setLocation('');
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Report Damaged or Broken Item</h1>
      <form>
        <div className="form-group">
          <label htmlFor="item">Item Name:</label>
          <input
            type="text"
            id="item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Quantity">Quantity:</label>
          <input
          type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            min="0"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description of Damage:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location of Damage:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <button type="button" id="save-button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReportPage;
