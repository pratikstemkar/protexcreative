import React, {Fragment} from 'react';
import Jumbotron from '../layout/landing/Jumbotron';
import TopCards from '../layout/landing/TopCards';
import BlogListHome from '../layout/landing/BlogListHome';
import ContactCard from '../layout/landing/ContactCard';

import Blockquote from '../layout/landing/Blockquote'

const Landing = () => {
    return(
        <Fragment>
            <div className="container">
                <Jumbotron />
                
                <TopCards />

                <div className="row mb-4">
                    <div className="col-9">
                        <BlogListHome />
                    </div>
                    <div className="col-3">
                        <ContactCard />
                    </div>
                </div>

                <Blockquote />

            </div>
        </Fragment>
    );
}

export default Landing;