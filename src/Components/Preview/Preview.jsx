import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Preview = () => {
  const coffee = useLoaderData();
  const navigate = useNavigate();
  function goback (){
    navigate('/');
  }

  return (
    <div className='w-96 md:w-[1000px] mx-auto grid grid-cols-1 justify-center items-center  mt-20'>
       <button  className='p-4 text-start' onClick={goback}>← GO back home</button>
      <div className="shadow-sm flex  bg-[#F4F3F0] px-5 md:px-32 rounded justify-center">
        <figure>
          <img
            src={coffee.photo} // Dynamically display the photo
            alt={coffee.name} // Add a meaningful alt text
          />
        </figure>
        <div className="card-body">
          <h2 className="text-4xl">{coffee.name}</h2> 
          <h2 className="text-2xl">{coffee.category}</h2> 
          <h2 className="text-xl">{coffee.taste}</h2> 
          <p>{coffee.details}</p> 
          <p className="font-bold">Supplier: {coffee.supplier}</p>
          <h3 className="text-lg font-semibold">Price: ${coffee.price}</h3>
         
        </div>
      </div>
    </div>
  );
};

export default Preview;
