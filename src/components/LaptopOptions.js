import React, { useState, useEffect } from 'react';
import './LaptopOptions.css';

function LaptopOptions() {
  const [laptopData, setLaptopData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/laptops')
      .then(response => response.json())
      .then(data => setLaptopData(data))
      .catch(error => console.error('Error fetching laptop data:', error));
  }, []);

  return (
    <div className="options-container">
      <h2 className="laptop-options-heading">Laptop Options</h2>
      <div className="product-container">
        {laptopData.map(product => (
          <div key={product.id} className="product">
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
              <a href={product.link} target="_blank" rel="noopener noreferrer">
                View on {product.link.includes('amazon') ? 'Amazon' : 'Flipkart'}
              </a>
            </div>
            <div className="product-image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LaptopOptions;
