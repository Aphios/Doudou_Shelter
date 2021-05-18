import React from 'react';
import axios from 'axios';

const SoftnessFilter = ({setDoudous}) => {

    function handleChange(event){
        let softness = event.target.value;
        axios.get('/api/doudous/softness/'+softness).then((response) => {
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
        <div className="softness-filter">
            <select name="softness-filter" id="softness-filter" onChange={handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </div>
    );
};

export default SoftnessFilter;