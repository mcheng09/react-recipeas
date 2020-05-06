import React from 'react';
import { Link } from 'react-router-dom';

const NavigationItem = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/recipes'>Search Recipe</Link>
    </div>
  )
}

export default NavigationItem;
