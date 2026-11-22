import React from 'react';
import Title from '../Components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../Components/NewsLetterBox';

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        {/* Reduced image dimensions */}
        <img
          className='w-full md:max-w-[360px] sm:max-w-[280px]'
          src={assets.contact_img}
          alt="Contact Us"
        />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>Our Store</p>
          <p className='text-sm text-gray-500'>
            Itwari City Post Office <br /> Nagpur, Maharashtra, India
          </p>
          <p className='text-sm text-gray-500'>
            ph: (703) 815-8027 <br /> Email: rohitbhisikar8@gamil.com
          </p>
          <p className='font-semibold text-lg text-gray-600'>Careers at Forever</p>
          <p className='text-sm text-gray-500'>
            Learn more about our teams and job openings
          </p>
          <button className='hover:bg-black transition-all duration-500 text-sm py-4 px-8 border border-black'>
            Explore More
          </button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default Contact;
