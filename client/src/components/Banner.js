import React from 'react';
import {NavLink} from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner">
            <h1>The Doudou Shelter</h1>
            <div className="home-link">
                <img src="./img/logo_home.png" alt="Logo Home" />
                <NavLink exact to="/">Home</NavLink>
            </div>
        </div>
    );
};

export default Banner;