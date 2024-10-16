import { useEffect, useState } from "react";

const Wishlist = () => {
    const [datas, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    
    const getMark = () => {
        const mark = localStorage.getItem("bookMark");
        if (mark) {
            return JSON.parse(mark);
        } else {
            return [];
        }
    };

    
    const setMark = (marks) => {
        localStorage.setItem("bookMark", JSON.stringify(marks));
    };

    
    useEffect(() => {
        const mark = getMark();

        fetch("https://gutendex.com/books/")
            .then((res) => res.json())
            .then((data) => {
                setLoading(true);
                const latestData = data.results;
                const item = latestData.filter((singleData) =>
                    mark.includes(singleData?.id)
                );
                if (item.length === 0) {
                    setLoading(false);
                    return;
                }
                setData(item);
                setLoading(false);
            });
    }, []);

  
    const handleRemove = (id) => {
        const updatedMarks = getMark().filter((markId) => markId !== id);
        setMark(updatedMarks);
        setData(datas.filter((item) => item.id !== id))
    };

    
    if (loading) {
        return (
            <div className="text-5xl h-screen text-center text-main-color font-extrabold pt-28">
                Loading...
            </div>
        );
    }

   
    if (datas.length === 0) {
        return (
            <div className="text-center h-screen text-main-color text-2xl font-bold">
                No Data Dear....
            </div>
        );
    }

    
    return (
        <div>
            {datas.map((item) => (
                <section key={item.id} className="py-10 bg-white sm:py-16 lg:py-24">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
                            <div>
                                <img
                                    className=" max-w-md mx-auto"
                                    src={item.formats["image/jpeg"]}
                                    alt={item.title}
                                />
                            </div>

                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                                    {item?.title}
                                </h2>
                                <p className="mt-6 text-base text-gray-600">
                                    Authors : {item.authors[0].name}
                                </p>

                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-red-600 rounded-md mt-9 hover:bg-red-700 focus:bg-red-700"
                                >
                                    Remove now
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Wishlist;
