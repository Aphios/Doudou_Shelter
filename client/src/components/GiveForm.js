import React, { useState } from 'react';
import axios from 'axios';

const GiveForm = () => {

    const [doudouData, setDoudouData] = useState({name: "", age: "", sex: "", species: "", softness: ""});
    const [posted, setPosted] = useState(false);
    const [err, setErr] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        axios.post('/api/doudous', doudouData)
        .then((res) => {
            if(res.status === 201 && res !=null){
                setPosted(true);
            }
        })
        .catch((err) => {
            if(err.response && err.response.status === 400){
                setErr("We couldn't store your doudou in our database. Please try again.");
            }
        });
    }

    function changeName(e){
        setDoudouData(data => ({...data, name: e.target.value}));
    }

    function changeAge(e){
        setDoudouData(data => ({...data, age: e.target.value}));
    }

    function changeSex(e){
        setDoudouData(data => ({...data, sex: e.target.value}));
    }

    function changeSpecies(e){
        setDoudouData(data => ({...data, species: e.target.value}));
    }

    function changeSoftness(e){
        setDoudouData(data => ({...data, softness: e.target.value}));
    }

    return (
        <div className="give-form centered">
            {(posted || err !== "") ? (
                posted ? (
                    <p>Thank your for your donation !</p>
                ) : (
                    <p>{err}</p>
                )
            ) : (
                <form onSubmit={handleSubmit}>
                    <p>
                        <label htmlFor="doudou-name">Name of your doudou :</label>
                        <input className="give-input" type="text" name="doudou-name" id="doudou-name" value={doudouData.name} onChange={changeName}/>
                    </p>         
                    <p>                
                        <label htmlFor="age">Age :</label>
                        <input className="give-input" type="number" name="age" id="age" value={doudouData.age} onChange={changeAge}/>
                    </p>
                    <p>
                        <label htmlFor="sex">Sex (F for female, M for male, O for other, U for unknown) :</label>
                        <input className="give-input" type="text" name="sex" id="sex" value={doudouData.sex} onChange={changeSex}/>
                    </p>
                    <p>
                        <label htmlFor="species">Species (e.g. puppet, dog, leopard, alien, etc) :</label>
                        <input className="give-input" type="text" name="species" id="species" value={doudouData.species} onChange={changeSpecies}/>
                    </p>
                    <p>
                        <label htmlFor="softness">Softness (1: low, 2: normal, 3: super) :</label>
                        <input className="give-input" type="number" name="softness" id="softness" min="1" max="3" value={doudouData.softness} onChange={changeSoftness}/>
                    </p>
                    <button type="submit" className="btn btn-give">Give</button>
                </form>
            ) }

        </div>
    );
};

export default GiveForm;