import React from 'react';

const SoftnessFilter = () => {
    return (
        <div className="softness-filter">
            {/* TODO : onchange doit faire remonter la softness des doudous à afficher*/}
            <select name="softness-filter" id="softness-filter">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </div>
    );
};

export default SoftnessFilter;