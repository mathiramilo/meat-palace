import React from 'react';
// Router
import { Routes, Route, Navigate } from 'react-router-dom';
// Views
import { Home } from 'views/home/Home';
import { Shop } from 'views/shop/Shop';
import { ProductDetailContainer } from 'views/product/ProductDetailContainer';
import { Billing } from 'views/billing/Billing';
import { Cart } from 'views/cart/Cart';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/shop/:category' element={<Shop />} />
            <Route path='/shop' element={<Navigate to='/shop/all' />} />
            <Route path='/product/:productID' element={<ProductDetailContainer />} />
            {<Route path='/cart' element={<Cart />} />}
            <Route path='/billing' element={<Billing />} />
            {/* Any unknown path will be redirected to home page */}
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    )
}
