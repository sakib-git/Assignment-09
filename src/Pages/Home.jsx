import React from 'react';
import Banner from '../Componet/Banner';
import Slider from '../Componet/Slider';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
<div className='flex flex-col'>
        <Slider></Slider>
     <h2> Home page</h2>
</div>
    </div>
  );
};

export default Home;