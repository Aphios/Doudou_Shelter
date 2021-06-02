import React from 'react';
import Doudou from './Doudou.js'


const Doudous = ({doudous, setDoudous, cart, setCart}) => {

    function addToCart(elt){
        console.log(elt._id);
        let newDoudous = doudous.filter(doudou => elt._id !== doudou._id);
        setDoudous(newDoudous);
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