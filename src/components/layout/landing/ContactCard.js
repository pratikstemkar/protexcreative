import React from 'react';

function ContactCard(){
    return(
        <>
            <h3 className="font-oswald">Contact</h3>
            <div className="ml-3">
                <i class="fa fa-twitter" aria-hidden="true"></i> <a href="https://www.twitter.com/pratikstemkar" className="style-link">@pratikstemkar</a><br />
                <i class="fa fa-instagram" aria-hidden="true"></i> <a href="https://www.instagram.com/pratikstemkar" className="style-link">@pratikstemkar</a><br />
                <i class="fa fa-github" aria-hidden="true"></i> <a href="https://www.github.com/pratikstemkar" className="style-link">@pratikstemkar</a><br />
                <i class="fa fa-linkedin" aria-hidden="true"></i> <a href="https://www.linkedin.com/in/pratikstemkar" className="style-link">@pratikstemkar</a>
            </div>
        </>
    );
}

export default ContactCard;