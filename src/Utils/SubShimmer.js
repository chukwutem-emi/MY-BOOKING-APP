import React from "react";


const SubShimmer = () => {
    const shimmerBox = [
        {
            box:"",
            para:""
        },
        {
            box:"",
            para:""
        },
        {
            box:"",
            para:""
        },
        {
            box:"",
            para:""
        },
        {
            box:"",
            para:""
        }
    ]
    return (
        <div className="flex w-full h-[17rem] space-x-4 p-2 overflow-x-auto">
            {
                shimmerBox.map((item, index) => (
                    <div key={index} className="w-full xs:w-[80%] sm:w-[60%] md:w-[60%] lg:w-[40%] xl:w-[50%]  bg-gray-400 flex-row h-full flex-shrink-0 my-4 animate-pulse">
                        <p>{item.box}</p>
                    </div>
                ))
            }
        </div>
    );
};
export default SubShimmer;