import React from 'react';
import { assets } from '../assets/assets';

function Footer() {
    return (
        <div>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-13 my-10 mt-40 text-sm">
                {/* Logo & Description */}
                <div>
                    <img src={assets.logo} alt="Logo" className="mb-5 w-32" />
                    <p className="w-full md:w-2/3 text-gray-600">
                        Welcome to our online store! We are dedicated to providing you with the best shopping experience possible. Our team is committed to offering high-quality products and exceptional customer service. Thank you for choosing us for your shopping needs.
                    </p>
                </div>

                {/* Company Links */}
                <div>
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                    
                    {/* Contact Links */}
                <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1">
            <li className="hover:text-black cursor-pointer">+91-748803269</li>
            <li className="hover:text-black cursor-pointer">karankabir2002@gmail.com</li>
          </ul>
        </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025@ Forever.com - All Right Reserved</p>
            </div>
        </div>
    );
}

export default Footer;
