import React from 'react';
import styled from 'styled-components';
import Section from '../globals/Section';
import Title from '../globals/Title';
import aboutImg from '../../images/lake-boats.jpg';
import { setRem, setBorder, setColor, setLetterSpacing, media } from '../../styles';
import { PrimaryBtn } from '../globals/Button';

const About = () => {
  return (
    <Section>
      <AboutCenter>
        <div className="about-img">
          <img src={aboutImg} alt="Lake Cabin in Mountains"/>
        </div>
        <div className="about-info">
          <Title title='About Us' />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, a adipisci. Sed dolorum molestiae sapiente doloremque sint vitae consequatur alias minus cupiditate, quisquam neque quae, id incidunt. Tempore, earum ipsam!</p>
          <PrimaryBtn>Read More</PrimaryBtn>
        </div>
      </AboutCenter>
    </Section>
  )
}

const AboutCenter = styled.div``

export default About;