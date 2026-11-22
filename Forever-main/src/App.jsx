import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Page components
import Home from './Pages/Home';
import Collection from './Pages/Collection';
import Cart from './Pages/Cart';
import PlaceOrder from './Pages/PlaceOrder';
import Product from './Pages/Product';
import Review from './Pages/Review';
import About from './Pages/About';
import Login from './Pages/Login';
import Contact from './Pages/Contact';
import Orders from './Pages/orders';

// Shared components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Searchbar from './Components/SearchBar';

function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Navbar */}
      <Navbar />

      {/* Searchbar */}
      <Searchbar />

      {/* Routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/product/:productId/review' element={<Review />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/placeorder' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
