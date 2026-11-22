import { useEffect, useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from './Title'; // Import your Title component
import ProductItem from './ProductItem'; // Import your ProductItem component

function RelatedProducts({ category, subCategory }) {
  const { products } = useContext(ShopContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0 && category && subCategory) {
      let filtered = products.filter(
        (item) => item.category === category && item.subCategory === subCategory
      );
      setRelatedProducts(filtered.slice(0, 4));
    }
  }, [products, category, subCategory]);

  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {relatedProducts.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
