import React from 'react';

const Intro = ({children}) => {
    return (
        <div className="intro centered" data-testid="doudou-intro">
            {children}
        </div>
    );
};

export default Intro;