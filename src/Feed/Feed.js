import React from 'react';
import ControlsItem from '../Post/components/ControlsItem/ControlsItem.js';
import Post from '../Post/Post.js'
import styles from './Feed.module.css';
import postdata from "../data/posts.json";



const Feed = () => {

  console.log(postdata)
    return (

        <div className={styles.feed}>

          <div className={styles.header}>
            <span>Home</span>
            <ControlsItem type='settings' />

          </div>

          {postdata.data.map(({id, user, description, title, src, comments })=><Post key={id} id={id} user={user} description={description} title={title} src={src} comments={comments} />)}

        </div>

      );
}
 
export default Feed;