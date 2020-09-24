import React, {Fragment} from 'react';

const TechSkills = () => {
    return(
        <Fragment>
            <div className="col">
                <h1 className="font-oswald">Technical Skills</h1>
                <div className="ml-2">
                    <h6 className="font-roboto">Languages: </h6><p className="lead ml-4">C++, Java, JavaScript, Python, Go, Ruby</p>
                    <h6 className="font-roboto">Frameworks: </h6><p className="lead ml-4">ReactJS, Django, Gatsby, Jekyll, Flask</p>
                </div>
            </div>
        </Fragment>
    );
}

export default TechSkills;