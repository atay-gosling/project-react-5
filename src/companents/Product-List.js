import React from 'react';
import Card from "../companents/Cart"
import {Link} from "react-router-dom";

const Productlist = ({ drinks }) => {
    return (
        <div className={'container'}>
            <div className={'row'}>
                {
                    drinks.map(drink => {
                        return (
                            <div className={'col-4'} key={drink.idDrink}>
                                <Link to={`/drink/${drink.idDrink}`} className={'Link'}>
                                    <Card drink={drink} />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Productlist;
