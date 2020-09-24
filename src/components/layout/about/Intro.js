import React, {Fragment} from 'react';

const Intro = () => {
    return(
        <Fragment>
            <div className="col">
                <img src="https://picsum.photos/id/237/200/300"  alt="" className="about-dp rounded-circle shadow mb-5 bg-white rounded" />
            </div>
            <div className="col-9 mt-5">
                <h3 className="font-oswald">Pratik Temkar</h3>
                <p className="font-roboto">B.E. Computer Science</p>
                <a className="btn btn-twitter btn-sm" href="/">Twitter</a>
                <a className="btn btn-instagram btn-sm ml-2" href="/">Instagram</a>
                <a className="btn btn-github btn-sm ml-2" href="/">GitHub</a>
            </div>
        </Fragment>
    );
}

export default Intro;