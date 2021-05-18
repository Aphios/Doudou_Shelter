import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SpeciesFilter = ({setDoudous}) => {

    const [speciesList, setSpeciesList] = useState([]);

    useEffect(() => {
        axios.get('/api/doudous/list/species')
        .then((response) => {
            if (response.status === 200 && response != null) {
                setSpeciesList(response.data);
            }
        });
    }, []);   

    function handleChange(event){
        let species = event.target.value;
        axios.get('/api/doudous/species/'+species).then((response) => {
            if (response.status === 200 && response != null) {
                setDoudous(response.data);
            }
        }).catch((err) => {
            if(err.response && err.response.status === 404){
                setDoudous([]);
            }
        });      
    }

    return (
        <div className="species-filter">
            <select name="species-filter" id="species-filter" onChange={handleChange}>
                {speciesList.map((spec) => (
                    <option value={spec}>{spec}</option>
                ))}
            </select>
        </div>
    );
};

export default SpeciesFilter;