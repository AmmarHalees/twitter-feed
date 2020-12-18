import React from 'react';
import ControlsItem from '../Post/components/ControlsItem/ControlsItem.js';
import Post from '../Post/Post.js'
import styles from './Feed.module.css';



const Feed = () => {
    return (

        <div className={styles.feed}>

          <div className={styles.header}>
            <span>Home</span>
            <ControlsItem type='settings' />

          </div>

          <Post/>
          <Post/>
          <Post/>
          <Post/>

        </div>

      );
}
 
export default Feed;