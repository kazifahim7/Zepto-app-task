
import toast, { Toaster } from "react-hot-toast";
import { IoBookmarkOutline } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";


const BookDetails = () => {
 

   

    const getMark = () => {
        const mark = localStorage.getItem("bookMark")
        if (mark) {
            return JSON.parse(mark)
        }
        else {
            return []
        }

    }


    const setWishList = (id) => {

        const mark = getMark()

        const axit = mark.find(item => item == id)
        if (!axit) {
            mark.push(id)
            localStorage.setItem("bookMark", JSON.stringify(mark))
            toast.success('Successfully added!')
        }
        else {
            toast.error("Already added.")
        }



    }


    const data=useLoaderData()
    console.log(data)
    return (
        <div className=" container mx-auto pt-10">

            <section className="py-10 bg-white sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
                        <div>
                            <img
                                className="w-full max-w-md mx-auto"
                                src={data.results[0].formats['image/jpeg']}
                                alt=""
                            />
                        </div>

                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                                {data.results[0].title}
                            </h2>
                            <p className="mt-6 text-base text-gray-600">
                                authors : {data.results[0].authors[0].name}
                            </p>
                            <p>
                                Subject : {data.results[0].subjects.map(item=><li key={item}>{item}</li>)}
                            </p>

                            <p className="pt-2">DownLoad : {data.results[0].download_count}</p>

                            <span

                                onClick={() => {
                                    setWishList(data.results[0].id)

                                }}
                                className="w-[40px]  cursor-pointer h-[40px] rounded-full border border-[#959393] flex items-center justify-center">
                                <IoBookmarkOutline className="text-[#959393]" />
                            </span>
                        </div>
                        <Toaster />
                    </div>
                </div>
            </section>

            
        </div>
    );
};

export default BookDetails;