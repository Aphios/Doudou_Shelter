import React from 'react';
import axios from 'axios';

const SexFilter = ({setDoudous}) => {

    function handleChange(event){
        let sex = event.target.value;
        axios.get('/api/doudous/sex/'+sex).then((response) => {
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
        <div className="sex-filter">
            <select name="sex-filter" id="sex-filter" onChange={handleChange}>
                <option value="F">Female</option>
                <option value="M">Male</option>
                <option value="O">Other</option>
                <option value="U">Unknown</option>
            </select>
        </div>
    );
};

export default SexFilter;