import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

function BlogListHome() {
    return(
        <Fragment>
            <h1 className="heading font-oswald">Blogs</h1>
            <div className="mt-4 ml-3 font-roboto">

                {/* LIST STARTS */}
                <h3 className="font-oswald"><Link to="/blog/padmanabhaswamy-temple">Padmanabhaswamy Temple</Link> <sup><span class="badge badge-danger">New</span></sup></h3>
                <div className="ml-2">
                    <p className="font-roboto">So, here I am. After cancelling my decision... <Link className="style-link" to="/blog/padmanabhaswamy-temple">Read More</Link><br/>
                    <small className="text-muted">26th July, 2020</small></p>
                </div>
                
                <h3 className="font-oswald"><Link to="/blog/why-i-am-preparing-for-upsc-cse">Why I am preparing for UPSC CSE?</Link> <sup><span class="badge badge-danger">New</span></sup></h3>
                <div className="ml-2">
                    <p className="font-roboto">So, here I am. After cancelling my decision... <Link className="style-link" to="/blog/why-i-am-preparing-for-upsc-cse">Read More</Link><br/>
                    <small className="text-muted">23th July, 2020</small></p>
                </div>

                <h3 className="font-oswald"><Link to="/blog/the-start">The Start</Link> <sup><span class="badge badge-danger">New</span></sup></h3>
                <div className="ml-2">
                    <p className="font-roboto">This is how the start looks. Hope... <Link className="style-link" to="/blog/the-start">Read More</Link><br/>
                    <small className="text-muted">20th July, 2020</small></p>
                </div>

            </div>
        </Fragment>
    );
}

export default BlogListHome;