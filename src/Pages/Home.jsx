
import Banner from '../Componet/Banner';
import Slider from '../Componet/Slider';
import CardData from '../Componet/CardData';
import { NavLink } from 'react-router';
import useData from '../Hook/useData';

const Home = () => {
  const {products} = useData()
  // console.log(products)
  const someData = products.slice(0, 8)

  
 
  return (
    <div >
      <Banner></Banner>
<div className='flex flex-col'>
        <Slider></Slider>
     <div className='max-w-[1440px] mx-auto'>
      <h1 className='text-7xl font-bold text-center py-5 max-md:text-4xl'>Trending Toys</h1>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto'>
        {
        someData.map(product => <CardData key={product.toyId} product={product}></CardData>)
      }

  </div>
<div className="flex justify-center mt-6">
  <NavLink 
    to="/alltoys" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
    Show All
  </NavLink>
</div>

     </div>
</div>
    </div>
  );
};

export default Home;