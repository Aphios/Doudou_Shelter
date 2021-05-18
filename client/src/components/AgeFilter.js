import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const AgeFilter = (setDoudous) => {

    function handleChange(event){
        let age = event.target.value;
        axios.get('/api/doudous/age/'+age).then((response) => {
            console.log(response);
            setDoudous(response);
        }).catch((error) => {
            console.log(error);
            setDoudous([]);
        });
        
    }

    return (
        <div className="age-filter">
            <input type="number" name="age-filter" id="age-filter" onChange={handleChange}/>
        </div>
    );
};

export default AgeFilter;