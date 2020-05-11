import React from 'react';

import styles from './Navigation.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const Navigation = () => {
  return (
    <div className={styles.Navigation}>
      <div className={styles.NavLogo}>RE</div>
      <NavigationItem />
    </div>
  )
}

export default Navigation;
