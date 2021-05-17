import React from 'react';

const SpeciesFilter = () => {
    return (
        <div className="species-filter">
            <select name="species-filter" id="species-filter">
                        {/* TODO get species from DB*/}
                        {/* TODO : onchange doit faire remonter la species des doudous à afficher*/}
            </select>
        </div>
    );
};

export default SpeciesFilter;