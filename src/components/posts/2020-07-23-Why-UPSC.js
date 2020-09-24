import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import { withFirebase } from '../../firebase';

import head from '../../assets/posts/2020-07-23-why-upsc/head.jpg'

const INITIAL_STATE = {
    name: '',
    email: '',
    comment: '',
    error: null,
    loading: false,
    comments: [],
};


class WhyUPSC extends React.Component {

    constructor(props){
        super(props);
        this.state = { ...INITIAL_STATE};
    }

    componentDidMount() {
        this.setState({ loading: true });
        
        this.props.firebase.comments('why-upsc').on('value', snapshot => {
            let commentObject = snapshot.val();
 
            if (commentObject) {
                let commentList = Object.keys(commentObject).map(key => ({
                    ...commentObject[key],
                    uid: key,
                  }));

                  commentList = commentList.reverse();
                  
        
                this.setState({ loading: false, comments: commentList, });
            } else {
                this.setState({ comments: null, loading: false });
            }

            this.setState({ loading: false });
        });
    }
    
    componentWillUnmount() {
        this.props.firebase.comments().off();
    }

    onSubmit = event => {
        const { name, email, comment } = this.state;

        const curTime = new Date().toLocaleString();
        
        this.props.firebase
            .comments('why-upsc').push(
                {
                    name,
                    email,
                    comment,
                    createdAt: curTime,
                }
            ).then(() => {
                this.setState({...INITIAL_STATE});

                this.setState({ loading: true });
        
                this.props.firebase.comments('why-upsc').orderByChild('createdAt').on('value', snapshot => {
                    let commentObject = snapshot.val();
        
                    if (commentObject) {
                        let commentList = Object.keys(commentObject).map(key => ({
                            ...commentObject[key],
                            uid: key,
                        }));

                        commentList = commentList.reverse();
                
                        this.setState({ loading: false, comments: commentList, });
                    } else {
                        this.setState({ comments: null, loading: false });
                    }

                    this.setState({ loading: false });
                });
            }).catch(error => {
                this.setState({ error });
            }); 

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render(){

        const {
            name,
            email,
            comment,
            loading,
            comments,
        } = this.state;

        const inValid = 
            name === '' ||
            email === '' ||
            comment === '';

        return(
            <Fragment>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-9">
    
                            {/* HEADING */}
                            <h1 className="font-oswald">Why I am preparing for UPSC CSE?</h1>
                            {/* DATE */}
                            <small className="text-muted">23rd July, 2020 at <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Pune">Pune, Maharashtra</a></small>
    
                            {/* CONTENT */}
                            <div className="mt-4">
                                <img className="img-fluid rounded" src={head} alt=""/>
                                <footer class="blockquote-footer text-center">
                                    <small>
                                    Some mountain in <cite title="Source Title">Pune</cite>
                                    </small>
                                </footer>
                            </div>
    
                            {/* TEXT */}
                            <div className="mt-3 font-roboto">
                                <p><span className="first-letter">S</span>o, here I am. After cancelling my decision to start a blog for a long time, here I am writing this post. This is the 23th of July, 2020. I have already <mark>started my <abbr title="Union Public Service Commission">UPSC</abbr> preparation</mark>.</p>
    
                                <p>The decision to prepare for this exam was not something that thought about. It was rather impulsive but I don't think the word gives justice to the intent. I mean the decision was not casual as such. It was ... I don't know. It's difficult to explain. So lets not get into the philosophy or my mental state at the time of me deciding for the preparation. Lets just take a look at the events that govern the incidents.</p>
    
                                <p>It was <mark>19th of June, 2020</mark>. I was following my daily routine of not doing anything. The lockdown was extending as ever. The cases were rising. I've stopped watching the news cause now I don't even care(I care). Days have gone of me doing nothing and days are and will be going like that. I am with no scope for future ar anything. I am just into doing nothing. In following this ever demanding routine, I've lost any monotony that I had. Oh, its becoming my description of the quarantine. Lets just cut to the chase. You understand the pretext, right?</p>
    
                                <p>With having nothing to do in quarantine, I had this urge to study. I don't know why but it was something. With the qurantine the online learning platforms were booming. Everywhere you would see the ads of these online learning portals. So, in my quest to learn something new I installed the Unacademy app. (This is <mark>not an endorsement</mark>. REALLY!!) There were a few courses on the app. I have completed 2nd year of undergrad. So, getting a JEE or NEET course was not for me. I took the UPSC CSE course, just the free one. A free live class was happening, I entered it. It was current affairs class. I could not sit for more than 10 minutes as it was difficult to study after not doing anything from 3 months. Unacademy inspired me to prepare for the exam? A big NO!!</p>
    
                                <p>It all started after that. Every app I opened after that, I <mark>saw ads from Unacademy</mark> about <abbr title="Union Public Service Commission">UPSC</abbr> CSE. I even recieved phone calls regarding the same. It was just too much. Something that the Unacademy marketing team should think about. Hijacking potential customer's online activity is no way to promote your product. That could lead to them coming back to your app. Moreover, that continuous pouring of the word <abbr title="Union Public Service Commission">UPSC</abbr> CSE from everywhere led to me thinking about it. I don't know if this is a win for the Unacademy marketing team? </p>
    
                                <p>So at night I wrote about this incident of the ads in a Whatsapp group of my closest friends. One of friend thought I was interested in giving the exam. I, on the other side didn't even know what the exam was about let alone preparing for it. He was willing to give the exam. I just told him to start preparing for it as we were getting into 3rd year of undergrad. The exam was barely 2 years away. My question was seen as an offer to prepare together for the exam. So he said, "Lets prepare".</p>
    
                                <p>That was the moment of decision for me. I had to decide between preparing for the exam and clearing the confusion in our conversation. You know what I chose. So yeah the decision has been made. I am running this marathon. I am preparing for this exam about which I knew nothing. The next step was to read about the exam. There is no use of running a marathon if we don't know how long its going to be.</p>
    
                                <p>My previous knowledge about the exam could be judged from the fact that at that exact moment I thought CSE is a <abbr title="Union Public Service Commission">UPSC</abbr> exam with Computer Science. I <mark>thought CSE stands for Computer Science Engineering</mark>. Knowing the reality came as a shock to me. I thought of thinking about my decision but then I remembered about me deciding to never look back. And yes, I am not going to look back now.</p>
    
                                <p>That was my story of the decision to prepare for <abbr title="Union Public Service Commission">UPSC</abbr> CSE. I know my "why" is not that strong but what can be done. Looking forward I just hope that I come out of this cycle of exam preparation as soon as possible.</p>
    
                            </div>
    
{/* --------------------------------------------------------------------------------------------------------------------------- */}
                            {/* AUTHOR */}
                            <div className="font-roboto mt-4 mb-4">
                                <div className="row">
                                    <div className="col">
                                        <img src={head} alt="" className="rounded-circle author-pic"/>
                                    </div>
                                    <div className="col-11 mt-1">
                                        <Link href="/about" className=" font-oswald">Pratik Temkar</Link><br />
                                        <small className="text-muted">Great Thinker</small> 
                                    </div>
                                </div>
                            </div><hr />
{/* ---------------------------------------------------------------------------------------------------------------------------- */}
    
                            {/* COMMENTS */}
                            <div className="mt-4 mb-4">
                                <h3 className="font-oswald">Comments</h3>
                                <form className="mt-2 ml-4" onSubmit={this.onSubmit}>
                                    <div class="form-group">
                                        <label for="exampleInputName1">Name</label>
                                        <input type="text" class="form-control" id="exampleInputName1" name="name" value={name} onChange={this.onChange} aria-describedby="nameHelp" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control" name="email" value={email} onChange={this.onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputComment1">Comment</label>
                                        <textarea class="form-control" name="comment" value={comment} onChange={this.onChange} rows="6" id="exampleInputComment1" ></textarea>
                                    </div>
                                    <button type="submit" disabled={inValid} class="btn btn-primary">Comment</button>
                                </form>

                                {loading && <div className="mt-4 text-center"><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                                                <span class="sr-only">Loading...</span></div>}

                                {comments.map(commentt => {
                                    return (
                                        <div className="row mt-4">
                                            <div className="col">
                                                <img src={head} alt="" className="rounded-circle author-pic"/>
                                            </div>
                                            <div className="col-11 mt-1">
                                    <strong className="font-oswald">{commentt.name}</strong> <small className="text-muted">at {commentt.createdAt}</small>
                                                <p>{commentt.comment}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                                
                            </div>
{/* --------------------------------------------------------------------------------------------------------------------------- */}
    
                        </div>
    
                        <div className="col-3">
                            <h4 className="font-oswald">Ads</h4>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default withFirebase(WhyUPSC);