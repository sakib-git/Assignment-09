import React from 'react';
import { NavLink } from 'react-router';

const CardData = ({product}) => {
  
  const {toyName,pictureURL,price,rating,availableQuantity, toyId} = product


  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden m-3 border border-gray-100 mx-auto w-full">
      <img
        src={pictureURL}
        alt={toyName}
        className="w-full h-56 object-cover"
      />
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{toyName}</h2>
        <p className="text-gray-600 mb-2">
          💰 Price: <span className="font-semibold">${price}</span>
        </p>
        <p className="text-gray-600 mb-2">
          ⭐ Rating: <span className="font-semibold">{rating}</span>
        </p>
        <p className="text-gray-600">
          📦 Available: <span className="font-semibold">{availableQuantity}</span>
        </p>
        <NavLink
          to={`/toyDetails/${toyId}`}
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold transition block text-center"
        >
          View Details
        </NavLink>
      </div>
    </div>
  );
};

export default CardData;