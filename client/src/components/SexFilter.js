import React from 'react';

const SexFilter = () => {
    return (
        <div className="sex-filter">
            {/* TODO : onchange doit faire remonter le sexe des doudous à afficher*/}
            <select name="sex-filter" id="sex-filter">
                <option value="F">Female</option>
                <option value="M">Male</option>
                <option value="O">Other</option>
                <option value="U">Unknown</option>
            </select>
        </div>
    );
};

export default SexFilter;