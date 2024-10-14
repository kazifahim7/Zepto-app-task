import { Outlet } from "react-router-dom";
import Navbar from "../shareComponents/Navbar";
import Footer from "../shareComponents/Footer";


const Mainlayout = () => {
    return (
        <div>
          <div className="lg:absolute w-full">

            <Navbar></Navbar>
          </div>
          <div >

            <Outlet></Outlet>
          </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;