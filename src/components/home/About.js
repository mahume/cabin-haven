import React from 'react';
import styled from 'styled-components';
import Section from '../globals/Section';
import Title from '../globals/Title';
import aboutImg from '../../images/lake-boats.jpg';
import { setRem, setBorder, setColor, setLetterSpacing, media } from '../../styles';
import { PrimaryBtn } from '../globals/Buttons';

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

const AboutCenter = styled.div`
  .about-img, .about-info {
    padding: ${setRem(30)};
  }
  .about-img {
    img {
      width: 100%;
      display: block;
      border: ${setBorder({ width: setRem(6), color: setColor.primaryColor })};
    }
  }
  .about-info {
    p {
      letter-spacing: ${setLetterSpacing(3)};
    }
  }
  width: 90vw;
  margin: 0 auto;
  ${media.large`
    .about-img, .about-info {
      padding: ${setRem(30)};
    }
    width: 100vw;
    max-width: 1170px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${setRem(32)};
    .about-img {
      align-self: center;
    }
    .about-info {
      p {
        width: 80%;
      }
    }
  `}
`

export default About;