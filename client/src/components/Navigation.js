import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <button className="btn btn-adopt">
                <NavLink exact to="/adopt">
                  Adopter un doudou
                </NavLink>
            </button>
            <button className="btn btn-give">
                <NavLink exact to="/give">
                  Donner un doudou
                </NavLink>
            </button>
        </div>
    );
};

export default Navigation;