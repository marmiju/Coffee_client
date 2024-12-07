import React from 'react';

const Coffee = ({coffee}) => {
    const {name,price,photo,details,supplier} = coffee;
    return (
        <div>
            <div className=" flex rounded bg-[#F5F4F1] text-start ">
                <figure>
                    <img
                        src={photo}
                        alt="car!" />
                </figure>
                <div className="card-body">
                    <h2 className="font-mono text-lg">{'$'+price}</h2>
                    <h2 className="font-mono text-xl">{name}</h2>
                    <h2 className="font-mono text-sm">{supplier}</h2>
                    
                </div>
                <div className='flex'></div>
            </div>
        </div>
    );
};

export default Coffee;