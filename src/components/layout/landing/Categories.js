import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Categories = () => {
    return(
        <Fragment>
            <div className="mt-4">
                <h3 className="font-oswald">Categories</h3>
                <div className="btn-group-vertical ml-3">
                    <Link className="btn btn-primary btn-category"><i class="fa fa-user" aria-hidden="true"></i> Personal <span class="badge badge-light">2</span></Link>
                    <Link className="btn btn-secondary"><i class="fa fa-graduation-cap" aria-hidden="true"></i> Education <span class="badge badge-light">0</span></Link>
                    <Link className="btn btn-info"><i class="fa fa-map-marker" aria-hidden="true"></i> Travel <span class="badge badge-light">0</span></Link>
                    <Link className="btn btn-danger"><i class="fa fa-laptop" aria-hidden="true"></i> Technology <span class="badge badge-light">0</span></Link>
                    <Link className="btn btn-success"><i class="fa fa-book" aria-hidden="true"></i> Thoughts <span class="badge badge-light">0</span></Link>
                </div>
            </div>
        </Fragment>
    );
}

export default Categories;