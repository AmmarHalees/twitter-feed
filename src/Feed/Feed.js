import React from 'react';
import Post from '../Post/Post.js';
import styles from './Feed.module.css';
import postdata from "../data/posts.json";
import {Link} from 'react-router-dom';


const Feed = () => {

    return (

        <>
          {postdata.data.map(({id, user, description, title, src, comments })=><Link key={id} className={styles.postLink}  to={`/t/${id}`}><Post id={id} user={user} description={description} title={title} src={src} comments={comments} /></Link>)}
        </>

      );
}
 
export default Feed;