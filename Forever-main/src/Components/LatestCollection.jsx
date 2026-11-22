import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

function LatestCollection() {
  const { products } = useContext(ShopContext);
  const [LatestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="text-xs m-auto w-3/4 sm:text-sm md:text-base text-gray-600">
          Login to get exclusive access to our latest collection. Be the first to shop our new arrivals and enjoy special discounts and offers. Don't miss out on the chance to elevate your style with our latest pieces. Sign up now and unlock a world of fashion at your fingertips!
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {LatestProducts.map((item, index) => (
          <ProductItem
            key={index}
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

export default LatestCollection;
