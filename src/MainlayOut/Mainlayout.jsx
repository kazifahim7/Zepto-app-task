import { Outlet } from "react-router-dom";
import Navbar from "../shareComponents/Navbar";
import Footer from "../shareComponents/Footer";


const Mainlayout = () => {
    return (
        <div>
          <div className="">

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