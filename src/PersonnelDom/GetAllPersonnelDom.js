import React from "react";
import SubShimmer from "../Utils/SubShimmer";
import PersonnelDetails from "../PersonnelCrudOperation/PersonnelDetails";
import Spinner from "../Utils/Spinner";

const GetAllPersonnelDom = ({backgroundLoading, errorMsg, filteredPersonnelList, handleBtnClick, isLoading, message, searchText, handleClearMsg}) => {
    return (
        <>
        <div className="flex flex-row w-[80%] justify-between mx-auto xl:w-[80%]">
            <form onSubmit={(e) => e.preventDefault()} className="w-full flex flex-nowrap space-x-2">
                <label className="sr-only">Search</label>
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
        <div className="absolute top-0 left-0 h-full w-8 flex items-center justify-center cursor-pointer z-50">
            <span className="text-black text-5xl font-extrabold">&larr;</span>
        </div>  
        {
            errorMsg ? (
                <div className="text-red-600 font-sans bg-red-50 w-[80%] mx-auto text-center p-4 rounded-lg shadow-2xl xs:w-[90%] xs:text-[0.6rem] sm:w-[90%] sm:text-[0.8rem] md:w-[90%] md:text-[0.8rem] lg:w-[90%] lg:text-[1rem] xl:w-[80%] xl:text-[1rem]">
                    {message}
                </div>
            ) : filteredPersonnelList.length > 0 ? (
                <div className="flex flex-row overflow-x-auto w-full whitespace-normal space-x-4 p-4">
                    {
                        filteredPersonnelList.map((personnel) => (
                            <PersonnelDetails key={personnel.id} PersonnelData={personnel}/>
                        ))

                    }
                </div>
            ) : (
                !isLoading && (
                    <p className="text-gray-600 text-center mt-4">No user found</p>
                )
            ) 
        }
        <div className="text-black font-extrabold absolute top-0 right-0 h-full w-8 flex items-center text-5xl z-50">&rarr;</div>
        </>
    );
};
export default GetAllPersonnelDom;