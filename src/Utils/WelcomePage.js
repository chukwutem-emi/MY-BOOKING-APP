import React from "react";
import BigSpinner from "./BigSpinner";

const WelcomePage = () => {

    return (
        <div className="min-h-screen mt-[1rem] overflow-x-hidden flex flex-col items-center justify-center bg-white">
            <h1 className="text-blue-800 font-serif font-extrabold text-2xl animate-pulse text-center ">Welcome to</h1>
            <div className="flex flex-row items-center justify-center w-64 h-64 mt-[2rem] bg-green-400 mx-auto rounded-full shadow-2xl z-50">
                <p className="text-blue-800 font-bold font-serif text-2xl animate-pulse">CHEM</p>
                <p className="text-orange-600 font-bold font-sans text-2xl animate-pulse">STEN</p>
                <p className="text-red-800 font-bold font-sans text-xl animate-pulse">ABS&reg;</p>
            </div>
            <div className="mt-[2rem] flex mx-auto text-center items-center justify-center w-20 h-20 animate-spin border-8 border-t-transparent border-black bg-white text-[0.6rem] rounded-full text-blue-800 font-serif font-bold">
            </div>
        </div>
    );
};
export default WelcomePage;