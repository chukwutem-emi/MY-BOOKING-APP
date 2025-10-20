import React from "react";
import LoadingSpinner from "../Utils/LoadingSpinner";
import Spinner from "../Utils/Spinner";

const DeletePersonnelInfoDom = ({emailRef, backgroundLoading, errorMsg, isLoading, message, setMessage, handleDeletePersonnelForm, handleClearMsg}) => {
    return (
        <form onSubmit={handleDeletePersonnelForm} className="w-[80%] mx-auto shadow-2xl mb-[2rem] rounded-lg bg-white space-y-6 p-6 z-50 xl:w-[50%]">
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
            <h1 className="font-sans w-full text-start font-bold text-blue-800 text-[1.2rem] xl:text-[1.5rem]">Delete Personnel-Details</h1>
            <label htmlFor="email" className="font-bold font-sans text-[1rem] xl:text-[1.4rem] text-blue-900"><strong>Personnel Email:</strong></label>
            <input
            type="email"
            id="email"
            name="email"
            ref={emailRef}
            onChange={handleClearMsg}
            placeholder="Please enter the personnel email"
            className="p-2 w-full outline-none bg-gray-500 text-white font-sans font-semibold text-[1rem] xl:text-[1.3rem] border border-blue-600 rounded-lg"
            autoComplete="email"
            autoCorrect="on"
            required 
            />
            <button type="Submit" className={`w-full p-2 bg-blue-900 text-white outline-none cursor-pointer text-[1rem] xl:text-[1.3rem] font-bold hover:bg-blue-800 rounded-lg ${isLoading ? "cursor-not-allowed bg-blue-600" : "cursor-pointer"}`}
            disabled={isLoading === true}
            >
                {
                    isLoading ? (
                        <div className="flex flex-row justify-between">
                            <Spinner />
                            <p className="text-white break-words font-sans font-bold animate-pulse xs:text-[0.8rem] xs:ml-[6rem] sm:text-[0.8rem] sm:ml-[6rem] md:text-[1rem] md:ml-[8rem] lg:text-[1.1rem] lg:ml-[10rem] xl:text-[1.1rem] xl:ml-[12rem]">Deleting...</p>
                        </div>
                    ) : (
                        <div className="font-bold font-sans text-[1.5rem] text-white xs:text-[1.2rem] sm:text-[1.4rem] md:text-[1.4rem] lg:text-[1.4rem] xl:text-[1.5rem]">Delete</div>
                    )
                }
            </button>
        </form>
    );
};
export default DeletePersonnelInfoDom;