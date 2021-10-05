import Banner from "../Banner/Banner";
import Services from "../Services/Services"
import Slider from "../Slider/Slider";


const Home = () => {
    return (
        <div>
        <Slider></Slider>
        <div className ="container">
        <Services></Services>
        <h1> English Online Education & Courses </h1>
        </div>
        <Banner></Banner>
        </div>
    );
};

export default Home;