import React from "react";
import LoadingSpinner from "../Utils/LoadingSpinner";
import DeletePersonnelCustomDropDown from "./DeletePersonnelCustomDropDown";

const DeletePersonnelInfoDom = ({backgroundLoading, errorMsg, isLoading, message, setMessage, handleDeletePersonnelForm, handleSelected}) => {
    return (
        <form onSubmit={handleDeletePersonnelForm} className="w-[80%] mb-[2rem] h-dvh mx-auto p-6 rounded-2xl flex flex-col bg-white space-y-4 shadow-2xl">
            <h1 className="w-full text-white font-sans xs:text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.3rem] font-bold animate-pulse">Delete Personnel-Details</h1>
            {
                backgroundLoading && (
                    <LoadingSpinner />
                )
            }
            {
                message && (
                    <div className={`break-words font-sans m-[1rem] p-[1rem] xs:text-[0.6rem] sm:text-[0.8rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem] ${errorMsg ? "text-red-600 bg-red-100" : "text-green-600 bg-green-100"}`}>
                        <button type="button" className="text-red-700 bg-white text-3xl w-8 h-fit shadow-2xl z-50 rounded-full mr-[2rem] font-sans font-bold cursor-pointer" title="cancel" onClick={() => setMessage("")} aria-label="cancel">&times;</button>
                        {message}
                    </div>
                )
            }
            <div className="flex flex-row items-center justify-between">
                <DeletePersonnelCustomDropDown handleSelected={handleSelected}/>
                <button type="Submit" className={`bg-white shadow-2xl border border-red-600 text-red-600 w-[40%] rounded-lg font-bold font-sans outline-none text-center p-2 xs:text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem] ${isLoading ? "cursor-not-allowed" : "cursor-pointer"}`}
                disabled={isLoading === true}
                >
                    {
                        isLoading ? (
                            <div>
                                <p className="text-red-600 text-center break-words font-sans animate-pulse xs:text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem]">Deleting...</p>
                            </div>
                        ) : (
                            <div className="text-center font-bold font-sans xs:text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem]">Delete</div>
                        )
                    }
                </button>
            </div>
        </form>
    );
};
export default DeletePersonnelInfoDom;