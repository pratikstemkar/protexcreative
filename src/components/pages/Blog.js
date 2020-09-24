import React, {Fragment} from 'react';

import BlogList from '../layout/blog/BlogList';

const Blog = () => {
    return(
        <Fragment>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-9">
                        <h1 className="font-oswald">Blogs</h1>
                        <BlogList />
                    </div>
                    <div className="col-3">
                        <h4 className="font-oswald">Ads</h4>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Blog;