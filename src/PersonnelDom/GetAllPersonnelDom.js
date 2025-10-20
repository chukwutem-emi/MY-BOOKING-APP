import React, { useState } from "react";
import SubShimmer from "../Utils/SubShimmer";
import PersonnelDetails from "../PersonnelCrudOperation/PersonnelDetails";
import Spinner from "../Utils/Spinner";
import { motion, AnimatePresence } from "framer-motion";

const GetAllPersonnelDom = ({backgroundLoading, errorMsg, filteredPersonnelList, handleBtnClick, isLoading, message, searchText, handleClearMsg}) => {
    const[currentIndex, setCurrentIndex] = useState(0);
    const[direction, setDirection]       = useState(0);

    const handleNext = () => {
        if (currentIndex < filteredPersonnelList.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setDirection(1);
        };
    };

    const variants = {
        enter : (direction) => ({
            x       : direction > 0 ? 300 : - 300,
            opacity : 0,
            scale   : 0.9
        }),
        center : {
            x          : 0,
            opacity    : 1,
            scale      : 1,
            transition : {duration : 0.4},
        },
        exit : (direction) => ({
            x          : direction < 0 ? 300 : -300,
            opacity    : 0,
            scale      : 0.9,
            transition : {duration : 0.4}
        })
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setDirection(-1);
            setCurrentIndex(currentIndex - 1);
        }
    };
    return (
        <>
        <div className="flex flex-row w-full px-[2.5rem] justify-center items-center mx-auto overflow-hidden">
            <form onSubmit={(e) => e.preventDefault()} className="w-full flex flex-nowrap space-x-2">
                <label htmlFor="text" className="sr-only">Search</label>
                <input
                ref={searchText}
                type="text"
                id="text"
                name="text"
                placeholder="🔍 Search"
                className="w-full outline-none border-[1px] border-blue-950 p-1 font-sans text-[1.2rem] xs:text-sm sm:text-[1.3rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.4rem]"
                autoComplete="on"
                autoCorrect="on"
                autoCapitalize="on"
                onChange={handleClearMsg}
                autoFocus
                />
                <button type="button" onClick={() => handleBtnClick(searchText)} className={`bg-blue-950 w-full p-1 outline-none ${isLoading ? "cursor-not-allowed bg-blue-600" : "cursor-pointer"}`}
                disabled={isLoading === true}
                >
                    {
                        isLoading ? (
                            <div className="flex flex-row justify-between">
                                <Spinner />
                                <p className="text-white break-words font-sans font-bold animate-pulse xs:text-[0.8rem] xs:ml-[6rem] sm:text-[0.8rem] sm:ml-[6rem] md:text-[1rem] md:ml-[8rem] lg:text-[1.1rem] lg:ml-[10rem] xl:text-[1.1rem] xl:ml-[12rem]">Searching...</p>
                            </div>
                        ) : (
                            <div className="text-white font-sans font-bold text-[1.5rem] xs:text-sm sm:text-[1.3rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.4rem]">Search</div>
                        )
                    }
                </button>
            </form>
        </div>
        {
            backgroundLoading && (
                <SubShimmer />
            )
        } 
        {
            errorMsg ? (
                <div className="text-red-600 font-sans bg-red-50 w-[80%] mx-auto text-center p-4 rounded-lg shadow-2xl xs:w-[90%] xs:text-[0.6rem] sm:w-[90%] sm:text-[0.8rem] md:w-[90%] md:text-[0.8rem] lg:w-[90%] lg:text-[1rem] xl:w-[80%] xl:text-[1rem]">
                    {message}
                </div>
            ) : filteredPersonnelList.length > 0 ? (
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
                        key={filteredPersonnelList[currentIndex]?.name}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="w-full bg-gradient-to-r from-emerald-600 to-amber-400 break-words xl:p-4 flex flex-col justify-center items-center flex-shrink-0 p-4  rounded-2xl"
                        >
                            <PersonnelDetails PersonnelData={filteredPersonnelList[currentIndex]}/>
                        </motion.div>
                    </AnimatePresence>
                    <button
                        onClick={handleNext}
                        disabled={currentIndex === filteredPersonnelList.length - 1}
                        className={`absolute right-4 px-3 py-1 rounded-full text-[2rem] bg-black shadow-2xl font-extrabold ${currentIndex === filteredPersonnelList.length - 1 ? "bg-gray-400 cursor-not-allowed" : "bg-gray-800 text-white hover:bg-gray-700"}`}
                    >
                        &gt;
                    </button>
                </div>
            ) : (
                !isLoading && (
                    <p className="text-gray-600 text-center mt-4">No user found</p>
                )
            ) 
        }
        </>
    );
};
export default GetAllPersonnelDom;