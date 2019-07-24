import React from 'react';
import Hero from '../globals/Hero';
import homeImg from '../../images/lake-dock.jpg';

const Header = () => {
  return (
    <Hero img={homeImg}>
      <h1>Hello World</h1>
    </Hero>
  )
}

export default Header;