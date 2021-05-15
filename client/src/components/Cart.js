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
            <img src="./img/logo_basket.png" alt="Basket icon" />
            <p>X doudous in your cart</p>
            <button className="btn btn-cart">Open cart</button>
            <button className="btn btn-cart">Close cart</button>
            <button className="btn btn-cart">
                <NavLink exact to="/adopt-confirm">Adopt</NavLink>
            </button>
        </div>
    );
};

export default Cart;