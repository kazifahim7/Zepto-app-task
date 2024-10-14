import { useState } from "react";
import { IoSearch } from "react-icons/io5";


const MainSection = () => {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <div className="container mx-auto">
            <h6 className="text-center text-main-color text-xs">New Arrival</h6>
            <h1 className="text-4xl text-center font-extrabold pt-4">Latest Book Release</h1>
           <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center">
                <div className='lg:w-1/2 mx-auto relative mt-10'>
                    <input type='text' placeholder='Search...'
                        className='border border-[#e5eaf2] py-3 pl-4 pr-[65px] outline-none w-full rounded-md' />

                    <span
                        className='bg-gray-300 text-gray-500 absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-gray-400 group'><IoSearch
                            className='text-[1.3rem]  group-hover:text-gray-200' /></span>
                </div>
                <div className="lg:w-1/2 mx-auto mt-3">
                    <ul className="flex items-center bg-[#59bdf738] rounded-full p-1 relative">
                        <div
                            className={`${(activeTab === 1 && "translate-x-[0px]") ||
                                (activeTab === 2 && "translate-x-[90px]") ||
                                (activeTab === 3 && "translate-x-[186px]") 
                                
                                } !bg-main-color absolute !text-[#fff] h-[85%] w-[95px] transition duration-700 rounded-full border-transparent cursor-pointer`}
                        ></div>
                        <li
                            className={`${activeTab === 1 && " !text-[#fff]"
                                } px-6 py-2  text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
                            onClick={() => setActiveTab(1)}
                        >
                            Home
                        </li>
                        <li
                            className={`${activeTab === 2 && " !text-[#fff]"
                                } px-6 py-2  text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
                            onClick={() => setActiveTab(2)}
                        >
                            About
                        </li>
                        <li
                            className={`${activeTab === 3 && " !text-[#fff]"
                                } px-1 py-2  text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
                            onClick={() => setActiveTab(3)}
                        >
                            Support
                        </li>
                    </ul>

                </div>
           </div>
            
        </div>
    );
};

export default MainSection;