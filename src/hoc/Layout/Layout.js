import React from 'react';

import Aux from './../Aux/Aux'
import Navigation from './../../components/Navigation/Navigation'
import RecipeContainer from './../../containers/RecipeContainer/RecipeContainer'

function Layout(props) {
  return (
    <Aux>
      <Navigation />
      <RecipeContainer />
    </Aux>
  )
}

export default Layout;
