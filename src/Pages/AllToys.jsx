

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useData from '../Hook/useData';
import CardData from '../components/CardData';

const AllToys = () => {
  const { products } = useData();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
     
    });
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto  max-md:px-3">
      <title>Toy_Market_AllToys</title>
      <div className="py-8 text-center" data-aos="fade-up">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-700">Our All Toys</h2>
        <p className="text-[#627382] max-w-2xl mx-auto">
          Explore all the exciting toys available on our store. Fun, safe, and perfect for kids of all ages!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-6">
        {products.map((product, index) => (
          <div
            key={product.toyId}
            data-aos="zoom-in"
            data-aos-delay={index * 100} 
          >
            <CardData product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
