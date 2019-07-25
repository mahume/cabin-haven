import React from 'react';
import Hero from '../globals/Hero';
import homeImg from '../../images/lake-dock.jpg';
import Banner from '../globals/Banner';
import { PrimaryBtn } from '../globals/Buttons';

const Header = () => {
  return (
    <Hero img={homeImg}>
      <Banner 
        greeting='Welcome to'
        title='Cabin Haven'
        text='Enter description here'
      >
        <PrimaryBtn t='1rem'>
          View Details
        </PrimaryBtn>
      </Banner>
    </Hero>
  )
}

export default Header;