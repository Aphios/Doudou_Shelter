import React from 'react';
import axios from 'axios';

const AgeFilter = ({setDoudous}) => {

    function handleChange(event){
        let age = event.target.value;
        axios.get('/api/doudous/age/'+age).then((response) => {
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
        <div className="age-filter">
            <input type="number" name="age-filter" id="age-filter" onChange={handleChange}/>
        </div>
    );
};

export default AgeFilter;