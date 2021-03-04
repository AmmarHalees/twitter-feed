import React from 'react';
import ControlsItem from './components/ControlsItem/ControlsItem';
import styles from './Post.module.css';

const Post = ({id, user, description, title, src, comments }) => {
  return (

    <div className={`tweet ${styles.post}`} name={id}> 

      <div className={`${styles.post_column} ${styles.left}`}>

        <img className={styles.user_image} src={user.src} alt='Dan' />

      </div>

      <div className={`${styles.post_column} ${styles.right}`}>


        <header className={styles.header}>

          <a href='/' className={styles.name}>

            {user.name}

          </a>

          <div className={styles['more-info']}>@DanLouis</div>

          <a href='/' title='another website' className={styles['more-info']}>1h</a>

          <div className={styles.settings} style={{ justifySelf: 'end' }} >

            <ControlsItem type='settings' />


          </div>

        </header>

        <div className={styles.description}>

          {description}
        </div>

        <div className={styles.media}>

         { src ? <img className={styles.post_media} src={src} alt='post' /> : null}
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