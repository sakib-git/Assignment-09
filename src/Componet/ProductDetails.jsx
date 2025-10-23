import React from 'react';

import {  useParams } from 'react-router';
import useData from '../Hook/useData';


const ProductDetails = () => {
//  const product  = useLoaderData()
//  console.log(product)
const {products} = useData()
console.log(products)
  const { toyId } = useParams();  
  console.log(toyId)   

  return (
    <div className="max-w-4xl mx-auto p-5">
 
    </div>
  );
};

export default ProductDetails;


