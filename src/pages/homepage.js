import React, {useEffect, useState} from 'react';
import axios from "axios";
import Cart from "../companents/cart";

const Homepage = () => {
    const[drink, setDrink] =useState([])
    useEffect(() =>{
        axios('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
            .then(res => setDrink(res.data.drinks))
    })

    return (
        <div>
            <Cart/>
            <h2>HOMEPAGE</h2>
        </div>
    );
};

export default Homepage;