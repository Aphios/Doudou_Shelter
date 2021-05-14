import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation centered">
            <button className="btn btn-adopt">
                <NavLink exact to="/adopt">
                  Adopt
                </NavLink>
            </button>
            <button className="btn btn-give">
                <NavLink exact to="/give">
                  Give
                </NavLink>
            </button>
        </div>
    );
};

export default Navigation;