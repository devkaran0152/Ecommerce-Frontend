import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
    to={`/product/${id}`}
    className="text-gray-700 cursor-pointer"
    tabIndex={0}
    aria-label={`View details for ${name}`}
  >
      <div className='overflow-hidden rounded-md'>
        <img
          src={image[0]}
          alt={name}
          className='hover:scale-110 transition ease-in-out duration-300'
        />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
