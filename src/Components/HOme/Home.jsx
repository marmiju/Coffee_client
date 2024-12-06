import { useNavigate } from "react-router-dom";
import Banner from "../Banner/Banner";
import Button from "../Button/Button";
import SubBanner from "../SubBanner/SubBanner";

const Home = () => {

    const navigate = useNavigate();

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
                <p className="text-4xl">Our Popular Products</p>
                <div className="flex justify-center mt-5">
                <Button onclick={btntogle}>Add New</Button>
                </div>
            </div>
        </div>

    );
};

export default Home;