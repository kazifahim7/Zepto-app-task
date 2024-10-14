
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Connect = () => {
    return (
        <div data-aos="fade-down" data-aos-offset="500"
            data-aos-duration="500">
            <section className="pt-10 pb-8 overflow-hidden bg-gray-100 sm:pt-16 lg:pt-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                            Connect with All Apps
                        </h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
                            Discover seamless integrations with various applications to enhance your productivity and streamline your workflow. Our platform connects effortlessly with tools you already use, making your processes more efficient and cohesive.
                        </p>
                        <a
                            href="/"
                            title=""
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 transition-all duration-200 border-2 border-gray-200 rounded-md mt-9 bg-main-color text-white"
                            role="button"
                        >
                            Check All Apps
                        </a>
                    </div>
                </div>

                <img
                    className="w-full min-w-full mx-auto mt-12 scale-150 max-w-7xl lg:min-w-0 lg:mt-0 lg:scale-100"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/1/services-icons.png"
                    alt="Integration services icons"
                />
            </section>

            
        </div>
    );
};

export default Connect;