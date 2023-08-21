import React from "react";

const Cart = ({ drink }) => {
    return (
        <div className={'cart'}>
            <div className={'helpdiv'}>
                <h3 className={'cartH2'}>{drink.strDrink}</h3>
                <img src={drink.strDrinkThumb} className={'cartImg'} width={150} alt={drink.strDrink}/>
            </div>
        </div>
    );
};

export default Cart
