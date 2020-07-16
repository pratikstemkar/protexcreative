import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return(
        <Fragment>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand font-oswald" to="#">Protex Creative</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/video">Videos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/download">Downloads</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        Writing about everything!
                    </span>
                </div>
            </nav>
        </Fragment>
    );
}

export default Navbar;
