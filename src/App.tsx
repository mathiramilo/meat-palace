import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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

            <BrowserRouter>
                <NavBar />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/shop/:category' element={<Shop />} />
                    <Route path='/shop' element={<Navigate to='/shop/all' />} />
                    <Route path='/product/:productID' element={<ProductDetail />} />
                    {/* <Route path='/cart' element={<Cart />} /> */}
                    <Route path='/billing' element={<Billing />} />
                    {/* Any unknown path will be redirected to home page */}
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>

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
            </BrowserRouter>

        </div>
    );
}

export default App;
