import React from 'react';
import { useState, useEffect } from 'react';

import axios from 'axios';

import Cart from './Cart';
import BrowseFilter from './BrowseFilter';
import Doudous from './Doudous';


const BrowseDoudous = () => {

    const [doudous, setDoudous] = useState([
        {
          "age": 26,
          "sex": "F",
          "_id": "609697696ee2cc78fae3a0f7",
          "name": "Emé",
          "species": "puppet",
          "softness": 2
        },
        {
          "age": 24,
          "sex": "M",
          "_id": "609697c56ee2cc78fae3a0f8",
          "name": "Mouffi",
          "species": "dog",
          "softness": 3
        },
        {
          "age": 24,
          "sex": "M",
          "_id": "609bd1b118fd32652c6797fa",
          "name": "Jonas",
          "species": "dog",
          "softness": 2,
          "__v": 0
        },
        {
          "age": 18,
          "sex": "M",
          "_id": "609bd6b50c49c1689ce0b427",
          "name": "Chienchien",
          "softness": 1,
          "species": "dog",
          "__v": 0
        },
        {
          "age": 2,
          "sex": "U",
          "_id": "609bd6c50c49c1689ce0b428",
          "name": "Chienchien",
          "softness": 2,
          "species": "dog",
          "__v": 0
        }
      ]);


    const savedCart = localStorage.getItem('cart');
    const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : []);

    useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);
    
/*
    useEffect(() => {
        axios.get('http://localhost:8080/api/doudous')
        .then((response) => {
            if (response.status === 200 && response != null) {
                setDoudous(response);
                console.log(response);
            }     
        }).catch((error) => {
            console.log(error);
        });;
    }, []);
*/

    return (
        <div className="browse-doudous">
            <section>
                <BrowseFilter setDoudous={setDoudous}/>
                <Doudous doudous={doudous} cart={cart} setCart={setCart}/>
            </section>    
            <section>
                <Cart cart={cart} setCart={setCart}/>
            </section>
        </div>
    );
};

export default BrowseDoudous;