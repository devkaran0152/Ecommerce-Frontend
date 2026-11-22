import React from 'react';

function NewsLetterBox() {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        if (email) {
            alert(`Thank you for subscribing with ${email}`);
        } else {
            alert('Please enter a valid email address');
        }
    };

    return (
        <div className='text-center'>
            <p className='text-sm font-medium text-gray-800'>
                Subscribe now and get 10% off your first order
            </p>
            <p className='text-sm text-gray-400 mt-3'>
                Sign up for our newsletter to stay updated on the latest news and special offers. Don't miss out on exclusive discounts and promotions. Join our community today and be the first to know about our new arrivals and special events.
            </p>
            <form
                onSubmit={onSubmitHandler}
                className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'
            >
                <input
                    className='w-full sm:flex-1 outline-none'
                    type='email'
                    placeholder='Enter your email'
                />
                <button
                    type='submit'
                    className='bg-black text-white text-xs px-10 py-4'
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
}

export default NewsLetterBox;
