import { NavLink } from "react-router-dom";
import  "./navbar.css";


const Navbar = () => {
    return (
        <div className="container mx-auto pt-2 ">
            <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 items-center">
                <div className="mx-auto lg:mx-0">
                    <img src="https://kits.moxcreative.com/laautor/wp-content/uploads/sites/7/elementor/thumbs/logo_laautor-pazl39u1xnbkmmuyfkn5l5u9sl3jsa1gyeqoh6lji8.png" alt=""  />
                </div>

                <div className="mx-auto space-x-8">
                    <NavLink
                        to="/"
                        className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                        activeClassName="text-blue-600"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/wishlist"
                        className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                        activeClassName="text-blue-600"
                    >
                       wishlist
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                        activeClassName="text-blue-600"
                    >
                        Contact us
                    </NavLink>

                </div>


                <div className="mx-auto space-x-6 lg:pt-0 pt-3">
                    <NavLink
                        to="/signUp"
                        className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                        activeClassName="text-blue-600"
                    >
                        Sign up
                    </NavLink>

                    <NavLink
                        to="/signIn"
                        className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                        activeClassName="text-blue-600"
                    >
                        Sign in
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
