import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

function Jumbotron(){
    return(
        <Fragment>
            <div className="jumbotron mt-4">
                <h1 className="display-4 font-oswald">Protex Creative</h1>
                <p className="lead">A place to write whatever you want.</p>
                <hr className="my-4" />
                <p>It uses utility classNamees for typography and spacing to space content out within the larger container.It uses utility classNamees for typography and spacing to space content out within the larger container.It uses utility classNamees for typography and spacing to space content out within the larger container.It uses utility classNamees for typography and spacing to space content out within the larger container.It uses utility classNamees for typography and spacing to space content out within the larger container.It uses utility classNamees for typography and spacing to space content out within the larger container.It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                <Link className="btn btn-primary btn-lg" to="/about" role="button">Know more about me!</Link>
            </div>
        </Fragment>
    );
}

export default Jumbotron;