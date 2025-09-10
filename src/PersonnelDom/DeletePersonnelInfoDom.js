import React from "react";
import LoadingSpinner from "../Utils/LoadingSpinner";
import Spinner from "../Utils/Spinner";

const DeletePersonnelInfoDom = ({emailRef, backgroundLoading, errorMsg, isLoading, message, setMessage, handleDeletePersonnelForm, handleClearMsg}) => {
    return (
        <form onSubmit={handleDeletePersonnelForm} className="w-full mx-auto shadow-2xl mb-[2rem] rounded-lg bg-white space-y-6 p-6 z-50 xs:w-[80%] sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[50%]">
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
            <h1 className="font-sans font-bold text-[1.4rem] my-[2rem] text-blue-900 xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.3rem] lg:text-[1.3rem] xl:text-[1.4rem]">Delete Personnel-Details</h1>
            <label htmlFor="email" className="font-sans font-bold text-blue-900 text-[1.2rem] xs:text-[1rem]"><strong>Personnel Email:</strong></label>
            <input
            type="email"
            id="email"
            name="email"
            ref={emailRef}
            onChange={handleClearMsg}
            placeholder="Please enter the personnel email"
            className="w-full p-2 outline-none border-[1px] border-blue-900 text-[1.2rem] rounded-lg xs:text-[1rem] sm:text-[1.1rem] md:text-[1.1rem] lg:text-[1.1rem] xl:text-[1.2rem]"
            autoComplete="email"
            autoCorrect="on"
            required 
            />
            <button type="Submit" className="w-full bg-blue-950 p-2 cursor-pointer hover:bg-blue-600 rounded-lg z-50 shadow-2xl outline-none">
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