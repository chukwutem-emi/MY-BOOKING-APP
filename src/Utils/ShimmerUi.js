import React from "react";
import SubShimmer from "./SubShimmer";

const Shimmer = () => {
    const shimmerUI = [
        {
            paragraph:""
        },
        {
            paragraph:""
        },
        {
            paragraph:""
        },
    ]
    return (
        <div className="w-full xs:mt-[6rem] sm:mt-[8rem] md:mt-[8rem] lg:mt-[10rem] xl:mt-[10rem]">
            {
                shimmerUI.map((item, index) => (
                    <div key={index} className="">
                        <p className="font-bold mt-[1rem] h-6 bg-gray-400 animate-pulse w-[95%] my-0 mx-auto rounded-full">
                            {item.paragraph}
                        </p>
                    </div>
                ))
            }
            <>
            <p className="h-6 bg-gray-400 mt-[2rem] w-[35%] mx-2 rounded-full animate-pulse"></p>
            <SubShimmer />
            <p className="h-6 bg-gray-400 mt-[2rem] w-[35%] mx-2 rounded-full animate-pulse"></p>
            <SubShimmer />
            <p className="h-6 bg-gray-400 mt-[2rem] w-[35%] mx-2 rounded-full animate-pulse"></p>
            <SubShimmer />
            <p className="h-6 bg-gray-400 mt-[2rem] w-[35%] mx-2 rounded-full animate-pulse"></p>
            <SubShimmer />
            </>
        </div>
    );
};
export default Shimmer;