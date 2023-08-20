import React from 'react';

const Cart = ({drink}) => {
    return (
        <div>
            <h3>{drink.strDrink}</h3>
            <img src={drink.strDrinkThumb} width={150} alt=""/>
        </div>
    );
};

export default Cart;