import React from 'react';
import Input from '../Input/Input';
import { useNavigate } from 'react-router-dom';

const Cproduct = () => {
    const navigate = useNavigate();
    const goback = () => {
        navigate(-1);
    }
    return (
        <div className='mt-20 w-[400px] md:w-[800px] mx-auto '>
            <button className='p-4' onClick={goback}>← GO back</button>
            <div className='bg-[#F4F3F0] grid grid-cols-1 justify-center text-center p-6 mx-auto text-[#331A15]'>
                <h1 className='text-2xl font-bold'>Add New Coffee</h1>
                <p>It is a long established fact<br />
                    that a reader will be distraceted by the readable content of a page when looking at its layout.
                    <br />The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using Content here.</p>
                <form>
                    <div className='grid grid-cols-1 md:grid-cols-2 mt-10 w-full gap-4'>
                        <Input label={'name'} type={'input'} name={'name'} palceholder={'Enter Coffee Name'} ></Input>
                        <Input label={'chefe'} type={'input'} name={'chefe'} palceholder={'Enter checf Name'} ></Input>
                        <Input label={'Supplier'} type={'input'} name={'Supplier'} palceholder={'Enter Coffee Supplier'} ></Input>
                        <Input label={'Taste'} type={'input'} name={'Taste'} palceholder={'Enter Coffee Taste'} ></Input>
                        <Input label={'Category'} type={'input'} name={'Category'} palceholder={'Enter Coffee Category'} ></Input> 
                        <Input label={'Details'} type={'input'} name={'Details'} palceholder={'Enter Coffee Details'}></Input> 
                    </div>
                        <Input label={'Photo URL'} type={'input'} name={'photo'} palceholder={'Enter photo Link'}></Input> 
                        <Input type={'Submit'} palceholder={'Submit'} onclick={()=>{alert('clicked')}}></Input> 

                </form>
            </div>

        </div>


    );
};

export default Cproduct;