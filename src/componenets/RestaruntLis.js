import React, { useEffect } from 'react'
import { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


const RestaruntLis = () => {

    const [data, setdata] = useState([]);

    const fetchRestarunt = async () => {
        // Fetch data from API
        // Set data to state
    }

    useEffect(() => {
       fetchRestarunt();
    }, [])
    return (
        <div className="flex my-3 items-center justify-between">
            <div className="text-{25px] font-bold"> What's on your mind?</div>
            <div className="flex">
                <div className=" cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7]
                     rounded-full"   >
                    <FaArrowLeft />
                </div>
                <div className=" cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7]
                      rounded-full">
                    <FaArrowRight />
                </div>
            </div>
        </div>

    )
}

export default RestaruntLis;