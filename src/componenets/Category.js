 import React, { useEffect, useState } from "react";
 import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
 const Category = () => {

    const [collection_id, header_title, layout_FestiveEvent7, setCollectionId
    ] = useState([]);

    const fatchCategory = async() => {
       
    }

    useEffect(() => {
        fatchCategory();
    }, [])

    return (
        <div className="max-w-[1200px] mx-auto">
            <div className="flex my-3 items-center justify-between">
                <div className="text-{25px] font-bold"> What's on your mind?</div>
                <div className="flex">
                    <div className=" cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full">
                    <FaArrowLeft/>
                    </div>
                    <div className=" cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7]  rounded-full">
                    <FaArrowRight/>
                    </div>
                </div>
            </div>
            <div className="flex">
             
            </div>
        </div>
    )
}

export default Category;