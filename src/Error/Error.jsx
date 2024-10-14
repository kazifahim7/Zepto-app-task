import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex lg:flex-row items-center justify-center pt-24 container mx-auto">
            <div>
                <img src="https://kits.moxcreative.com/laautor/wp-content/uploads/sites/7/2021/08/leaves_2.png" alt="" />
            </div>

            <div className="border-l-2 pl-8">
                <h1 className="text-[100px] font-extrabold">404</h1>
                <h3 className="text-2xl font-bold pb-2">Page not found</h3>
                <p>The page you are looking for does not exist; it may have been moved, <br /> or removed altogether.</p>
                <Link to={'/'}> <button className="p-4 text-white bg-[#CC3333] mt-2">Back home</button></Link>
            </div>
            
        </div>
    );
};

export default Error;