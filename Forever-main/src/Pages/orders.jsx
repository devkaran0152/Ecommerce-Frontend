import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from '../Components/Title';

const Orders = () => {
  const { products, currency = '$' } = useContext(ShopContext);

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
      <div>
        {products && products.length > 0 ? (
          products.slice(0, 4).map((item) => (
            <div
              key={item._id || item.name} // Ensure a unique key
              className='flex text-gray-700 md:flex-row md:items-center md:justify-between gap-4 flex-col border-b py-4'
            >
              <div className='flex items-start gap-6 text-sm'>
                <img
                  className='w-16 sm:w-20'
                  src={item.image?.[0] || 'placeholder.jpg'} // Fallback for missing image
                  alt={item.name || 'Product Image'}
                />
                <div>
                  <p className='sm:text-base font-medium'>{item.name || 'Unnamed Product'}</p>
                  <div className='flex gap-3 mt-2 text-base items-center text-gray-500'>
                    <p className='text-lg'>
                      {currency} {item.price || '0.00'}
                    </p>
                    <p>Quantity: {item.quantity || 1}</p>
                    <p>Size: {item.size || 'M'}</p>
                  </div>
                  <p className='mt-2'>
                    Date: <span className='text-gray-500'>{item.date || 'N/A'}</span>
                  </p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'>{item.status || 'Ready to ship'}</p>
                </div>
                <button className='border px-4 py-2 text-sm font-medium rounded-sm'>
                  Track Order
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className='text-gray-500'>No orders available.</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
