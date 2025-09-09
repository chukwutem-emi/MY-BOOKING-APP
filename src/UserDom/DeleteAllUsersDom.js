import React from "react";
import Spinner from "../Utils/Spinner";
import LoadingSpinner from "../Utils/LoadingSpinner";

const DeleteAllUsersDom = ({backgroundLoading, message, isLoading, errorMsg, setMessage, handleDeleteAllUsers}) => {
    return (
        <div className="w-full mx-auto bg-black rounded-lg shadow-2xl space-y-6 z-50 p-6 xs:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[50%]">
            <h1 className="font-sans text-2xl font-bold text-white xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.4rem]">Delete All Users</h1>
            <button className="bg-red-900 hover:bg-red-700 w-full p-2 font-sans cursor-pointer rounded-lg shadow-lg" onClick={handleDeleteAllUsers}>
                { 
                    isLoading ? (
                        <div className="flex flex-row">
                        <>
                        <Spinner />
                        <p className="text-white font-sans ml-[10rem] text-[1.4rem] font-bold animate-pulse xs:text-[1rem] xs:ml-[2rem] sm:text-[1.2rem] sm:ml-[6rem] md:text-[1.3rem] md:ml-[8rem] lg:text-[1.3rem] lg:ml-[10rem] xl:text-[1.4rem] xl:ml-[10rem]">Deleting all users........</p>
                        </>
                    </div>
                    ) : (
                        <p className="text-white font-sans font-bold text-[1.4rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.6rem]">Delete</p>
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
                        <div className={`w-full break-words font-sans text-lg font-semibold text-center p-4 xs:text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-2xl ${errorMsg ? "text-red-600 bg-red-50" : "text-green-600 bg-green-50"}`}>
                            <button type="button" className="text-red-700 bg-white text-3xl w-8 h-fit shadow-2xl z-50 rounded-full mr-[2rem] font-sans font-bold cursor-pointer" title="cancel" onClick={() => setMessage("")} aria-label="cancel">&times;</button>
                            {message}
                        </div>
                    )
                }
        </div>
    );
};
export default DeleteAllUsersDom;