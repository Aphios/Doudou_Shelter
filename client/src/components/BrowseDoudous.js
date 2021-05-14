import React from 'react';
import Cart from './Cart';
import BrowseFilter from './BrowseFilter';
import Doudous from './Doudous';

const BrowseDoudous = () => {
    return (
        <div className="browse-doudous">
            <section>
                <BrowseFilter />
                <Doudous />
            </section>    
            <section>
                <Cart />
            </section>
        </div>
    );
};

export default BrowseDoudous;