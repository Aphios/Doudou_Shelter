import React from 'react';

const GiveForm = () => {
    return (
        <div className="give-form centered">
            <form action="" method="post">
                <p>
                    <label htmlFor="doudou-name">Name of your doudou :</label>
                    <input className="give-input" type="text" name="doudou-name" id="doudou-name" />
                </p>         
                <p>                
                    <label htmlFor="age">Age :</label>
                    <input className="give-input" type="number" name="age" id="age" />
                </p>
                <p>
                    <label htmlFor="sex">Sex (F for female, M for male, O for other, U for unknown) :</label>
                    <input className="give-input" type="text" name="sex" id="sex" />
                </p>
                <p>
                    <label htmlFor="species">Species (e.g. puppet, dog, leopard, alien, etc) :</label>
                    <input className="give-input" type="text" name="species" id="species" />
                </p>
                <p>
                    <label htmlFor="softness">Softness (1: low, 2: normal, 3: super) :</label>
                    <input className="give-input" type="number" name="softness" id="softness" min="1" max="3"/>
                </p>
                <button className="btn btn-give">Give</button>
            </form>
        </div>
    );
};

export default GiveForm;