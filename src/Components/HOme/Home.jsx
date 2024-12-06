import { useNavigate } from "react-router-dom";
import Banner from "../Banner/Banner";

const Home = () => {

    const navigate = useNavigate();

    const btntogle = () => {
        navigate('/addnew')
    }

    return (
        <div className="banner bg-banner grid justify-center items-center w-full h-[700px] text-white">

            <div className="w-[600px] mx-auto ml-[100px]">
            <p className="text-2xl">Would you like a Cup of Delicious Coffee?</p>
            <p className="text-sm text-gray-400">It's coffee time - Sip & Savor - Relaxation in every sip!<br></br> Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            </div>

        </div>
    );
};

export default Home;