import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavigationItem.module.scss';

const NavigationItem = () => {
  return (
    <div>
      <Link className={styles.NavLink} to='/'><span className={styles.NavIcon}><i class="fas fa-home"></i></span><span className={styles.NavText}>Home</span></Link>
      <Link className={styles.NavLink} to='/about'><span className={styles.NavIcon}><i class="fas fa-cookie-bite"></i></span><span className={styles.NavText}>About</span></Link>
      <Link className={styles.NavLink} to='/recipes'><span className={styles.NavIcon}><i class="fas fa-book"></i></span><span className={styles.NavText}>Search Recipes</span></Link>
      <Link className={styles.NavLink} to='/contact'><span className={styles.NavIcon}><i class="fas fa-address-book"></i></span><span className={styles.NavText}>Contact</span></Link>
    </div>
  )
}

export default NavigationItem;
