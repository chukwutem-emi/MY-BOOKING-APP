import React from "react";
import Spinner from "../Utils/Spinner";

const DeleteAppointmentDom = ({isError, loading, message, setMessage, usernameRef, handleDeleteAppointmentForm, handleClearMessage}) => {
    return (
        <form onSubmit={handleDeleteAppointmentForm} className="w-[50%] shadow-2xl z-50 mx-auto mb-[2rem] bg-white p-6 space-y-4 flex flex-col">
            <h1 className="w-full text-start font-bold text-blue-800 text-[1.5rem]">Delete Appointment</h1>
            {
                message && (
                    <div className={`break-words font-sans text-lg m-[1rem] p-[1rem] ${isError ? "text-red-600 bg-red-100" : "text-green-600 bg-green-100"}`}>
                        <button type="button" className="text-red-700 bg-white text-3xl w-8 h-fit shadow-2xl z-50 rounded-full mr-[2rem] font-sans font-bold cursor-pointer" title="cancel" onClick={() => setMessage("")} aria-label="cancel">&times;</button>
                        {message}
                    </div>
                )
            }
            <label htmlFor="username" className="font-bold font-sans text-[1.4rem] text-blue-900"><strong>Username:</strong></label>
            <input
            type="text"
            ref={usernameRef}
            id="username"
            name="username"
            onChange={handleClearMessage}
            placeholder="Please enter the user's name."
            className="p-2 w-full outline-none bg-gray-500 text-white font-sans font-semibold text-[1.3rem] border border-blue-600 rounded-lg"
            autoComplete="on"
            autoCorrect="on"
            autoFocus
            required 
            />
            <button type="submit" className="w-full p-2 bg-blue-900 text-white outline-none cursor-pointer text-[1.3rem] font-bold hover:bg-blue-800 rounded-lg">
                {
                    loading ? (
                        <div className="flex flex-row">
                            <Spinner />
                            <p className="text-white font-sans font-bold text-[1.4rem] ml-[6rem]">Deleting.......</p>
                        </div>
                    ) : (
                        "Submit"
                    )
                }
            </button>
        </form>
    );
};
export default DeleteAppointmentDom;