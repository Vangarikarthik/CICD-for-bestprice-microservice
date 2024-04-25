import React from 'react';

function ProductSelector({ onSelect }) {
  return (
    <div className="product-selector">
      <h2>Select a Product</h2>
      <button onClick={() => onSelect('mobiles')}>Mobile Phones</button>
      <button onClick={() => onSelect('laptops')}>Laptops</button>
    </div>
  );
}

export default ProductSelector;
