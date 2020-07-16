import React, {Fragment} from 'react';

import {Link} from 'react-router-dom';

const Blog = () => {
    return(
        <Fragment>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-9">
                        <h1 className="font-oswald">Blogs</h1>
                        <div className="mt-4 ml-3 font-roboto">
                            <h3 className="font-oswald"><Link to="#">The Great Post!</Link></h3>
                            <div className="ml-2">
                                <p className="font-roboto">This is the first blog friends. Celebrate !!<br/>
                                <small className="text-muted">20th July, 2020</small></p>
                            </div>

                            <h3 className="font-oswald"><Link to="#">The Great adasdasd asfas Post!</Link></h3>
                            <div className="ml-2">
                                <p className="font-roboto">This is the first blog friends. Celebrate !!<br/>
                                <small className="text-muted">20th July, 2020</small></p>
                            </div>

                            <h3 className="font-oswald"><Link to="#">The Great Post!</Link></h3>
                            <div className="ml-2">
                                <p className="font-roboto">This is the first blog friends. Celebrate !!<br/>
                                <small className="text-muted">20th July, 2020</small></p>
                            </div>

                            <h3 className="font-oswald"><Link to="#">The Great Post!</Link></h3>
                            <div className="ml-2">
                                <p className="font-roboto">This is the first blog friends. Celebrate !!<br/>
                                <small className="text-muted">20th July, 2020</small></p>
                            </div>

                            <h3 className="font-oswald"><Link to="#">The Great Post!</Link></h3>
                            <div className="ml-2">
                                <p className="font-roboto">This is the first blog friends. Celebrate !!<br/>
                                <small className="text-muted">20th July, 2020</small></p>
                            </div>

                            <h3 className="font-oswald"><Link to="#">The Great Post!</Link></h3>
                            <div className="ml-2">
                                <p className="font-roboto">This is the first blog friends. Celebrate !!<br/>
                                <small className="text-muted">20th July, 2020</small></p>
                            </div>
                        </div>
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