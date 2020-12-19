import React from 'react';
import styles from './ControlsItem.module.css';
import {ReactComponent as LikeIcon} from '../../../assets/logo/heart.svg';
import {ReactComponent as CommentIcon} from '../../../assets/logo/message-circle.svg';
import {ReactComponent as ShareIcon} from '../../../assets/logo/share-2.svg';
import {ReactComponent as RetweetIcon} from '../../../assets/logo/repeat.svg';
import {ReactComponent as SettingsIcon} from '../../../assets/logo/more-horizontal.svg';
import {ReactComponent as TwitterIcon} from '../../../assets/logo/twitter.svg';
import {ReactComponent as LeftArrowIcon} from '../../../assets/logo/arrow-left.svg';

const iconMap = {

    like: <LikeIcon/>,
    comment: <CommentIcon/>,
    share: <ShareIcon/>,
    retweet: <RetweetIcon/>,
    settings: <SettingsIcon/>,
    twitter: <TwitterIcon style={{fill:'white', color:'white', height:'2rem', width:'2rem'}}/>,
    'left-arrow' : <LeftArrowIcon style={{ color:'white', height:'1.3rem', width:'1.3rem'}}/>
}

const ControlsItem = ({ type , clickHandler = () => alert('hi')}) => {
    return (

        <div className={`${styles.post_controls_item} ${styles[type]}`}>

            <button className={styles.post_controls_button} onClick={clickHandler}>

            {iconMap[type]}


            </button>
            {['settings','twitter','left-arrow'].includes(type) ? null :   <div>
                88
            </div>
}
          

        </div>

    );
}

export default ControlsItem;