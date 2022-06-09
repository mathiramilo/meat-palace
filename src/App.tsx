import React from 'react';
// Import toastify
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// Import components
import { NavBar } from 'components/layout/navbar/NavBar';
import { Footer } from 'components/layout/footer/Footer';
// Import views
import { Home } from 'views/home/Home';
import { Shop } from 'views/shop/Shop';
import { ProductDetail } from 'views/product/ProductDetailContainer';
import { Billing } from 'views/billing/Billing';
// Import css
import 'styles/styles.ts';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Home /> */}
      {/* <Shop /> */}
      <ProductDetail />
      {/* <Billing /> */}
      <Footer />

      {/* Info messages Toast Container */}
      <ToastContainer 
        position="bottom-right"
        autoClose={2500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  );
}

export default App;
