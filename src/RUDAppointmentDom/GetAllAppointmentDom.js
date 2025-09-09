import React from "react";
import SubShimmer from "../Utils/SubShimmer";
import Spinner from "../Utils/Spinner";
import AppointmentDetails from "./AppointmentDetails";

const GetAllAppointmentDom = ({searchText, backgroundLoading, filteredAppointment, handleBtnClick, isError, loading, message, handleClearMsg}) => {
    return (
        <>
        <div className="flex flex-row w-[80%] justify-between mx-auto xs:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[80%]">
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
                <button type="button" onClick={() => handleBtnClick(searchText)} className="bg-green-900 hover:bg-green-600 w-full p-1 outline-none">
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
        <div className="absolute top-0 left-0 h-full w-8 flex items-center justify-center cursor-pointer z-50">
            <span className="text-black text-5xl font-extrabold">&larr;</span>
        </div>  
        {
            isError ? (
                <div className="text-red-600 bg-red-50 w-[80%] mx-auto text-center p-4 rounded-lg shadow-2xl xs:w-[90%] xs:text-sm sm:w-[90%] sm:text-[1.2rem] md:w-[90%] md:text-[1.3rem] lg:w-[90%] lg:text-[1.4rem] xl:w-[80%] xl:text-[1.4rem]">
                    {message}
                </div>
            ) : filteredAppointment.length > 0 ? (
                <div className="flex flex-row overflow-x-auto w-full whitespace-normal space-x-4 p-4">
                    {
                        filteredAppointment.map((appointment) => (
                            <AppointmentDetails key={appointment.id} appointmentDetails={appointment}/>
                        ))

                    }
                </div>
            ) : (
                !loading && (
                    <p className="text-gray-600 text-center mt-4">No appointment found</p>
                )
            ) 
        }
        <div className="text-black font-extrabold absolute top-0 right-0 h-full w-8 flex items-center text-5xl z-50">&rarr;</div>
        </>
    );
};
export default GetAllAppointmentDom;