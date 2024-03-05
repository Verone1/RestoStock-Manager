// src/components/InventoryPage.js

import React from 'react';
import 'Front_end.css';

const InventoryPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('postgres db @ismail>')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('error:', error));
  }, []);

  return (
    <div className="inventory-container">
      <h1>Product Inventory</h1>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryPage;
