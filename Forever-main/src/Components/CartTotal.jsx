import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';

const CartTotal = () => {
    const { currency = '$', delivery_Fee = 0, getCartAmount } = useContext(ShopContext); // Provide default values
    const subtotal = getCartAmount ? getCartAmount() : 0; // Ensure getCartAmount is called safely

    return (
        <div className='w-full'>
            <div className='text-2xl'>
                <Title text1={'CART'} text2={'TOTAL'} />
            </div>
            <div className='flex flex-col gap-2 mt-2 text-sm'>
                <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p>{currency} {subtotal.toFixed(2)}</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Delivery Amount</p>
                    <p>{currency} {delivery_Fee.toFixed(2)}</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <b>Total</b>
                    <b>{currency} {(subtotal + delivery_Fee).toFixed(2)}</b>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;
