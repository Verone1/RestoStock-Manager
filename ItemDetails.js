import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = ({ items }) => {
  const { itemName } = useParams();
  const selectedItem = items.find((item) => item.name === itemName);

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  return (
    <div className='content'>
      <img src={"http://localhost:3000/image.jpg"} alt={selectedItem.name} />
      <h1>{selectedItem.name}</h1>
      {/* Render other details of the selected item */}
      <button>Order</button>
    </div>
  );
};

export default ItemDetails;
