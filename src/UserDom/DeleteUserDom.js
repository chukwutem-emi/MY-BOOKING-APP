import React from "react";
import Spinner from "../Utils/Spinner";


const DeleteUserDom = ({errorMsg, message, loading, handleDelete, handleClearMsg, emailRef, setMessage}) => {
    return (
        <form onSubmit={handleDelete} className="w-full mb-[2rem] xs:w-[80%] sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[50%] mx-auto p-6 rounded-2xl flex flex-col bg-black space-y-4 shadow-2xl">
            <h1 className="w-full text-white font-sans xs:text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.3rem] font-bold animate-pulse">Delete User</h1>
            {
                message && (
                    <div className={`w-full break-words p-4 rounded-xl xs:text-[0.6rem] sm:text-[0.8rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem] ${errorMsg ? "text-red-600 bg-red-50" : "text-green-600 bg-green-50"}`}>
                        <button type="button" className="text-red-700 bg-white text-3xl w-8 h-fit shadow-2xl z-50 rounded-full mr-[2rem] font-sans font-bold cursor-pointer" title="cancel" onClick={() => setMessage("")} aria-label="cancel">&times;</button>
                        {message}
                    </div>
                )
            }
            <label htmlFor="email_address" className="text-white xs:text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.1rem]"><strong>User Email Address:</strong></label>
            <input
            type="email"
            id="email_address" 
            name="email_address"
            ref={emailRef}
            className="w-full p-2 font-sans text-white rounded-lg bg-gray-700 outline-none border-[1px] border-white xs:text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.1rem]"
            placeholder="Enter the user email address"
            required
            autoComplete="email"
            autoFocus
            onChange={handleClearMsg}
            />
            <button type="submit" className="bg-red-900 hover:bg-red-700 text-white w-full text-center p-2 text-xl rounded-lg font-bold font-sans outline-none">
                {
                    loading ? (
                        <div className="flex flex-row">
                            <>
                            <Spinner />
                            <div className="text-white break-words font-sans font-bold animate-pulse xs:text-[0.8rem] xs:ml-[6rem] sm:text-[0.8rem] sm:ml-[6rem] md:text-[1rem] md:ml-[8rem] lg:text-[1.1rem] lg:ml-[10rem] xl:text-[1.1rem] xl:ml-[12rem]">Deleting, please wait!...</div>
                            </>
                        </div>   
                    ) : (
                        "Submit"
                    )
                }
            </button>
        </form>
    );
};
export default DeleteUserDom;