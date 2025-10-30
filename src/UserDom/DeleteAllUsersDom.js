import React from "react";
import Spinner from "../Utils/Spinner";
import LoadingSpinner from "../Utils/LoadingSpinner";

const DeleteAllUsersDom = ({backgroundLoading, message, isLoading, errorMsg, setMessage, handleDeleteAllUsers}) => {
    return (
        <div className="mx-auto bg-black rounded-lg shadow-2xl space-y-6 z-50 p-6 w-[80%] xl:w-[50%]">
            <h1 className="font-sans font-bold text-white xs:text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.3rem]">Delete All Users</h1>
            <button type="button" className={`bg-red-900 hover:bg-red-700 w-full p-2 font-sans cursor-pointer rounded-lg shadow-lg outline-none ${isLoading ? "cursor-not-allowed bg-red-500" : "cursor-pointer"}`} onClick={handleDeleteAllUsers} disabled={isLoading === true}>
                { 
                    isLoading ? (
                        <div className="flex flex-row">
                        <>
                        <Spinner />
                        <p className="text-white break-words font-sans font-bold animate-pulse xs:text-[0.8rem] xs:ml-[6rem] sm:text-[0.8rem] sm:ml-[6rem] md:text-[1rem] md:ml-[8rem] lg:text-[1.1rem] lg:ml-[10rem] xl:text-[1.1rem] xl:ml-[12rem]">Deleting all users...</p>
                        </>
                    </div>
                    ) : (
                        <p className="text-white font-sans font-bold xs:text-[1.2rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.4rem]">Delete</p>
                    )
                }
            </button>
                {
                    backgroundLoading && (
                        <LoadingSpinner />
                    )
                }
                {
                    message && (
                        <div className={`w-full break-words font-sans font-semibold text-center p-4 xs:text-[0.6rem] sm:text-[0.8rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem] ${errorMsg ? "text-red-600 bg-red-50" : "text-green-600 bg-green-50"}`}>
                            <button type="button" className="text-red-700 bg-white text-3xl w-8 h-fit shadow-2xl z-50 rounded-full mr-[2rem] font-sans font-bold cursor-pointer" title="cancel" onClick={() => setMessage("")} aria-label="cancel">&times;</button>
                            {message}
                        </div>
                    )
                }
        </div>
    );
};
export default DeleteAllUsersDom;