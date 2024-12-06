import React from 'react';
import Input from '../Input/Input';

const Cproduct = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <Input type={'input'} label={'Enter Coffee Name'}></Input>
        </div>
    );
};

export default Cproduct;