import React from 'react';
import styles from './ControlsItem.module.css';
import {ReactComponent as LikeIcon} from '../../../assets/logo/heart.svg';
import {ReactComponent as CommentIcon} from '../../../assets/logo/message-circle.svg';
import {ReactComponent as ShareIcon} from '../../../assets/logo/share-2.svg';
import {ReactComponent as RetweetIcon} from '../../../assets/logo/repeat.svg';
import {ReactComponent as SettingsIcon} from '../../../assets/logo/more-horizontal.svg';

const iconMap = {

    like: <LikeIcon/>,
    comment: <CommentIcon/>,
    share: <ShareIcon/>,
    retweet: <RetweetIcon/>,
    settings: <SettingsIcon/>


}

const ControlsItem = ({ type }) => {
    return (

        <div className={`${styles.post_controls_item} ${styles[type]}`}>

            <button className={styles.post_controls_button} onClick={() => alert('hi')}>

            {iconMap[type]}


            </button>
            {type === 'settings' ? null :   <div>
                88
            </div>
}
          

        </div>

    );
}

export default ControlsItem;