import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Doudou from './Doudou';

const Cart = ({cart, setCart}) => {

    const [isOpen, setIsOpen] = useState(false);
    const total = cart.length >= 1 ? cart.length : "No ";

    function removeFromCart(elt){
        let newCart = cart.filter(doudou => elt._id !== doudou._id)
        setCart(newCart);
    }

    return isOpen ? (
        <div className="cart cart-opened">
            <img src="./img/logo_basket.png" alt="Basket icon" />
            {cart.length > 0 ? (
                <>
                {cart.map((doudou, index) => (
                    <div className="doudou-presentation" key={`${doudou._id}_${index}`}>
                        <Doudou  
                        name={doudou.name}
                        age={doudou.age}
                        sex={doudou.sex}
                        species={doudou.species}
                        softness={doudou.softness}
                        />
                        <button className="btn btn-delete" onClick={() => removeFromCart(doudou)}>Remove</button>
                    </div>
                ))}
                <button className="btn btn-cart" onClick={() => setIsOpen(false)}>Close cart</button>
                <button className="btn btn-cart">
                    <NavLink exact to="/adopt-confirm">Adopt</NavLink>
                </button>
                </>              
            ) : (null)}
            </div>
    ) : (
        <div className="cart">
            <img src="./img/logo_basket.png" alt="Basket icon" />
            <p>{total} doudous in your cart</p>       
            {cart.length > 0 ? (
                <>
                <button className="btn btn-cart" onClick={() => setIsOpen(true)}>Open cart</button>
                <button className="btn btn-cart">
                    <NavLink exact to="/adopt-confirm">Adopt</NavLink>
                </button>
                </>
            ) : (null)}
    </div>

    )
};

export default Cart;