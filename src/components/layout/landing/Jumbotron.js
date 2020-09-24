import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

function Jumbotron(){
    return(
        <Fragment>
            <div className="jumbotron mt-4">
                <h1 className="display-4 font-oswald">Protex Creative</h1>
                <p className="lead">A place to write whatever you want.</p>
                <hr className="my-4" />
                <p>Hey everyone! This website is a collection of my thoughts. Just random thoughts dropped on the pages. Enjoy!!</p>
                <Link className="btn btn-primary btn-lg" to="/about" role="button">Know more about me!</Link>
            </div>
        </Fragment>
    );
}

export default Jumbotron;