import styled from 'styled-components';
import { setColor, setRem, setLetterSpacing, setFont, setBorder, setTransition } from '../../styles'

export const PrimaryBtn = styled.button`
  display: inline-block;
  background: ${setColor.primaryColor};
  color: ${setColor.mainWhite};
  text-transform: capitalize;
  font-size: ${setRem(18)};
  font-family: ${setFont.main};
  padding: ${setRem(17)} ${setRem(36)};
  border: ${setBorder({ color: setColor.primaryColor })};
  letter-spacing: ${setLetterSpacing(3)};
  transition: ${setTransition()};
  &:hover {
    background: transparent;
    color: ${setColor.primaryColor};
  }
  margin: ${props => `${props.t || 0} ${props.r || 0} ${props.b || 0} ${props.l || 0}`};
  text-decoration: none;
  cursor: pointer;
`

export const SmallBtn = styled(PrimaryBtn)`
  padding: ${setRem(9)} ${setRem(12)};
`