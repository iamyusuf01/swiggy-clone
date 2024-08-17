import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


const Category = () => {
    const [slide, setSlide] = useState(0);

    const [categories, setCategory] = useState([]);

    const fatchCategory = async () => {
    //     const response = await fetch("http://localhost:3000/data/categories")
    //     const data = await response.json();
    //    setCategory(data);
    }

    useEffect(() => {
        fatchCategory();
    }, [])

    const nextslide = () => {
        console.log(categories.length)
      // eslint-disable-next-line eqeqeq
      if(categories.length - 8 == slide) return false;
      setSlide(slide + 3)
    }

    const prevslide = () => {
        // eslint-disable-next-line eqeqeq
        if(slide == 0) return false;
        setSlide(slide - 3);
    }

    return (
        <div className="max-w-[1200px] mx-auto">
            <div className="flex my-3 items-center justify-between">
                <div className="text-{25px] font-bold"> What's on your mind?</div>
                <div className="flex">
                    <div className=" cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7]
                     rounded-full"  onClick={prevslide} >
                        <FaArrowLeft />
                    </div>
                    <div className=" cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7]
                      rounded-full"   onClick={nextslide}>
                        <FaArrowRight  />
                    </div>
                </div>
            </div>
            <div className="flex overflow-hidden">
                {
                    categories.map((cat, index) => {
                        return (
                            <div  style={{
                                transform: `translateX(-${slide * 100})`
                            }} 
                            key={index} className="w-[150px] shrink-0">
                                <img src={"https://localhost:3000/images/ " + cat.image} alt="" />
                            </div>
                        )
                    })
                }
            </div>
            <hr className="my-6 border[2px]"/>
        </div>
    )
}

export default Category;