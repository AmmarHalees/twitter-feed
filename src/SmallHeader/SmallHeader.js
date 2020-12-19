import React from 'react';
import ControlsItem from '../Post/components/ControlsItem/ControlsItem';
import styles from './SmallHeader.module.css';
import { useLocation,useHistory } from 'react-router-dom'


const renderTitle = (pathname , history) => {

  switch (true) {

    case (pathname === '/'): return <span>Home</span>;

    case (pathname.includes('/t/')): return <div className={styles.arrowHeader}> <ControlsItem clickHandler={()=>history.push('/')} type='left-arrow' />Tweet</div>;

    default: return '';

  }

}


const SmallHeader = () => {

  const location = useLocation();
  const history = useHistory();

  return (

    <div className={styles.header}>
      {renderTitle(location.pathname , history)}
      <ControlsItem type='settings' />
    </div>

  );
}

export default SmallHeader;