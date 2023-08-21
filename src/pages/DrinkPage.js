import React, {useEffect, useState} from 'react';
import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import Header from "../companents/Header";

const DrinkPage = () => {
    const { id } = useParams()
    const [drink, setDrink] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(r => setDrink(r.data.drinks[0]))
    },[id])
    const goToPreviousDrink = () => {
        const previousId = parseInt(id, 10) - 1;
        navigate(`/drink/${previousId}`);
    };

    const goToNextDrink = () => {
        const nextId = parseInt(id, 10) + 1;
        navigate(`/drink/${nextId}`);
    };
    return (
        <div>
            <Header/>
            <div className={'container'}>
                <button onClick={() => { navigate('/') }}>BACK</button>
                <div className={'aboutdrink'}>
                    <h1>{drink.strDrink}</h1>
                    <span className={'span'}><h3>{drink.strCategory}</h3></span>
                </div>
                <div className={`${'row'} ${'HelpRow'}`}>
                    <div className={'col-6'}>
                        <div className="box"> <img src={drink.strDrinkThumb} alt={drink.strMeal} width={250}/></div>
                    </div>
                    <div className={'col-6'}>
                        <div className="box"><p>{drink.strInstructions}</p></div>
                    </div>
                </div>
                <div className={'ingri'}>
                    <div className={'row'}>
                        <div className={'col-4'}>
                            <div className={`${'box'} ${'helpbox'}`}>
                                <Link to={`/ingredient/${drink.strIngredient1}`}>
                                    <img src={`https://www.themealdb.com/images/ingredients/${drink.strIngredient1}.png`} width={'150'} alt=""/>
                                </Link>
                                <Link to={`/ingredient/${drink.strIngredient4}`}>
                                    <img src={`https://www.themealdb.com/images/ingredients/${drink.strIngredient4}.png`} width={'150'} alt=""/>
                                </Link>
                                <Link to={`/ingredient/${drink.strIngredient7}`}>
                                    <img src={`https://www.themealdb.com/images/ingredients/${drink.strIngredient7}.png`} width={'150'} alt=""/>
                                </Link>
                            </div>
                        </div>
                        <div className={'col-4'}>
                            <div className={`${'box'} ${'helpbox'}`}>
                                <Link to={`/ingredient/${drink.strIngredient2}`}>
                                    <img src={`https://www.themealdb.com/images/ingredients/${drink.strIngredient2}.png`} width={'150'} alt=""/>
                                </Link>
                                <Link to={`/ingredient/${drink.strIngredient5}`}>
                                    <img src={`https://www.themealdb.com/images/ingredients/${drink.strIngredient5}.png`} width={'150'} alt=""/>
                                </Link>
                                <Link to={`/ingredient/${drink.strIngredient8}`}>
                                    <img src={`https://www.themealdb.com/images/ingredients/${drink.strIngredient8}.png`} width={'150'} alt=""/>
                                </Link>
                            </div>
                        </div>
                        <div className={'col-4'}>
                            <div className={`${'box'} ${'helpbox'}`}>
                                <Link to={`/ingredient/${drink.strIngredient3}`}>
                                    <img src={`https://www.themealdb.com/images/ingredients/${drink.strIngredient3}.png`} width={'150'} alt=""/>
                                </Link>
                                <Link to={`/ingredient/${drink.strIngredient6}`}>
                                    <img src={`https://www.themealdb.com/images/ingredients/${drink.strIngredient6}.png`} width={'150'} alt=""/>
                                </Link>
                                <Link to={`/ingredient/${drink.strIngredient9}`}>
                                    <img src={`https://www.themealdb.com/images/ingredients/${drink.strIngredient9}.png`} width={'150'} alt=""/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'before-after'}>
                    <button onClick={goToPreviousDrink}>Previous Drink</button>
                    <button onClick={goToNextDrink}>Next Drink</button>
                </div>
            </div>
        </div>
    );
};

export default DrinkPage;