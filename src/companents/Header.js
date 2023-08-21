import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
            <div className={'Header'}>
                <h2>TheCocktailDB</h2>
                <nav className={'HelpNav'}>
                    <Link to="stylesheet" className={'HeaderLink'}>About us</Link>
                    <Link to='https://www.thecocktaildb.com' className={'HeaderLink'}>Original DB</Link>
                </nav>
            </div>
    );
};

export default Header;