import React from 'react';
import Hero from '../globals/Hero';
import homeImg from '../../images/lake-dock.jpg';
import Banner from '../globals/Banner';

const Header = () => {
  return (
    <Hero img={homeImg}>
      <Banner 
        greeting='Welcome to'
        title='cabin'
        text='Enter description here'
      />
    </Hero>
  )
}

export default Header;