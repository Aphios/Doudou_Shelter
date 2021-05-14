import React from 'react';

const BrowseFilter = () => {
    return (
        <div className="browse-filter">
            <p>Filter by : </p>
            <ul>
                <li>Age <input type="number" name="age-filter" id="age-filter" /></li>
                <li>Species 
                    <select name="species-filter" id="species-filter">
                        {/* TODO get species from DB*/}
                        </select>
                    </li>
                <li>Softness 
                    <select name="softness-filter" id="softness-filter">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
                <li>Sex
                    <select name="sex-filter" id="sex-filter">
                        <option value="F">Female</option>
                        <option value="M">Male</option>
                        <option value="O">Other</option>
                        <option value="U">Unknown</option>
                    </select>
                </li>
                <li>No filter</li>
            </ul>
        </div>
    );
};

export default BrowseFilter;