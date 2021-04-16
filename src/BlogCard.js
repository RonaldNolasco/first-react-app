import React from 'react'
import { dumpLogs } from './Utils';

// import './BlogCard.css';
import classes from './BlogCard.module.css';

const BlogCard = (props) => {
    // dumpLogs(props);

    // onLikeBtnClick = () => {
    //     this.setState((prevState, prevProp) => {
    //         return { 
    //             likeCount: prevState.likeCount + 1 
    //         }
    //     });
    // }

    
    return (
        <div className={classes.NewBlogCard}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>

            <p>Like Count: <span className={classes.LikeCount}>{props.likeCount}</span></p>
            <button onClick={props.onLikeBtnClick}>Like</button>
        </div>
    )
}

export default BlogCard;