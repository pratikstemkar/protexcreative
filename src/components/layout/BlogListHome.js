import React, {Fragment} from 'react';

function BlogListHome() {
    return(
        <Fragment>
            <h1 className="heading font-oswald">Blogs</h1>
            <div className="mt-4 ml-3 font-roboto">
                <h3 className="font-oswald"><a href="#">The Great Post!</a></h3>
                <div className="ml-2">
                    <p className="font-roboto">This is the first blog friends. Celebrate !!<br/>
                    <small className="text-muted">20th July, 2020</small></p>
                </div>

                <h3 className="font-oswald"><a href="#">The Great adasdasd asfas Post!</a></h3>
                <div className="ml-2">
                    <p className="font-roboto">This is the first blog friends. Celebrate !!<br/>
                    <small className="text-muted">20th July, 2020</small></p>
                </div>

                <h3 className="font-oswald"><a href="#">The Great Post!</a></h3>
                <div className="ml-2">
                    <p className="font-roboto">This is the first blog friends. Celebrate !!<br/>
                    <small className="text-muted">20th July, 2020</small></p>
                </div>

                <h3 className="font-oswald"><a href="#">The Great Post!</a></h3>
                <div className="ml-2">
                    <p className="font-roboto">This is the first blog friends. Celebrate !!<br/>
                    <small className="text-muted">20th July, 2020</small></p>
                </div>
            </div>
        </Fragment>
    );
}

export default BlogListHome;