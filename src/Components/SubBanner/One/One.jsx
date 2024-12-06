import React from 'react';

const One = ({ src,titile,desc }) => {
  return (
    <div className='flex justify-center p-10 text-[#331A15]'>
      <div>
        <figure>
          <img className='w-10'
            src={src}
            alt={titile} />
        </figure>
        <div className="w-[200px]">
          <h2 className="text-2xl pt-6">{titile}</h2>
          <p>{desc}</p>

        </div>
      </div>
    </div>
  );
};

export default One;