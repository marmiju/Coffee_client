import Input from '../Input/Input';
import { data, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const Cproduct = () => {
    const navigate = useNavigate();
    const goback = () => {
        navigate('/');
    }

    const submit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        const form = event.target;

        const name = form.name.value;
        const price = form.price.value;
        const supplier = form.Supplier.value;
        const taste = form.Taste.value;
        const category = form.Category.value;
        const details = form.Details.value;
        const photo = form.photo.value;

        //create coffee Object
        const newcoffee = { name,price,supplier,taste,category,details,photo}

        if(!name || !price || !supplier || !taste || !category || !details || !photo){
                Swal.fire({
                    title: "Unfield ditected",
                    text: "Please fill All field",
                    icon: "info"
                  })
            
            return ;
        }  
        fetch('http://localhost:5000/coffee',{
            method : 'POST',
            headers :{
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newcoffee)
        })
        .then((res)=>res.json())
        .then(data =>{
            if(data.acknowledged){
                Swal.fire({
                    title: "Success",
                    text: "Coffee Added Succesfully",
                    icon: "success"
                })
            }
        });
    
    };
    return (
        <div className='mt-20 w-[400px] md:w-[800px] mx-auto mb-96'>
            <button className='p-4' onClick={goback}>← GO back home</button>
            <div className='bg-[#F4F3F0] grid grid-cols-1 justify-center text-center p-6 mx-auto text-[#331A15]'>
                <h1 className='text-2xl font-bold'>Add New Coffee</h1>
                <p>It is a long established fact<br />
                    that a reader will be distraceted by the readable content of a page when looking at its layout.
                    <br />The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using Content here.</p>
                <form onSubmit={submit}>
                    <div className='grid grid-cols-1 md:grid-cols-2 mt-10 w-full gap-4'>
                        <Input label={'name'} type={'input'} name={'name'} palceholder={'Enter Coffee Name'} ></Input>
                        <Input label={'price'} type={'input'} name={'price'} palceholder={'Enter checf Name'} ></Input>
                        <Input label={'Supplier'} type={'input'} name={'Supplier'} palceholder={'Enter Coffee Supplier'} ></Input>
                        <Input label={'Taste'} type={'input'} name={'Taste'} palceholder={'Enter Coffee Taste'} ></Input>
                        <Input label={'Category'} type={'input'} name={'Category'} palceholder={'Enter Coffee Category'} ></Input> 
                        <Input label={'Details'} type={'input'} name={'Details'} palceholder={'Enter Coffee Details'}></Input> 
                    </div>
                        <Input label={'Photo URL'} type={'input'} name={'photo'} palceholder={'Enter photo Link'}></Input> 
                        <button type='submit' className='text-xl border bg-[#D2B48C] w-full mt-5 py-2 rounded-md'>Submit</button>

                </form>
            </div>

        </div>


    );
};

export default Cproduct;