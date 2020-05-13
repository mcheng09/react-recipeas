import React from 'react';

import Aux from './../Aux/Aux'
import Navigation from './../../components/Navigation/Navigation'

import styles from './Layout.module.scss'

function Layout(props) {
  return (
    <div className={styles.Main}>
      <Navigation />
      <div className={styles.Container}>
        {props.children}
      </div>
    </div>
  )
}

export default Layout;
