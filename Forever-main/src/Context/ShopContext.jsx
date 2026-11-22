import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = '$';
  const delivery_Fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState({});
  const navigate = useNavigate(); // Use useNavigate hook

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error('Select product size');
      return;
    }

    const cartData = structuredClone(cartItem);

    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }

    if (cartData[itemId][size]) {
      cartData[itemId][size] += 1;
    } else {
      cartData[itemId][size] = 1;
    }

    setCartItem(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItem) {
      const sizes = cartItem[itemId];
      for (const size in sizes) {
        if (sizes[size] > 0) {
          totalCount += sizes[size];
        }
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    const cartData = structuredClone(cartItem);

    if (cartData[itemId] && cartData[itemId][size] !== undefined) {
      if (quantity > 0) {
        cartData[itemId][size] = quantity;
      } else {
        delete cartData[itemId][size];
        if (Object.keys(cartData[itemId]).length === 0) {
          delete cartData[itemId];
        }
      }
      setCartItem(cartData);
    }
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItem) {
      const sizes = cartItem[itemId];
      let itemInfo = products.find((product) => product._id === itemId); // Use itemId instead of items
      for (const size in sizes) { // Loop through sizes
        try {
          if (sizes[size] > 0) {
            totalAmount += itemInfo.price * sizes[size];
          }
        } catch (error) {
          console.error('Error calculating cart amount:', error);
        }
      }
    }
    return totalAmount + delivery_Fee;
  };

  const value = {
    products,
    currency,
    delivery_Fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate, // Pass navigate function here
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
