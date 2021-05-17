import React from 'react';
import { useState } from 'react';
import AgeFilter from './AgeFilter';
import SpeciesFilter from './SpeciesFilter';
import SoftnessFilter from './SoftnessFilter';
import SexFilter from './SexFilter';



const BrowseFilter = () => {

    const [activeFilter, setActiveFilter] = useState("no-filter");

    const changeSelectOptionHandler = (event) => {
        setActiveFilter(event.target.value);
      };

    let options = null;

    switch (activeFilter) {
        case "age":
            options = <AgeFilter />
            break;
        case "sex":
            options = <SexFilter />
            break;
        case "species":
            options = <SpeciesFilter />
            break;
        case "softness":
            options = <SoftnessFilter />
            break;
        case "no-filter":
            options = null;
            break;
        default:
            options = null;
            break;
    }

    return (
        <div className="browse-filter">
            <p>Filter by : </p>
            <select onChange={changeSelectOptionHandler}>
                <option value="age">Age</option>
                <option value="species">Species</option>
                <option value="softness">Softness </option>
                <option value="sex">Sex</option>
                <option value="no-filter" selected>No filter</option>
            </select>
            {options}
        </div>
    );
};

export default BrowseFilter;