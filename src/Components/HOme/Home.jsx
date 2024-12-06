import { useNavigate } from "react-router-dom";
import Banner from "../Banner/Banner";
import Button from "../Button/Button";
import SubBanner from "../SubBanner/SubBanner";

const Home = () => {

    const navigate = useNavigate();

    const btntogle = () => {
        navigate('/addnew')
    }

    return (
        <div>
            <Banner></Banner> 
            <SubBanner></SubBanner>
            <div className="grid justify-center mt-10">
                <Button>Add New</Button>
            </div>

        </div>
        
    );
};

export default Home;