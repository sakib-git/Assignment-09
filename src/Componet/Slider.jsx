import React from 'react';
import Slide1 from '../assets/slide-2-removebg-preview.png'
import Slide2 from '../assets/slide-3-removebg-preview.png'
import Slide3 from '../assets/Helicopter_Police.png'
import Slide4 from '../assets/720-chad_valley_mini_helicopter-.png'
import Slide5 from '../assets/slide-40-removebg-preview.png'


const Slider = () => {
  return (
    <div className='bg-black w-full flex justify-center py-2'>
<div className="carousel max-w-[800px]">
  <div id="slide1" className="carousel-item relative w-full ">
    <img className='mx-auto'
      src={Slide1}
     />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img className='mx-auto'
      src={Slide2}
       />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img className='w-[400px] h-[350px] mx-auto mt-10'
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
      className='w-full mx-auto'
  />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
 

</div>
</div>
  );
};

export default Slider;