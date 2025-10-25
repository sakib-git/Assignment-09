
import { Link, NavLink, useLoaderData, useParams } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Details = () => {
  const { toyId } = useParams();
  const data = useLoaderData();

  const finds = data.find((d) => d.toyId == toyId);
  const { toyName, pictureURL, price, rating, availableQuantity, sellerName, sellerEmail, description, subCategory } = finds;

  return (
    <div className='max-md:px-3'>
  
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 my-5 ">
          <img src={pictureURL} alt={toyName} className="w-full h-96 object-cover" />
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-3">{toyName}</h2>
            <p className="text-lg text-gray-500 mb-3">{subCategory}</p>
            <p className="text-gray-700 mb-5">{description}</p>
            <div className="flex justify-between items-center mb-5">
              <span className="font-bold text-2xl text-blue-600">${price}</span>
              <span className="bg-yellow-400 text-white px-3 py-1 rounded-xl text-lg">⭐ {rating}</span>
            </div>
            <p className="text-gray-600 text-lg mb-3">Available: {availableQuantity}</p>
            <div className="border-t border-gray-200 mt-5 pt-5">
              <p className="text-gray-800 font-semibold text-lg">Seller: {sellerName}</p>
              <p className="text-gray-500 text-md">{sellerEmail}</p>
            </div>
          </div>
        <form  className="grid grid-cols-1 md:grid-cols-2  gap-6 p-8 ">
            <div className="flex flex-col">
              <label className="text-gray-600 mb-2">Name</label>
              <input type="text"  name="name" placeholder="Enter your Name" className="input px-4 py-2 rounded-lg border text-black focus:outline  " />
            </div>
             <div className="flex flex-col">
              <label className="text-gray-600 mb-2">Email</label>
              <input  type="email" name="email" placeholder="Email" className="input px-4 py-2 rounded-lg border text-black focus:outline  " />
            </div>
            
             <button type='submit' className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600  font-medium text-[12px] outline text-center max-md:w-max">Try Now</button>
  
            </form>
        </div>
       
   
    </div>
  );
};

export default Details;
