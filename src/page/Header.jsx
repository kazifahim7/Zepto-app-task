import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Header = () => {
    return (
        <div className=" p-14 flex lg:flex-row flex-col-reverse pb-0 bg-center items-center justify-center gap-8 bg-[url(https://kits.moxcreative.com/laautor/wp-content/uploads/sites/7/2021/08/white-wrinkled-paper-background-texture-e1628081582630.jpg)]">
            <div data-aos="fade-right" data-aos-easing="linear"
                data-aos-duration="1000" className="space-y-5 w-full pb-3 lg:p-28 lg:pl-52   mx-auto h-full ">
                <h3 className="text-xs text-main-color text-start">New Release</h3>
                <h1 className="text-5xl lg:text-[80px] font-bold">Before You Say <br /> Goodbye</h1>
                <h2 className="text-black text-xl font-semibold">A Fiction Novel By Thomas Dietrich</h2>

                <button className="text-white bg-main-color p-3">Discover the book</button>

            </div>
            <div data-aos="fade-left" data-aos-easing="linear"
                data-aos-duration="1000" className=" w-full mt-5  ">
                <img src="https://kits.moxcreative.com/laautor/wp-content/uploads/sites/7/2021/08/book_mockup_4.png" alt=""  className=""/>
            </div>

            
        </div>
    );
};

export default Header;