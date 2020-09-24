import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const BlogList = () => {
    return(
        <Fragment>
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

{/* ----------------------------------------------------------------------------------------------------------------------------- */}
                {/* PAGINATION */}
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                        <li class="page-item disabled"><a class="page-link" href="#">2</a></li>
                        <li class="page-item disabled"><a class="page-link" href="#">3</a></li>
                        <li class="page-item disabled">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
{/* ----------------------------------------------------------------------------------------------------------------------------- */}
                
            </div>
        </Fragment>
    );
}

export default BlogList;