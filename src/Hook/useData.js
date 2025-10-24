import { useEffect, useState } from 'react';
import axios from 'axios';

const useData = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios('../data.json')
      .then((res) => setProducts(res.data))
      .catch((error) => error)
  }, []);

  return { products };
};

export default useData;
