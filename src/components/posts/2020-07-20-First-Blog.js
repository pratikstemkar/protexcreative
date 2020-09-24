import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import { withFirebase } from '../../firebase';

import head from '../../assets/posts/2020-07-20-First-Blog/head.jpg';

import CommentList from '../layout/blog/CommentList';

const INITIAL_STATE = {
    name: '',
    email: '',
    comment: '',
    error: null,
    loading: false,
    comments: [],
};



class FirstBlog extends React.Component {
    constructor(props){
        super(props);
        this.state = { ...INITIAL_STATE};
    }

    componentDidMount() {
        this.setState({ loading: true });
        
        this.props.firebase.comments('the-start').on('value', snapshot => {
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
            .comments('the-start').push(
                {
                    name,
                    email,
                    comment,
                    createdAt: curTime,
                }
            ).then(() => {
                this.setState({...INITIAL_STATE});

                this.setState({ loading: true });
        
                this.props.firebase.comments('the-start').orderByChild('createdAt').on('value', snapshot => {
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
                            <h1 className="font-oswald">The Start!</h1>
                            {/* DATE */}
                            <small className="text-muted">20th July, 2020 at <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Pune">Pune, Maharashtra</a></small>
    
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
                                <p><span className="first-letter">T</span>his is how the start looks. Hope I remember this for long. Hope that I follow this practice for sometime. Hope I do not forget about this writing like every other thing in life. Hope I do not get bored by this.</p>
    
                                <p>That is exactly what I think whenever I start something new. That's why I have a lot of memories reagarding "start", not great ones tough. So, I tend to forget about them sooner or later. I think this is the reason that I do not remember the "Start".</p>
    
                                <p>Starts are important. History is important. That is what has been taught to me in the endless expedition of knowledge and more importantly grades. In this so-called quest for good grades, I've forgotten a lot of things. Things that I once thought were memorable and I would forget everything but not them. But as time passed I forgot everything.</p>
    
                                <p><b>I forgot my friends.</b> There once was a time when there were people that I knew were inseparable from me. Yeah , there once was such time. Now when I think about it, I can hardly remember anyone's face. Its been a long time. I've lived in lot of cities. Thus studying in a lot of schools and having a lot of friends. But not for long. Everytime I was at a point that I had enough friends, it was time to move. Initially I used to get sad and irritated. It felt as if all my hardwork was in vain. Making friends was not at a work then, but it certainly is now. But after a few transfers, I stopped caring about the move. This didn't mean that I was not getting close to anyone. It just meant that I had accepted my fate. I am ready to move anywhere and starting off again. Every end is in the direction of a new "START".</p>
    
                                <p><b>I forgot what I studied.</b> History was one of my favourite subjects growing up. I am an Engineering Undergrad. For people wondering why I did not choose a History major, I have no answer. I never thought about it would be the best way to put it out. So, back to talking about History. I loved reading History textbooks as I thought they were story books, important story books. There was a story in there, there was a conclusion. A conclusion that taught us what we should be looking ahead in future. It was all good. But I don't remember anything. Currently, we are living in an atmosphere where people are trying to change the History. I stand in no position to explain how, but it is happening slowly and carefully. No one is free of evils of their own nature. All of us make mistakes. By just highlighting the mistakes of the historical figures to get people to think they are bad is not in good interest of the society. By doing that, we are doing away with all the good that they were involved in. I am not asking to hide their bad but judging them only on that dark side is no fair judgement.</p>
    
                                <p>Looking back in time really makes us believe we are just the wrongs that we've committed. We are in no position to believe so. We should not confine ourselves into believing that. Getting a knowledge of the past makes us have an optimistic outlook to our future.</p>
                                
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

export default withFirebase(FirstBlog);