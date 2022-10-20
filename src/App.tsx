import React from 'react';
import {Route, Routes} from "react-router-dom";
import FoodList from "./pages/foodList";

function App() {
  return (
      <Routes>
        <Route path="/" element={<FoodList />}/>
      </Routes>
  );
}

export default App;
