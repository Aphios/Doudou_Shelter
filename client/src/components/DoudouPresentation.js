import React from 'react';

const DoudouPresentation = (name, age, sex, species, softness) => {
    return (
        <div className="doudou-presentation">
            <ul>
                <li>Name : {name}</li>
                <li>Age : {age}</li>
                <li>Sex : {sex}</li>
                <li>Species : {species}</li>
                <li>Softness : {softness}</li>
            </ul>
        </div>
    );
};

export default DoudouPresentation;