import React, { useEffect, useState } from 'react';
import axios from 'axios';

import AgeFilter from './AgeFilter';
import SpeciesFilter from './SpeciesFilter';
import SoftnessFilter from './SoftnessFilter';
import SexFilter from './SexFilter';



const BrowseFilter = ({setDoudous}) => {

    const [activeFilter, setActiveFilter] = useState(null);

    const handleChange = (event) => {
        switch (event.target.value) {
            case "age":
                setActiveFilter(<AgeFilter setDoudous={setDoudous}/>)
                break;
            case "sex":
                setActiveFilter(<SexFilter setDoudous={setDoudous}/>)
                break;
            case "species":
                setActiveFilter(<SpeciesFilter setDoudous={setDoudous}/>)
                break;
            case "softness":
                setActiveFilter(<SoftnessFilter setDoudous={setDoudous}/>)
                break;
            case "no-filter":
                setActiveFilter(null);
                axios.get('/api/doudous')
                .then((response) => {
                    if (response.status === 200 && response != null) {
                        setDoudous(response.data);
                    }
                });
                break;
            default:
                setActiveFilter(null);
                break;
        }
    };

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
            {activeFilter}
        </div>
    );
};

export default BrowseFilter;