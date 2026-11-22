import React, { useContext } from 'react';
import Title from '../Components/Title';
import CartTotal from '../Components/CartTotal';
import { assets } from '../assets/assets'; // Corrected import path
import { ShopContext } from '../Context/ShopContext';

const PlaceOrder = () => {
  const [method, setMethod] = React.useState('cod');
  const { navigate } = useContext(ShopContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Order placed successfully!');
    navigate('/orders');
  };

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Left side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

        <div className='sm:text-2xl my-3 text-xl'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          {/* Full Name */}
          <div className='flex flex-col gap-2'>
            <label htmlFor='firstName'>First Name</label>
            <input
              type='text'
              id='firstName'
              placeholder='First Name'
              className='border border-gray-300 px-3.5 w-full py-1.5'
              required
              aria-label='First Name'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='lastName'>Last Name</label>
            <input
              type='text'
              id='lastName'
              placeholder='Last Name'
              className='border border-gray-300 px-3.5 w-full py-1.5'
              required
              aria-label='Last Name'
            />
          </div>

          {/* Email */}
          <div className='flex flex-col gap-2'>
            <label htmlFor='email'>Email Address</label>
            <input
              type='email'
              id='email'
              placeholder='E-mail Address'
              className='border px-2 py-1'
              required
              aria-label='Email Address'
            />
          </div>

          {/* Address */}
          <div className='flex flex-col gap-2'>
            <label htmlFor='street'>Street</label>
            <input
              type='text'
              id='street'
              placeholder='Street'
              className='border border-gray-300 px-3.5 w-full py-1.5'
              required
              aria-label='Street'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='city'>City</label>
            <input
              type='text'
              id='city'
              placeholder='City'
              className='border border-gray-300 px-3.5 w-full py-1.5'
              required
              aria-label='City'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='state'>State</label>
            <input
              type='text'
              id='state'
              placeholder='State'
              className='border border-gray-300 px-3.5 w-full py-1.5'
              required
              aria-label='State'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='pinCode'>Pin Code</label>
            <input
              type='number'
              id='pinCode'
              placeholder='Pin Code'
              className='border border-gray-300 px-3.5 w-full py-1.5'
              required
              aria-label='Pin Code'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='country'>Country</label>
            <input
              type='text'
              id='country'
              placeholder='Country'
              className='border border-gray-300 px-3.5 w-full py-1.5'
              required
              aria-label='Country'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='contactNumber'>Contact Number</label>
            <input
              type='number'
              id='contactNumber'
              placeholder='Contact Number'
              className='border border-gray-300 px-3.5 w-full py-1.5'
              required
              aria-label='Contact Number'
            />
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='bg-black text-white px-16 py-2 mt-4'
          >
            Place Order
          </button>
        </form>
      </div>

      {/* Right Side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80' />
        <CartTotal />

        {/* Payment Method Section */}
        <div className='mt-8'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6'>
            {/* Stripe Payment */}
            <div
              onClick={() => setMethod('stripe')}
              className={`flex items-center gap-4 border p-4 rounded-lg cursor-pointer ${
                method === 'stripe' ? 'border-green-500 bg-green-50' : 'border-gray-300'
              }`}
            >
              <div
                className={`w-5 h-5 border rounded-full flex items-center justify-center ${
                  method === 'stripe' ? 'bg-green-500' : ''
                }`}
              >
                {method === 'stripe' && <div className='w-2.5 h-2.5 bg-white rounded-full'></div>}
              </div>
              <img
                className='h-6'
                src={assets.stripe_logo}
                alt='Stripe'
              />
              <p className='text-sm font-medium'>Pay with Stripe</p>
            </div>

            {/* Razorpay Payment */}
            <div
              onClick={() => setMethod('razorpay')}
              className={`flex items-center gap-4 border p-4 rounded-lg cursor-pointer ${
                method === 'razorpay' ? 'border-green-500 bg-green-50' : 'border-gray-300'
              }`}
            >
              <div
                className={`w-5 h-5 border rounded-full flex items-center justify-center ${
                  method === 'razorpay' ? 'bg-green-500' : ''
                }`}
              >
                {method === 'razorpay' && <div className='w-2.5 h-2.5 bg-white rounded-full'></div>}
              </div>
              <img
                className='h-6'
                src={assets.razorpay_logo}
                alt='Razorpay'
              />
              <p className='text-sm font-medium'>Pay with Razorpay</p>
            </div>

            {/* Cash on Delivery */}
            <div
              onClick={() => setMethod('cod')}
              className={`flex items-center gap-4 border p-4 rounded-lg cursor-pointer ${
                method === 'cod' ? 'border-green-500 bg-green-50' : 'border-gray-300'
              }`}
            >
              <div
                className={`w-5 h-5 border rounded-full flex items-center justify-center ${
                  method === 'cod' ? 'bg-green-500' : ''
                }`}
              >
                {method === 'cod' && <div className='w-2.5 h-2.5 bg-white rounded-full'></div>}
              </div>
              <p className='text-sm font-medium'>Cash on Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
