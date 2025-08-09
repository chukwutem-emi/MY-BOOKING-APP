import React, { useRef} from "react";
import Spinner from "../Utils/Spinner";
import UsersCard from "./UsersCards";
import useGetAllUsers from "./EverythingAboutAppointments/UserCustomHooks/useGetAllUsers";
import SubShimmer from "../Utils/SubShimmer";

const GetAllUsers = () => {
    const searchText = useRef(null)

    const {
        loading,
        backgroundLoading,
        responseMsg,
        errorMsg,
        filteredUsers,
        setErrorMsg,
        setResponseMsg,
        handleBtnClick,
    } = useGetAllUsers();

    const handleClear = () => {
        setErrorMsg(false);
        setResponseMsg("")
    };

    return (
        <div className="mt-[14rem] w-full relative overflow-x-hidden">
            <div className="flex flex-row space-x-6 w-[80%] mt-0 mx-auto xs:w-[100%] sm:w-[100%] md:w-[100%]">
                <form onSubmit={(e) => e.preventDefault()} className="w-full flex flex-row flex-nowrap">
                    <label htmlFor="search" className="sr-only">Search</label>
                    <input
                    type="text"
                    id="search"
                    name="search"
                    placeholder="🔍 search"
                    ref={searchText}
                    onChange={handleClear}
                    className="w-full m-4 p-2 border border-gray-700 text-start text-lg"
                    autoFocus
                    autoComplete="on"
                    autoCorrect="on"
                    />
                    <button onClick={() => handleBtnClick(searchText)} className="w-full text-white text-lg font-bold font-serif p-2 text-center cursor-pointer m-4 bg-blue-950">
                        {loading ? (
                            <>
                            <div className="flex flex-row">
                                <Spinner />
                                <div className="ml-[6rem] xs:ml-[2rem] sm:ml-[2rem] md:ml-[3rem] lg:ml-[6rem] xl:ml-[8rem]">Searching...</div>
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
                        <div className="bg-red-100 text-red-700 w-full rounded-md text-center break-words p-4">
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
        </div>
    )
}
export default GetAllUsers;