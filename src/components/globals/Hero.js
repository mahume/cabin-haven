import styled from 'styled-components';
import homeImg from '../../images/lake-dock.jpg';
import { setFlex } from '../../styles';

const Hero = styled.header`
  min-height: 100vh;
  background: center/cover fixed no-repeat url(${homeImg});
  ${setFlex()};
`

export default Hero;