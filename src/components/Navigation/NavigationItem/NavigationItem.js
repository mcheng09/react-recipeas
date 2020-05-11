import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavigationItem.module.scss';

const NavigationItem = () => {
  return (
    <div>
      <Link className={styles.NavLink} to='/'>Home</Link>
      <Link className={styles.NavLink} to='/about'>About</Link>
      <Link className={styles.NavLink} to='/recipes'>Search Recipe</Link>
    </div>
  )
}

export default NavigationItem;
