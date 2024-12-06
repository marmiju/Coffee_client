import { useNavigate } from "react-router-dom";
import Banner from "../Banner/Banner";

const Home = () => {

    const navigate = useNavigate();

    const btntogle = () => {
        navigate('/addnew')
    }

    return (
        
            <Banner></Banner>
        
    );
};

export default Home;