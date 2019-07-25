import React, { Fragment } from 'react';
import Header from '../components/home/Header';
import Aboout from '../components/home/About';
import Rooms from '../components/home/Rooms';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Aboout />
      <Rooms />
    </Fragment>
  )
}

export default Home;