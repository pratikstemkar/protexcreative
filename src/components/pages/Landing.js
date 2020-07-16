import React, {Fragment} from 'react';

import Jumbotron from '../layout/Jumbotron';
import TopCards from '../layout/TopCards';
import BlogListHome from '../layout/BlogListHome';
import ContactCard from '../layout/ContactCard';

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
                        <ContactCard />
                        <ContactCard />
                    </div>
                </div>

                <Blockquote />

            </div>
        </Fragment>
    );
}

export default Landing;