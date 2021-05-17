import React from 'react';

const AgeFilter = () => {
    return (
        <div className="age-filter">
            {/* TODO : onchange doit faire remonter l'age des doudous à afficher*/}
            <input type="number" name="age-filter" id="age-filter" />
        </div>
    );
};

export default AgeFilter;