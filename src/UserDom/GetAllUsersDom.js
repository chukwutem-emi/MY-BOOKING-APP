import React, { useState } from "react";
import SubShimmer from "../Utils/SubShimmer";
import Spinner from "../Utils/Spinner";
import UsersCard from "../Components/UsersCards";
import { motion, AnimatePresence, scale } from "framer-motion";

const GetAllUsersDom = ({loading, backgroundLoading, responseMsg, errorMsg, filteredUsers, handleBtnClick, searchText, handleClear}) => {
    const[currentIndex, setCurrentIndex] = useState(0);
    const[direction, setDirection]       = useState(0);

    const handleNext = () => {
        if (currentIndex < filteredUsers.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setDirection(1);
        };
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setDirection(-1);
        }
    };

    const variants = {
        enter : (direction) => ({
            x       : direction > 0 ? 300 : -300,
            opacity : 0,
            scale   : 0.9,
        }),
        center : {
            x          : 0,
            opacity    : 1,
            scale      : 1,
            transition : {duration : 0.4}
        },
        exit : (direction) => ({
            x          : direction < 0 ? 300 : -300,
            opacity    : 0,
            scale      : 0,
            transition : {duration : 0.4}
        })
    };
    return (
        <>
        <div className="flex flex-row w-full px-[2.5rem] justify-center items-center mx-auto overflow-hidden">
            <form onSubmit={(e) => e.preventDefault()} className="w-full flex flex-row flex-nowrap">
                <label htmlFor="search" className="sr-only">Search</label>
                <input
                type="text"
                id="search"
                name="search"
                placeholder="🔍 search"
                ref={searchText}
                onChange={handleClear}
                className="w-full m-4 p-2 border border-gray-700 text-start outline-none xs:text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.1rem]"
                autoFocus
                autoComplete="on"
                autoCorrect="on"
                />
                <button type="button" onClick={() => handleBtnClick(searchText)} className="w-full text-white font-bold font-serif p-2 text-center cursor-pointer m-4 bg-blue-950 outline-none justify-between xs:text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.1rem]">
                    {loading ? (
                        <>
                        <div className="flex flex-row">
                            <Spinner />
                            <div className="break-words xs:ml-[6rem] sm:ml-[6rem] md:ml-[8rem] lg:ml-[10rem] xl:ml-[12rem] xs:text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.1rem]">Searching...</div>
                        </div>
                        </>
                    ) : ("Search")}
                </button>
            </form>
        </div>
            {
                backgroundLoading && (
                    <>
                    <SubShimmer  />
                    </>
                )
            }   
            {
                errorMsg ? (
                    <div className="bg-red-50 text-red-700 w-full rounded-md text-center break-words p-4 xs:text-[0.6rem] sm:text-[0.8rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem]">
                        {responseMsg}
                    </div>
                ) : filteredUsers.length > 0 ? (
                        <div className="flex flex-row relative w-full xl:mt-[8rem] h-[25rem] items-center justify-center z-0">
                            <button
                                onClick={handlePrev}
                                disabled={currentIndex === 0}
                                className={`absolute left-4 px-3 py-1 rounded-full text-[2rem] bg-black text-white shadow-2xl font-extrabold ${currentIndex === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-gray-800 text-white hover:bg-gray-700"}`}
                            >
                                &lt;
                            </button>
                            <AnimatePresence custom={direction} mode="wait">
                                <motion.div
                                key={filteredUsers[currentIndex]?.id}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="w-full bg-gradient-to-r from-emerald-600 to-amber-400 break-words xl:p-4 flex flex-col justify-center items-center flex-shrink-0 p-4  rounded-2xl"
                                >
                                    <UsersCard userData={filteredUsers[currentIndex]}/>
                                </motion.div>
                            </AnimatePresence>
                            <button
                                onClick={handleNext}
                                disabled={currentIndex === filteredUsers.length - 1}
                                className={`absolute right-4 px-3 py-1 rounded-full text-[2rem] bg-black shadow-2xl font-extrabold ${currentIndex === filteredUsers.length - 1 ? "bg-gray-400 cursor-not-allowed" : "bg-gray-800 text-white hover:bg-gray-700"}`}
                            >
                                &gt;
                            </button>    
                        </div>
                ) : (
                    !loading && (
                        <div className="text-center text-gray-600 mt-4">No user found</div>
                    )    
                )
            }  
        </>
    );
};
export default GetAllUsersDom;