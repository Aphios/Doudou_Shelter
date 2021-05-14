import React from 'react';
import {NavLink} from 'react-router-dom';

const Cart = () => {
    return (
        <div className="cart">
            {/* TODO : cart must be closed by default
            and only show : 'X doudous in your cart'
            Button opencart to develop it : shows the details of each doudou in cart
            button close cart to close it
            button adopt leads to adopt-confirm page, appears only if there's sthg in cart
            */}
            <p>X doudous in your cart</p>
            <button>Open cart</button>
            <button>Close cart</button>
            <button>
                <NavLink exact to="/adopt-confirm">Adopt</NavLink>
            </button>
        </div>
    );
};

export default Cart;