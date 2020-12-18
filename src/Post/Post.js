import React from 'react';
import ControlsItem from './components/ControlsItem/ControlsItem';
import styles from './Post.module.css';

const Post = () => {
  return (

    <div className={styles.post}>

      <div className={`${styles.post_column} ${styles.left}`}>

        <img className={styles.user_image} src='https://pbs.twimg.com/profile_images/1085298427662077952/G7pyO36A_400x400.jpg' alt='Dan' />

      </div>

      <div className={`${styles.post_column} ${styles.right}`}>


        <header className={styles.header}>

          <a href='/' className={styles.name}>

            Dan Louis

          </a>

          <div className={styles['more-info']}>@DanLouis</div>

          <a href='/' title='another website' className={styles['more-info']}>1h</a>

          <div className={styles.settings} style={{ justifySelf: 'end' }} >

            <ControlsItem type='settings' />


          </div>

        </header>

        <div className={styles.description}>

          From Willie Mays to Mamie Johnson, the players and teams in the Negro Leagues changed the game of baseball and paved the way for so many today. Glad to see the
          @MLB
          officially recognize them as major leaguers.
        </div>

        <div className={styles.media}>

          <img className={styles.post_media} src='https://pbs.twimg.com/media/EpdT5xvXYAEybqv?format=jpg&name=medium' alt='post' />

        </div>

        <div className={styles.post_controls}>

          <ControlsItem type='comment' />
          <ControlsItem type='retweet' />
          <ControlsItem type='like' />
          <ControlsItem type='share' />

        </div>


      </div>

    </div>
  );
}

export default Post;