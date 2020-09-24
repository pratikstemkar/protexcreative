import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

function Footer() {
    return(
        <Fragment>
            <footer className="blog-footer">
            <p>Made with <span role="img">❤️</span> by <Link className="style-link" to="/about">PRATIK</Link>.</p>
            <p>
                <a href="#">Back to top</a>
            </p>
            </footer>
        </Fragment>
    );
}

export default Footer;