import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useNavigate, useParams} from 'react-router-dom';

const IngredientMeals = () => {
    const { ingredientId } = useParams();
    const [drinks, setDrinks] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        axios(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientId}`)
            .then(response => setDrinks(response.data.drinks))
    }, [ingredientId]);

    return (
        <div className={'container'}>
            <button onClick={() => { navigate(-1) }}>Back</button>
            <h2>Meals with {ingredientId}</h2>
            <div>
                {
                    drinks.map(drink => (
                    <Link key={drink.idDrink} to={`/drink/${drink.idDrink}`}>
                        <img src={drink.strDrinkThumb} width={250} />
                        <p>{drink.strDrink}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default IngredientMeals;
