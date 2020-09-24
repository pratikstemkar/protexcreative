import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import head1 from '../../../assets/posts/2020-07-23-why-upsc/head.jpg';
import head2 from '../../../assets/posts/2020-07-20-First-Blog/head.jpg';

function TopCards(){
    return(
        <Fragment>  
            <div className="row">
                <div className="col">
                    <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img src={head1} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title font-oswald"><Link to="/blog/why-i-am-preparing-for-upsc-cse">Why I am preparing for UPSC CSE?</Link></h5>
                                    <p className="card-text">So, here I am. After cancelling my decision... <br /><Link className="style-link" to="/blog/why-i-am-preparing-for-upsc-cse">Read More</Link></p>
                                    <p className="card-text"><small className="text-muted">23rd July, 2020</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img src={head2} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title font-oswald"><Link to="/blog/the-start">The Start!</Link></h5>
                                    <p className="card-text">This is how the start looks. Hope... <br /><Link className="style-link" to="/blog/the-start">Read More</Link></p>
                                    <p className="card-text"><small className="text-muted">20th July, 2020</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default TopCards;