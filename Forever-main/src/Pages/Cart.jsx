import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { ShopContext } from '../Context/ShopContext';
import Title from '../Components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../Components/CartTotal'; 

function Cart() {
  const { cartItem, products, currency, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const tempData = [];
    for (const item in cartItem) {
      for (const size in cartItem[item]) {
        if (cartItem[item][size] > 0) {
          tempData.push({
            _id: item,
            size: size,
            quantity: cartItem[item][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItem]);

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      {cartData.map((item) => {
        const productData = products.find((product) => product._id === item._id);

        if (!productData) return null; 

        return (
          <div
            key={`${item._id}-${item.size}`} 
            className='py-4 border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'
          >
            <div className='flex gap-6 items-start'>
              <img
                src={productData?.image?.[0]}
                alt={productData?.name || 'Product Image'} 
                className='w-16 sm:w-20'
              />
              <div className='flex flex-col justify-center'>
                <p className='text-xs sm:text-lg font-medium'>{productData?.name}</p>
                <div className='flex gap-3 items-center mt-2'>
                  <p>{currency}{productData?.price}</p>
                  <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                </div>
              </div>
            </div>

            <input
              type='number'
              defaultValue={item.quantity}
              min={1}
              className='w-16 sm:max-w-20 border max-w-10 px-1 sm:px-2 py-1'
              onChange={(e) => {
                const value = Number(e.target.value);
                if (!value || value <= 0) return;
                updateQuantity(item._id, item.size, value);
              }}
            />

            <img
              src={assets.bin_icon}
              alt='Delete'
              className='w-4 mr-5 sm:w-5 cursor-pointer'
              onClick={() => updateQuantity(item._id, item.size, 0)}
            />
          </div>
        );
      })}

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal /> 
        </div>
      </div>
      <div className='w-full flex justify-end'>
        <button
          onClick={() => navigate('/placeorder')} 
          className='bg-black text-white text-sm my-8 px-8 py-3 rounded'
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;