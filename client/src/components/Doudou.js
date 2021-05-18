import React from 'react';

const Doudou = ({name, age, sex, species, softness}) => {

    return (
        <>
            <p><strong>{name}</strong></p>
            <ul>
                <li>Age : {age}</li>
                <li>Sex : {sex}</li>
                <li>Species : {species}</li>
                <li>Softness : {softness}</li>
            </ul>
        </>
    );
};

export default Doudou;