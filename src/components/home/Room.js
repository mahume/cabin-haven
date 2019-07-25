import React from 'react';
import { SmallBtn } from '../globals/Buttons';
import styled from 'styled-components';
import { setRem, setLeterSpacing, setTransition, setColor, setShadow, setBorder } from '../../styles';
import PropTypes from 'prop-types';

const Room = ({ className, room }) => {
  const { img = '', title = '', info = '', price = 0 } = room;
  return (
    <article className={className}>
      <div className="img-container">
        <img src={img} alt={title} />
        <div className="price">{price}</div>
      </div>
      <div className="room">
        <h4>{title}</h4>
        <p>{info}</p>
        <SmallBtn>Hello World</SmallBtn>
      </div>
    </article>
  )
}

export default styled(Room)``;

Room.propTypes = {
  room: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })
}