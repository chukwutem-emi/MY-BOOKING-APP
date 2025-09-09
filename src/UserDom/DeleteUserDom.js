import React from "react";
import Spinner from "../Utils/Spinner";


const DeleteUserDom = ({errorMsg, message, loading, handleDelete, handleClearMsg, emailRef, setMessage}) => {
    return (
        <form onSubmit={handleDelete} className="w-[50%] mb-[2rem] xs:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[50%] mx-auto p-6 rounded-2xl flex flex-col bg-black space-y-4 shadow-2xl">
            <h1 className="w-full text-white font-sans text-2xl xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] lg:text-[1.5rem] font-bold animate-pulse">Delete User</h1>
            {
                message && (
                    <div className={`w-full break-words text-lg p-4 rounded-xl ${errorMsg ? "text-red-600 bg-red-50" : "text-green-600 bg-green-50"}`}>
                        <button type="button" className="text-red-700 bg-white text-3xl w-8 h-fit shadow-2xl z-50 rounded-full mr-[2rem] font-sans font-bold cursor-pointer" title="cancel" onClick={() => setMessage("")} aria-label="cancel">&times;</button>
                        {message}
                    </div>
                )
            }
            <label htmlFor="email_address" className=""><strong>User Email Address:</strong></label>
            <input
            type="email"
            id="email_address" 
            name="email_address"
            ref={emailRef}
            className="w-full p-2 text-lg font-sans text-white rounded-lg bg-gray-700 outline-none border-[1px] border-white"
            placeholder="Enter the user email address"
            required
            autoComplete="email"
            autoFocus
            onChange={handleClearMsg}
            />
            <button type="submit" className="bg-red-900 hover:bg-red-700 text-white w-full text-center p-2 text-xl rounded-lg font-bold font-sans">
                {
                    loading ? (
                        <div className="flex flex-row justify-center">
                            <>
                            <Spinner />
                            <div className="text-white text-lg ml-[3rem] font-sans animate-pulse">Deleting!, please wait......</div>
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