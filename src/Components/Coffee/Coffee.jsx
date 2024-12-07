import React from 'react';
import Action from '../Action/Action';
import { data, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffee = ({coffee}) => {
    const {_id,name,price,photo,supplier} = coffee;
    const id = _id;

    const navigate = useNavigate();

    const deleteItem = async () => {
    
        const respons= await fetch(`http://localhost:5000/coffee/${id}`,{
            method:'DELETE'
        })

        const coffee = respons.json();
        console.log(coffee);
        


      };

    const handlepreview= ()=>{
       navigate(`/coffee/${id}`);
    }
    const handledelete=()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
               deleteItem();   
            }
          });
    }
    return (
        <div>
            <div className=" flex rounded-xl  border-yellow-500 text-startshadow-sm bg-[#f5f4f1d2] text-[#1B1A1A] h-[200px] items-center">
                <figure>
                    <img className='h-[150px]'
                        src={photo}
                        alt="car!" />
                </figure>
                <div className="card-body">
                    <h2 className="font-mono text-lg">{'$'+price}</h2>
                    <h2 className="font-mono text-xl">{name}</h2>
                    <h2 className="font-mono text-sm">{supplier}</h2>
                    
                <div className='flex mt-2'>
                    <Action onclick={handlepreview} src={"/src/assets/images/action/preview.png"}></Action>
                    <Action  src={"/src/assets/images/action/edit.png"}></Action>
                    <Action onclick={handledelete} src={"/src/assets/images/action/delete.png"}></Action>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Coffee;