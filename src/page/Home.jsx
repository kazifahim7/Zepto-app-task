import About from "./About";
import Company from "./Company";
import Connect from "./Connect";
import Feedback from "./Feedback";
import Header from "./Header";
import Inspire from "./Inspire";
import MainSection from "./MainSection";
import Price from "./Price";


const Home = () => {
    return (
        <div className="">
        <Header></Header>
        <About></About>
        <MainSection></MainSection>
        <Inspire></Inspire>
        <Feedback></Feedback>
        <Company></Company>
            <Connect></Connect>
            <Price></Price>

        </div>
    );
};

export default Home;