import React from 'react';
import {NavLink} from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner">
            <h1>The Doudou Shelter</h1>
            <NavLink exact to="/">Home</NavLink>
        </div>
    );
};

export default Banner;