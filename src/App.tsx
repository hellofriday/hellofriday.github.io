import React from 'react';
import {Route, Routes} from "react-router-dom";
import FoodList from "./pages/foodList";
import Order from "./pages/order";

function App() {
  return (
      <Routes>
          <Route path="/" element={<FoodList />}/>
          <Route path="/order" element={<Order />}/>
      </Routes>
  );
}

export default App;
