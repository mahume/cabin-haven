import React from 'react';
import styled from 'styled-components';
import { setRem, setFont, setLetterSpacing } from '../../styles';

const Title = ({ className, title, center }) => {
  return (
    <h3 className={className}>
      {title}
    </h3>
  )
}

export default styled(Title)`
  font-size: ${setRem(36)};
  text-transform: capitalize;
  letter-spacing: ${setLetterSpacing(5)};
  font-family: ${setFont.main};
  text-align: ${props => props.center ? 'center' : 'left'};
`;