import React from 'react';
// Import components
import { NavBar } from './components/layout/navbar/NavBar';
import { Footer } from './components/layout/footer/Footer';
// Import views
import { Home } from './views/home/Home';
import { Shop } from './views/shop/Shop';
import { ProductDetail } from './views/product/ProductDetail';
// Import css
import './styles/styles.ts';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Home /> */}
      {/* <Shop /> */}
      <ProductDetail />
      <Footer />
    </div>
  );
}

export default App;
