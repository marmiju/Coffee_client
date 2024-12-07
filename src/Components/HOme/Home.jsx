import { useLoaderData, useNavigate } from "react-router-dom";
import Banner from "../Banner/Banner";
import Button from "../Button/Button";
import SubBanner from "../SubBanner/SubBanner";
import Coffee from "../Coffee/Coffee";

const Home = () => {

    const navigate = useNavigate();
    const coffee = useLoaderData();


    const btntogle = () => {
        console.log('btnclicked')
        navigate('/addnew')
    }

    return (
        <div>
            <Banner></Banner>
            <SubBanner></SubBanner>
            <div className="mt-32 text-center text-[#331A15] gap-2">
                <p className="">--- Sip & Savor ---</p>
                <p className="text-4xl">Our Popular Products : {coffee.length}</p>
                <div className="flex justify-center mt-5">
                    <Button onclick={btntogle}>Add New</Button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-96 md:w-[1000px] mx-auto gap-6 mt-10">
                {
                    coffee.map(c => (
                       <Coffee coffee={c}></Coffee>
                    ))
                }
            </div>

        </div>

    );
};

export default Home;