import { useEffect, useRef, useState } from "react";
import { IoSearch, IoBookmarkOutline } from "react-icons/io5";
import { IoIosCloudDownload } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";

const MainSection = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [topic, setTopic] = useState("children");
    const searchRef = useRef();
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [text, setText] = useState('');
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(8);

  
    useEffect(() => {
        setLoading(true);
        fetch(`https://gutendex.com/books/?search=${text}&topic=${topic}`)
            .then((res) => res.json())
            .then((data) => {
                if (data?.results) {
                    setDatas(data.results);
                }
                setLoading(false);
            });
    }, [text, topic]);

   
    useEffect(() => {
        if (activeTab === 1) {
            setTopic("children");
        } else if (activeTab === 2) {
            setTopic("love");
        } else if (activeTab === 3) {
            setTopic("movie");
        }
    }, [activeTab]);

    const handleNext = () => {
        if (to < datas.length) {
            setFrom(from + 8);
            setTo(to + 8);
        } else {
            setFrom(0);
            setTo(8);
        }
    };

    const handlePrv = () => {
        if (from > 0) {
            setFrom(from - 8);
            setTo(to - 8);
        }
    };

    const getMark = () => {
        const mark = localStorage.getItem("bookMark");
        if (mark) {
            return JSON.parse(mark);
        } else {
            return [];
        }
    };

    const setWishList = (id) => {
        const mark = getMark();
        const exists = mark.find((item) => item === id);
        if (!exists) {
            mark.push(id);
            localStorage.setItem("bookMark", JSON.stringify(mark));
            toast.success('Successfully added!');
        } else {
            toast.error("Already added.");
        }
    };

    const handleClick = () => {
        setText(searchRef.current.value);
    };

    return (
        <div className="container mx-auto">
            <h6 className="text-center text-main-color text-xs">New Arrival</h6>
            <h1 className="text-4xl text-center font-extrabold pt-4">Latest Book Release</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center">
                <div className="lg:w-1/2 mx-auto relative mt-10">
                    <input
                        ref={searchRef}
                        type="text"
                        placeholder="Search..."
                        className="border border-[#e5eaf2] py-3 pl-4 pr-[65px] outline-none w-full rounded-md"
                    />
                    <span
                        onClick={handleClick}
                        className="bg-gray-300 text-gray-500 absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-gray-400 group"
                    >
                        <IoSearch className="text-[1.3rem] group-hover:text-gray-200" />
                    </span>
                </div>
                <div className="lg:w-1/2 mx-auto mt-3">
                    <ul className="flex items-center bg-[#59bdf738] rounded-full p-1 relative">
                        <div
                            className={`${(activeTab === 1 && "translate-x-[0px]") ||
                                (activeTab === 2 && "translate-x-[90px]") ||
                                (activeTab === 3 && "translate-x-[186px]")} !bg-main-color absolute !text-[#fff] h-[85%] w-[95px] transition duration-700 rounded-full border-transparent cursor-pointer`}
                        ></div>
                        <li
                            className={`${activeTab === 1 && "!text-[#fff]"} px-3 py-2 text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
                            onClick={() => setActiveTab(1)}
                        >
                            Children
                        </li>
                        <li
                            className={`${activeTab === 2 && "!text-[#fff]"} px-6 py-2 text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
                            onClick={() => setActiveTab(2)}
                        >
                            Love
                        </li>
                        <li
                            className={`${activeTab === 3 && "!text-[#fff]"} px-1 py-2 text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
                            onClick={() => setActiveTab(3)}
                        >
                            Movie
                        </li>
                    </ul>
                </div>
            </div>

            {/* dynamic data here */}
            {loading && (
                <div className="text-4xl animate-pulse text-center font-bold mt-10">
                    Loading.....
                </div>
            )}

            <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {datas?.slice(from, to).map((item) => (
                    <div key={item.id} className="bg-white rounded-md shadow-md w-full">
                        <img
                            src={item.formats["image/jpeg"]}
                            alt="image"
                            className="mx-auto p-5 h-[260px]"
                        />

                        <div className="p-4 relative">
                            <div className="rounded-xl w-[100px] py-3 bg-white absolute -top-9 right-6 boxShadow flex items-center flex-col justify-center">
                                <b className="text-[1.4rem] leading-[1.4rem]">
                                    <IoIosCloudDownload />
                                </b>
                                <span className="text-[1rem]">{item?.download_count}</span>
                            </div>

                            <p className="text-[1rem] text-gray-300 mt-6">Performance</p>
                            <h1 className="text-[22px] font-bold text-black leading-[28px] mt-1.5">
                                {item?.title.slice(0, 30)}
                            </h1>
                            <h2>Writer: {item?.authors[0]?.name}</h2>

                            <div className="mt-5 flex items-center gap-[10px]">
                                <span
                                    onClick={() => setWishList(item.id)}
                                    className="w-[40px] cursor-pointer h-[40px] rounded-full border border-[#959393] flex items-center justify-center"
                                >
                                    <IoBookmarkOutline className="text-[#959393]" />
                                </span>
                                <Link to={`/book/${item?.id}`}>
                                    <span className="w-[40px] cursor-pointer h-[40px] rounded-full border border-[#959393] flex items-center justify-center">
                                        <FaRegEye className="text-[#959393]" />
                                    </span>
                                </Link>
                            </div>
                            <Toaster />
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination controls */}
            {loading || (
                <div className="flex items-center justify-center gap-4">
                    <button onClick={handlePrv} className="bg-main-color text-white p-5">
                        <FaArrowLeftLong />
                    </button>
                    <button onClick={handleNext} className="bg-main-color text-white p-5">
                        <FaArrowRightLong />
                    </button>
                </div>
            )}
        </div>
    );
};

export default MainSection;
