import React from 'react';
import Slide1 from '../assets/slide-2-removebg-preview.png'
import Slide2 from '../assets/slide-3-removebg-preview.png'
import Slide3 from '../assets/slide-4-removebg-preview (1).png'
import Slide4 from '../assets/slide-4-removebg-preview.png'

const Slider = () => {
  return (
<div className="carousel max-w-[500px] ">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={Slide1}
     />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={Slide2}
       />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img className='w-[300px] h-[250px]'
      src={Slide3}
       />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={Slide4}
      className='w-full'
  />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  );
};

export default Slider;