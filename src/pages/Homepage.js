import React, {useEffect, useState} from 'react';
import axios from "axios";
import Productlist from "../companents/Product-List";
import '../index.css'
import Header from "../companents/Header";

const Homepage = () => {
    const[drinks, setDrinks] = useState([])
    useEffect(() =>{
        axios('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
            .then(res => setDrinks(res.data.drinks))
    }, [])

    return (
        <div>
            <Header/>
            <Productlist drinks={drinks}/>
        </div>
    );
};

export default Homepage;