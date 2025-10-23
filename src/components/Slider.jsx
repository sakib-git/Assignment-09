import bannerImg from '../assets/Banner-toy-market.png';
import slide1 from '../assets/slder-01-removebg-preview.png';
import slide2 from '../assets/slide-2.png';
import slide3 from '../assets/creative.png';

const Slider = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full min-h-[500px] flex justify-center">
          <div className="bg-blue-500 w-full max-w-[1400px] flex justify-between items-center text-white p-6 rounded-2xl shadow-lg max-md:flex-col mt-10 mx-auto overflow-visible">
            <div className="space-y-4 max-md:flex max-md:justify-center max-md:flex-col">
              <h1 className="text-3xl md:text-5xl font-bold">Welcome to Toy Market</h1>
              <p className="text-sm md:text-lg">Playful toys • Trusted shop • Fun for kids of all ages</p>
              <button className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-full shadow hover:bg-purple-100 w-max mx-auto">Explore Now</button>
            </div>
            <div className="mt-6 flex justify-center">
              <img src={bannerImg} alt="Space Toys" className="w-full max-w-[550px] rounded-xl" />
            </div>
          </div>
        </div>

        <div id="item2" className="carousel-item w-full min-h-[500px] flex justify-center">
          <div className="bg-violet-500 w-full max-w-[1400px] flex justify-between items-center text-white p-6 rounded-2xl shadow-lg max-md:flex-col mt-10 mx-auto overflow-visible">
            <div className="space-y-4 max-md:flex max-md:justify-center max-md:flex-col">
              <h1 className="text-3xl md:text-5xl font-bold">Explore the Galaxy of Fun Toys</h1>
              <p className="text-sm md:text-lg">Space rockets, alien figures, and cosmic adventures await your kids!</p>
              <button className="bg-white text-purple-600 font-semibold px-5 py-2 rounded-full shadow hover:bg-purple-100 w-max mx-auto">Explore Galaxy</button>
            </div>
            <div className="mt-6 flex justify-center">
              <img src={slide1} alt="Space Toys" className="w-full max-w-[550px] rounded-xl" />
            </div>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full min-h-[500px] flex justify-center">
          <div className="bg-pink-400 w-full max-w-[1440px] mx-auto flex justify-between items-center text-white p-6 rounded-2xl shadow-lg max-md:flex-col mt-10 overflow-visible">
            <div className="space-y-4 max-md:flex max-md:justify-center max-md:flex-col">
              <h1 className="text-3xl md:text-5xl font-bold max-md:text-center">Discover Toys That Spark Creativity</h1>
              <p className="text-sm md:text-lg"> From puzzles to building sets — let your child’s imagination fly high!</p>
              <button className="bg-white text-pink-600 font-semibold px-5 py-2 rounded-full shadow hover:bg-pink-100 w-max mx-auto">Visit Kingdom</button>
            </div>
            <div className="mt-6 flex justify-center">
              <img src={slide3} alt="Princess Toys" className="w-full max-w-[550px] rounded-xl" />
            </div>
          </div>
        </div>
        <div id="item4" className="carousel-item w-full min-h-[500px] flex justify-center">
          <div className="bg-pink-300 w-full max-w-[1440px] mx-auto flex justify-between items-center text-white p-6 rounded-2xl shadow-lg max-md:flex-col mt-10 overflow-visible">
            <div className="space-y-4 max-md:flex max-md:justify-center max-md:flex-col">
              <h1 className="text-3xl md:text-5xl font-bold max-md:text-center">Enter the Magical Toy Kingdom</h1>
              <p className="text-sm md:text-lg">Dolls, castles, and fairy-tale fun — make every moment magical!</p>
              <button className="bg-white text-pink-600 font-semibold px-5 py-2 rounded-full shadow hover:bg-pink-100 w-max mx-auto">Visit Kingdom</button>
            </div>
            <div className="mt-6 flex justify-center">
              <img src={slide2} alt="Princess Toys" className="w-full max-w-[550px] rounded-xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Slider;
