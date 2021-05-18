import React from 'react';
import Doudou from './Doudou.js'


const Doudous = ({doudous, cart, setCart}) => {

    function addToCart(elt){
        // If the doudou is already in cart, it can't be added again
        // This is a temporary solution, to be replaced with disabling doudou from purchase as soon as it is added to cart
        if(cart.find(doudou => doudou._id === elt._id)){
            return;
        }
        if(cart.length > 0){
            setCart([...cart, elt]);
        }else{
            setCart([elt]);
        }
    }

    return (
        <div className="doudous">
            
            {doudous.map((doudou, index) => (
                <div className="doudou-presentation" key={`${doudou._id}_${index}`}>
                    <Doudou  
                    name={doudou.name}
                    age={doudou.age}
                    sex={doudou.sex}
                    species={doudou.species}
                    softness={doudou.softness}
                    />
                    <button className="btn btn-shop" onClick={() => addToCart(doudou)}>Add to cart</button>
                </div>
            ))}

        </div>       
    );
};

export default Doudous;