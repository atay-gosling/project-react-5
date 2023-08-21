import React from 'react';
import {Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage"
import DrinkPage from "./pages/DrinkPage";
import IngredientMeals from "./companents/Ingridients";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Homepage/>} />
                <Route path={'/drink/:id'} element={<DrinkPage/>} />
                <Route path="/ingredient/:ingredientId" element={<IngredientMeals />} />
            </Routes>
        </div>
    );
};

export default App;