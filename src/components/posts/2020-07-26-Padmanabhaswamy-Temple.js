import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import { withFirebase } from '../../firebase';

import head from '../../assets/posts/2020-07-20-First-Blog/head.jpg';


const INITIAL_STATE = {
    name: '',
    email: '',
    comment: '',
    error: null,
    loading: false,
    comments: [],
};



class PadmanabhaswamyTemple extends React.Component {
    constructor(props){
        super(props);
        this.state = { ...INITIAL_STATE};
    }

    componentDidMount() {
        this.setState({ loading: true });
        
        this.props.firebase.comments('padmanabhaswamy-temple').on('value', snapshot => {
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
            .comments('padmanabhaswamy-temple').push(
                {
                    name,
                    email,
                    comment,
                    createdAt: curTime,
                }
            ).then(() => {
                this.setState({...INITIAL_STATE});

                this.setState({ loading: true });
        
                this.props.firebase.comments('padmanabhaswamy-temple').orderByChild('createdAt').on('value', snapshot => {
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
                            <h1 className="font-oswald">Padmanabhaswamy Temple</h1>
                            {/* DATE */}
                            <small className="text-muted">26th July, 2020 at <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Pune">Pune, Maharashtra</a></small>
    
                            {/* HEADING IMAGE */}
                            <div className="mt-4 text-center">
                                <img className="img-fluid rounded" src={head} alt=""/>
                                <footer class="blockquote-footer text-center">
                                    <small>
                                    Somewhere in <cite title="Source Title">Sri Ganganagar, Rajasthan</cite>
                                    </small>
                                </footer>
                            </div>
    
                            {/* CONTENT */}
                            <div className="mt-4 font-roboto">
                                <p><span className="first-letter">T</span>his is a temple in Travancore in Kerala. It is a very popular religious establishment. It is recently being discussed in the newspapers because of the honourable Supreme Court decision on the control of the Temple management. I am somehow giving my thoughts on the decision based on limited information I have gained from reading The Hindu.</p>

                                <p>The ruling family that is guarding the temple were actually hated by the people of Thiruvananthapuram. The reason being the cruel and rigorous exercise of their powers. There was no one that saw the rulers as someone they like. The rulers have invaded the place and established themselves as the rulers. The Padmanabhaswamy Temple was critical to the ruling of the kingdom.</p>

                                <p>So, to establish themselves as the rulers for a long term and for people to like them, the ruler took a weird path. He decided to surrender all his wealth to the temple. While this move may be seen as something sort of religious but there definitely was a political goal. This sommehow made the ruler equivalent to The Pope.</p>

                                <p>The court decided to </p>
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

export default withFirebase(PadmanabhaswamyTemple);