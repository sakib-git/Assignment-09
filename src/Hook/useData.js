
import { useEffect, useState } from 'react';
import axios from 'axios';

const useData = () => {
  const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
      setLoading(true);
    axios('../data.json')
      .then(res => setProducts(res.data))
       .catch((error) => error)
      .finally(() => setLoading(false));
  }, []);

  return { products , loading};
};

export default useData;





