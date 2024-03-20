import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);
    return (
        <div className="container mx-auto px-4 pt-10 text-center">
            <Header></Header>
            {
                navigation === "loading" ? <p>Loading..</p>: 
            <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;