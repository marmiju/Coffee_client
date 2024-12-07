import React from 'react';

const Action = ({src,onclick}) => {
    return (
        <div>
            <button onClick={onclick}><img className='w-8 mr-2' src={src} alt="" /></button>
        </div>
    );
};

export default Action;