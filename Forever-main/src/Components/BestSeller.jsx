import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

function BestSeller() {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        if (products && products.length > 0) {
            const bestProduct = products.filter((item) => item.bestSeller);
            setBestSeller(bestProduct.slice(0, 5));
        }
    }, [products]); // Added dependency to re-run when products change

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='text-xs m-auto w-3/4 sm:text-sm md:text-base text-gray-600'>
                    "We don't just sell products; we deliver value, trust, and satisfaction every single time."
                </p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {bestSeller.length > 0 ? (
                    bestSeller.map((item) => (
                        <ProductItem
                            key={item._id} // Use a unique key
                            id={item._id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                        />
                    ))
                ) : (
                    <p className='col-span-full text-center text-gray-500'>
                        No best sellers available at the moment.
                    </p>
                )}
            </div>
        </div>
    );
}

export default BestSeller;
