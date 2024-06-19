import React, { useState, useEffect } from 'react';
import './MobileOptions.css';

function MobileOptions() {
  const [mobileData, setMobileData] = useState([]);
  const backendUrl = process.env.REACT_APP_MOBILE_SERVICE_URL;

  useEffect(() => {
    fetch(backendUrl)
      .then(response => response.json())
      .then(data => setMobileData(data))
      .catch(error => console.error('Error fetching mobile data:', error));
  }, [backendUrl]);

  return (
    <div className="options-container">
      <h2 className="mobile-options-heading">Mobile Options</h2>
      <div className="product-container">
        {mobileData.map(product => (
          <div key={product._id} className="product">
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

export default MobileOptions;

