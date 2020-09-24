import head from '../../../assets/posts/2020-07-23-why-upsc/head.jpg';
import React, {Fragment} from 'react';

const CommentList = ({comments}) => {
    comments.map(commentt => {
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
    })
}

export default CommentList;