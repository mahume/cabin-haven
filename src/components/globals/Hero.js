import styled from 'styled-components';
import homeImg from '../../images/lake-dock.jpg';

const Hero = styled.header`
  min-height: 100vh;
  background: center / cover fixed no-repeat url(${homeImg});
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Hero;