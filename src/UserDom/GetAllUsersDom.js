import React from "react";
import SubShimmer from "../Utils/SubShimmer";
import Spinner from "../Utils/Spinner";
import UsersCard from "../Components/UsersCards";

const GetAllUsersDom = ({loading, backgroundLoading, responseMsg, errorMsg, filteredUsers, handleBtnClick, searchText, handleClear}) => {
    return (
        <>
        <div className="flex flex-row space-x-6 w-[80%] mt-0 mx-auto xl:w-[90%]">
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
            <div className="absolute top-0 left-0 h-full w-8 flex items-center justify-center cursor-pointer z-40">
                <span className="text-black text-5xl font-extrabold">&larr;</span>
            </div>   
            {
                errorMsg ? (
                    <div className="bg-red-50 text-red-700 w-full rounded-md text-center break-words p-4 xs:text-[0.6rem] sm:text-[0.8rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem]">
                        {responseMsg}
                    </div>
                ) : filteredUsers.length > 0 ? (
                        <div className="flex flex-row overflow-x-auto w-full whitespace-normal space-x-4 p-4">
                            {
                                filteredUsers.map((users) => (
                                    <UsersCard key={users.id} userData={users} />
                                ))
                            }
                        </div>
                ) : (
                    !loading && (
                        <div className="text-center text-gray-600 mt-4">No user found</div>
                    )    
                )
            }
            <div className="absolute top-0 right-0 h-full w-8 flex items-center justify-center cursor-pointer z-40">
                <span className="text-black text-5xl font-extrabold">&rarr;</span>
            </div>   
        </>
    );
};
export default GetAllUsersDom;