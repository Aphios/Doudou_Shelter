import React, { useState } from 'react';
import axios from 'axios';

import AgeFilter from './AgeFilter';
import SpeciesFilter from './SpeciesFilter';
import SoftnessFilter from './SoftnessFilter';
import SexFilter from './SexFilter';



const BrowseFilter = ({setDoudous}) => {

    const [activeFilter, setActiveFilter] = useState("no-filter");

    const handleChange = (event) => {
        setActiveFilter(event.target.value);
    };

    let options = null;

    switch (activeFilter) {
        case "age":
            options = <AgeFilter setDoudous={setDoudous}/>
            break;
        case "sex":
            options = <SexFilter setDoudous={setDoudous}/>
            break;
        case "species":
            options = <SpeciesFilter setDoudous={setDoudous}/>
            break;
        case "softness":
            options = <SoftnessFilter setDoudous={setDoudous}/>
            break;
        case "no-filter":
            options = null;
            axios.get('/api/doudous')
            .then((response) => {
                if (response.status === 200 && response != null) {
                    setDoudous(response.data);
                }
            });
            break;
        default:
            options = null;
            break;
    }

    return (
        <div className="browse-filter">
            <p>Filter by : </p>
            <select onChange={handleChange} defaultValue="no-filter">
                <option value="no-filter">No filter</option>
                <option value="age">Age</option>
                <option value="sex">Sex</option>
                <option value="species">Species</option>
                <option value="softness">Softness </option>
            </select>
            {options}
        </div>
    );
};

export default BrowseFilter;