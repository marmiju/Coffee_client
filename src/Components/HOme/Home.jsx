import { useLoaderData, useNavigate } from "react-router-dom";
import Banner from "../Banner/Banner";
import Button from "../Button/Button";
import SubBanner from "../SubBanner/SubBanner";
import Coffee from "../Coffee/Coffee";

const Home = () => {
    const navigate = useNavigate();
    const coffee = useLoaderData();

    const btntogle = () => {
        console.log('btnclicked');
        navigate('/addnew');
    };

    return (
        <div>
            <Banner />
            <SubBanner />
            <div className="mt-32 text-center text-[#331A15] gap-2">
                <p className="">--- Sip & Savor ---</p>
                <p className="text-4xl">Our Popular Products : {coffee.length}</p>
                <div className="flex justify-center mt-5">
                    <Button onclick={btntogle}>Add New</Button>
                </div>
            </div>
            
            {/* Parent Container with `relative` */}
            <div className="w-full relative">
                {/* Background Images */}
                <img className="absolute top-3 left-0 z-10" src="/src/assets/images/more/4.png" alt="Decorative Image 1" />
                <img className="absolute top-52 right-0 z-20" src="/src/assets/images/more/5.png" alt="Decorative Image 2" />

                {/* Coffee Products Section */}
                <div className="w-80 md:w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 relative z-30">
                    {coffee.map(c => (
                        <Coffee coffee={c} key={c.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
