import React from 'react';
import Banner from '../components/Banner';
import Intro from '../components/Intro';

const AdoptConfirm = () => {
    return (
        <div className="adopt-confirm">
            <Banner />
            <Intro>
                <h2>Adoption Confirmation</h2>
                <p>To confirm your adoption, please give us your email adress so that we can send you your doudou data.</p>
                <p>Your email will not be registered in any database or sold to whomever. We forget you right after sending you your doudous !</p>
            </Intro>
            {/* TODO show detailed cart here ?*/}
            <div className="give-form centered">
                <form action="" method="post">
                    <p>
                        <label htmlFor="email">Your email</label>
                        <input type="email" name="email" id="email" />
                    </p>
                    <button className="btn btn-adopt">
                        Validate
                    </button>
                </form>
            </div>

        </div>
    );
};

export default AdoptConfirm;