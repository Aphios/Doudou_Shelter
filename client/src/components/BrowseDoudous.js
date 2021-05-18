import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Cart from './Cart';
import BrowseFilter from './BrowseFilter';
import Doudous from './Doudous';


const BrowseDoudous = () => {
    
    const [doudous, setDoudous] = useState([]);

    const savedCart = localStorage.getItem('cart');
    const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : []);

    useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);
    
    useEffect(() => {
        axios.get('http://localhost:8080/api/doudous')
        .then((response) => {
            if (response.status === 200 && response != null) {
                setDoudous(response.data);
                console.log(response.data);
            }     
        }).catch((error) => {
            // TODO fallback
            console.log(error);
        });;
    }, []);

    return (
        <div className="browse-doudous">
            <section>
                <BrowseFilter setDoudous={setDoudous}/>
                <Doudous doudous={doudous} setDoudous={setDoudous} cart={cart} setCart={setCart}/>
            </section>    
            <section>
                <Cart cart={cart} setCart={setCart} doudous={doudous} setDoudous={setDoudous}/>
            </section>
        </div>
    );
};

export default BrowseDoudous;