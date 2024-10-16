import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Inspire = () => {
    return (
        <div  className='pt-10'>
            <section className="py-10 bg-white sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
                        <div className="relative lg:mb-12">
                            <img
                                className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
                                src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg"
                                alt=""
                            />
                            <div className="pl-12 pr-6">
                                <img
                                    className="relative"
                                    src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/girl-working-on-laptop.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
                                <div className="max-w-xs bg-blue-600 rounded-lg sm:max-w-md xl:max-w-md">
                                    <div className="px-3 py-4 sm:px-5 sm:py-8">
                                        <div className="flex items-start">
                                            <p className="text-3xl sm:text-4xl">👋</p>
                                            <blockquote className="ml-5">
                                                <p className="text-sm font-medium text-white sm:text-lg">
                                                    “You made it so simple. My new site is so much faster and easier to work with than my old site.”
                                                </p>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="2xl:pl-16">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                                Making Something Inspirational.
                            </h2>
                            <p className="text-xl leading-relaxed text-gray-900 mt-9 capitalize">
                                book website is a digital platform designed to provide users with a rich and engaging experience focused on books and literature. It serves as a hub for discovering, browsing, purchasing, and learning about a wide range of books, from bestsellers to niche genres. The website typically features a user-friendly interface that allows visitors to search for books by title, author, genre, or keywords. 
                            </p>
                            <p className="mt-6 text-xl leading-relaxed text-gray-900">
                                It may include detailed book descriptions, reviews, ratings, and recommendations based on user preferences. Additional features might include author interviews, book previews, blogs, and a community section for readers to discuss and share their favorite titles.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Inspire;