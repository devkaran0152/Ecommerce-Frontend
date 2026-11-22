import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import RelatedProducts from '../Components/RelatedProducts'; // Assuming this is imported

function Product() {
  const { productId } = useParams();
  const { products ,addToCart, } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const currency = '$';
  const assets = {
    star_icon: 'https://cdn-icons-png.flaticon.com/512/616/616489.png', // Use your own image path or emoji fallback
    star_dull_icon: 'https://cdn-icons-png.flaticon.com/512/616/616490.png'
  };

  const fetchProductData = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const data = await response.json();

    // Wrap image into array if it's not already
    const imageArray = Array.isArray(data.image) ? data.image : [data.image];

    setProductData({ ...data, image: imageArray });
    setImage(imageArray[0]);
  };

  useEffect(() => {
    let found = false;
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        found = true;
      }
    });

    if (!found) {
      fetchProductData();
    }
  }, [productId]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity duration-500 opacity-100'>
      {/* product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* product image */}
        <div className='flex-1 flex flex-col-reverse sm:flex-row gap-3'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => (
              <img
                src={item}
                onClick={() => setImage(item)}
                alt={productData.title}
                key={index}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} alt={productData.title} className='w-full h-auto' />
          </div>
        </div>

        {/* product details */}
        <div className='flex-1'>
          <h1 className='text-2xl font-medium mt-2'>{productData.name || productData.title}</h1>
          <div className='flex gap-1 items-center mt-2'>
            <img className='w-3.5' src={assets.star_icon} />
            <img className='w-3.5' src={assets.star_icon} />
            <img className='w-3.5' src={assets.star_icon} />
            <img className='w-3.5' src={assets.star_icon} />
            <img className='w-3.5' src={assets.star_dull_icon} />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes && productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>
  ADD TO CART
</button>

          <hr className='mt-8 sm:w-4/5' />

          <div className='flex flex-col text-gray-500 gap-1 mt-5 text:sm'>
            <p>100% Original product</p>
            <p>Free Delivery on orders above $299</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* description & review section */}
      <div className='mt-20'>
        <div className='flex'>
          <p className='border px-5 py-3 text-sm'>Description</p>
          <p className='border px-5 py-3 text-sm'>Reviews(122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-gray-500'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Quisquam, voluptatibus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
          </p>
        </div>
      </div>

      {/* display related products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className='opacity-0'></div>
  );
}

export default Product;
