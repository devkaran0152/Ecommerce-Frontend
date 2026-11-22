import React from 'react';

function Title({ text1, text2 }) {
  return (
    <div className='inline-flex items-center gap-2 mb-3'>
      <p className='text-gray-500'>
        {text1}{' '}
        <span className='text-gray-800 font-semibold'>
          {text2}
        </span>
      </p>
      <div className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></div>
    </div>
  );
}

export default Title;
