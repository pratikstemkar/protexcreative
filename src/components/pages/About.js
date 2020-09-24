import React, {Fragment} from 'react';
import Intro from '../layout/about/Intro';
import TechSkills from '../layout/about/TechSkills';
import Story from '../layout/about/Story';

const About = () => {
    return(
        <Fragment>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-9">
                        <div className="row">
                            <Intro />
                        </div>
                        <hr />
                        <div className="row">
                            <TechSkills />
                        </div>
                        <hr />
                        <div className="row mt-4 mb-4">
                            <Story />
                        </div>
                    </div>
                    

                    <div className="col">
                        <h4 className="font-oswald">Ads</h4>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default About;