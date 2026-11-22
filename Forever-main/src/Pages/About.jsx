import React from 'react';
import Title from '../Components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../Components/NewsLetterBox';

const About = () => {
  return (
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'} />

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="About Us" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p className='text-sm'>
            At Forever Clothing we’re passionate about creating seamless and engaging shopping experiences. Our platform combines modern design, intuitive navigation, and high-quality products to bring our customers the convenience and satisfaction they deserve. We believe shopping should be simple, enjoyable, and personalized — which is why we focus on offering well-curated collections and user-friendly features that make finding what you love easier than ever.
          </p>
          <p className='text-sm'>
            Built with the latest web technologies, our e-commerce platform is not just visually appealing but also fast, secure, and scalable. We’re continuously working to improve and expand our services, keeping user needs at the heart of everything we do. Whether you're here to discover the perfect product or just browsing, we’re here to make your journey smooth, memorable, and worth coming back for.
          </p>
          <b className='text-gray-800'>Our mission</b>
          <p className='text-sm'>
            Our mission is to deliver more than just products — we deliver satisfaction. With secure payment gateways, fast shipping, and easy returns, we ensure a hassle-free experience from start to finish. Customer trust is at the core of our values, and we constantly strive to exceed expectations through innovation, transparency, and top-notch service. Thank you for choosing us — we’re excited to be a part of your shopping journey.
          </p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600 text-sm'>
            We prioritize quality at every step — from premium fabric selection to final stitching. Each product undergoes strict checks to ensure durability, comfort, and style. Our commitment is to deliver clothing that not only looks good but feels great and lasts longer.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600 text-sm'>
            Shopping with us is simple, fast, and hassle-free. From intuitive navigation to secure checkout, we’ve designed every step for your ease. Enjoy doorstep delivery, easy returns, and 24/7 support — all tailored for your comfort.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600 text-sm'>
            Your satisfaction is our top priority. Our support team is always ready to assist you with quick responses, easy resolutions, and a friendly approach. We’re here to make your shopping experience smooth, reliable, and enjoyable.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
