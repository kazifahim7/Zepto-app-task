
import { IoBookSharp } from "react-icons/io5";

import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { GiStarSattelites } from "react-icons/gi";

import NumberCounter from 'number-counter';




const About = () => {
    return (
        <div className="py-24">

            <div className="flex items-center justify-center flex-col">
                <img src="https://kits.moxcreative.com/laautor/wp-content/uploads/sites/7/2021/08/leaves_3.png" alt="" className="w-28"/>
                <h1 className="text-main-color text-center text-xs ">About Laautor</h1>
                <h1 className="text-5xl font-bold text-center pt-5">Dedicated Excellence in <br /> Publishing.</h1>
            </div>

            <div className="mx-auto mt-8 container grid grid-cols-1 md:grid-cols-3 gap-5 lg:grid-cols-3 items-center justify-center">
                <div className="flex gap-4 items-center rounded-md w-full border justify-center p-10">
                    <div>
                        <IoBookSharp  className="text-4xl text-main-color"/>
                    </div>
                    <div>
                        <NumberCounter postFix="+" end={47} delay={5} className="text-5xl font-bold">47M+</NumberCounter>
                        <p className="text-xs text-black">Book Publish</p>
                    </div>

                </div>
                <div className="flex gap-4 items-center w-full border rounded-md justify-center p-10">
                    <div>
                        <GiStarSattelites  className="text-5xl text-main-color"/>
                    </div>
                    <div>
                        <NumberCounter postFix="%" end={100} delay={5} className="text-4xl font-bold">100%</NumberCounter>
                        <p className="text-xs text-black">Clients Satisfaction</p>
                    </div>

                </div>
                <div className="flex gap-4 items-center rounded-md w-full border justify-center p-10">
                    <div>
                        <BsGlobeEuropeAfrica className="text-5xl text-main-color"/>
                    </div>
                    <div>
                        <NumberCounter postFix="+" end={37} delay={5} className="text-4xl font-bold">37+</NumberCounter>
                        <p className="text-xs text-black">Book Translate</p>
                    </div>

                </div>
               
            </div>

            
            
        </div>
    );
};

export default About;