import React, { useState } from 'react';
import './App.css';
import { CSSTransition } from 'react-transition-group';
import ProductSelector from './components/ProductSelector';
import MobileOptions from './components/MobileOptions';
import LaptopOptions from './components/LaptopOptions';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handleSwitch = () => {
    setSelectedProduct(selectedProduct === 'mobiles' ? 'laptops' : 'mobiles');
  };

  return (
    <div className="App">
      <header>
        {selectedProduct === null && <h1>Welcome to Product Finder</h1>}
        <CSSTransition
          in={selectedProduct === 'mobiles'}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <MobileOptions />
        </CSSTransition>
        <CSSTransition
          in={selectedProduct === 'laptops'}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <LaptopOptions />
        </CSSTransition>
      </header>
      <main>
        <CSSTransition
          in={!selectedProduct}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <ProductSelector onSelect={handleProductSelect} />
        </CSSTransition>
      </main>
      {selectedProduct && (
        <button className="switch-button" onClick={handleSwitch}>
          Switch to {selectedProduct === 'mobiles' ? 'Laptops' : 'Mobiles'}
        </button>
      )}
    </div>
  );
}

export default App;
