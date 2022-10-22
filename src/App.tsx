import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FoodList from './pages/foodList/foodList';
import Order from './pages/order/order';
import NotFound from './pages/notFound';

function App() {
    return (
        <Routes>
            <Route path="/" element={<FoodList />} />
            <Route path="/order" element={<Order />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
