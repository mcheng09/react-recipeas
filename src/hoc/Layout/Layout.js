import React from 'react';

import Aux from './../Aux/Aux'
import Navigation from './../../components/Navigation/Navigation'

import styles from './Layout.module.scss'

function Layout(props) {
  return (
    <div className={styles.Main}>
      <Navigation />
      <main>
        {props.children}
      </main>
    </div>
  )
}

export default Layout;
