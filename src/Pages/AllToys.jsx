import React from 'react';
import useData from '../Hook/useData';
import CardData from '../components/CardData';

const AllToys = () => {
  const { products } = useData();
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="py-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold">Our all Toys</h2>
        <p className="text-[#627382]">Explore all the exciting toys available on our store. Fun, safe, and perfect for kids of all ages!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-4">
        {products.map((product) => (
          <CardData key={product.toyId} product={product}></CardData>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
