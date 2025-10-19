import React, { useState } from "react";
import SubShimmer from "../Utils/SubShimmer";
import Spinner from "../Utils/Spinner";
import AppointmentDetails from "./AppointmentDetails";

const GetAllAppointmentDom = ({searchText, backgroundLoading, filteredAppointment, handleBtnClick, isError, loading, message, handleClearMsg}) => {

    const[currentIndex, setCurrentIndex] = useState(0);
    const[direction, setDirection]       = useState(0);

    const handleNext = () => {
        if (currentIndex  < filteredAppointment.length -1) {
            setDirection(1)
            setCurrentIndex(currentIndex + 1)
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setDirection(-1)
            setCurrentIndex(currentIndex - 1)
        }
    };
    const variants = {
        enter : (direction) => ({
            x : direction > 0 ? 300 : -300,
            opacity : 0,
            scale   : 0.9,
        }),
        center : {
            x : 0,
            opacity : 1,
            scale   : 1,
            transition : {duration : 0.4}
        },
        exit : (direction) => ({
            x : direction < 0 ? 300 : -300,
            opacity : 0,
            scale   : 0.9,
            transition : {duration : 0.4}
        })
    }
    return (
        <>
        <div className="flex flex-row w-[80%] justify-between mx-auto">
            <form onSubmit={(e) => e.preventDefault()} className="w-full flex flex-nowrap space-x-2">
                <label className="sr-only">Search</label>
                <input
                ref={searchText}
                type="text"
                id="text"
                name="text"
                placeholder="🔍 Search"
                className="w-full outline-none border-[1px] border-green-900 p-1 font-sans text-[1.2rem] xs:text-sm sm:text-[1.3rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.4rem]"
                autoComplete="on"
                autoCorrect="on"
                autoCapitalize="on"
                onChange={handleClearMsg}
                autoFocus
                />
                <button type="button" onClick={() => handleBtnClick(searchText)} className={`bg-green-900 hover:bg-green-600 w-full p-1 outline-none ${loading ? "cursor-not-allowed bg-blue-600" : "cursor-pointer"}`}
                disabled={loading === true}
                >
                    {
                        loading ? (
                            <div className="flex flex-row">
                                <Spinner />
                                <p className="ml-[6rem] mt-[0.5rem] font-sans font-bold text-[1.4rem] text-white xs:ml-[3rem] xs:text-sm sm:ml-[6rem] sm:text-[1.2rem] md:ml-[6rem] md:text-[1.3rem] lg:ml-[6rem] lg:text-[1.4rem] xl:ml-[6rem] xl:text-[1.4rem]">Searching...</p>
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
        <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute left-4 px-3 py-1 rounded-full text-[2rem] bg-black text-white shadow-2xl font-extrabold ${currentIndex === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-gray-800 text-white hover:bg-gray-700"}`}
        >
            &lt;
        </button> 
        {
            isError ? (
                <div className="text-red-600 bg-red-50 w-[80%] mx-auto text-center p-4 rounded-lg shadow-2xl xs:w-[90%] xs:text-sm sm:w-[90%] sm:text-[1.2rem] md:w-[90%] md:text-[1.3rem] lg:w-[90%] lg:text-[1.4rem] xl:w-[80%] xl:text-[1.4rem]">
                    {message}
                </div>
            ) : filteredAppointment.length > 0 ? (
                <div className="flex flex-row overflow-hidden w-full items-center justify-center px-[2.5rem]">
                    <AppointmentDetails appointmentDetails={filteredAppointment}/>
                </div>
            ) : (
                !loading && (
                    <p className="text-gray-600 text-center mt-4">No appointment found</p>
                )
            ) 
        }
        <button
            onClick={handleNext}
            disabled={currentIndex === filteredAppointment.length - 1}
            className={`absolute right-4 px-3 py-1 rounded-full text-[2rem] bg-black shadow-2xl font-extrabold ${currentIndex === education.length - 1 ? "bg-gray-400 cursor-not-allowed" : "bg-gray-800 text-white hover:bg-gray-700"}`}
        >
            &gt;
        </button>
        </>
    );
};
export default GetAllAppointmentDom;