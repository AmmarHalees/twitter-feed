import React from 'react';
import ControlsItem from '../Post/components/ControlsItem/ControlsItem';
import styles from "./Header.module.css";

const Header = () => {
    return ( 

        <header>

        <div className={styles.header}>

          <nav>

            <ControlsItem type='twitter'/>

          </nav>


        </div>

      </header>

     );
}
 
export default Header;