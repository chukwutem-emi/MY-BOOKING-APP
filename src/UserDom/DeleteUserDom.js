import React from "react";
import DeleteUserCustomDropDown from "./DeleteUserCustomDropDown";


const DeleteUserDom = ({errorMsg, message, loading, handleDelete, setMessage, handleSelected}) => {
    return (
        <form onSubmit={handleDelete} className="w-[80%] mb-[2rem] h-dvh mx-auto p-6 rounded-2xl flex flex-col bg-white space-y-4 shadow-2xl">
            <h1 className="w-full text-white font-sans xs:text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.3rem] font-bold animate-pulse">Delete User</h1>
            {
                message && (
                    <div className={`w-full break-words p-4 rounded-xl xs:text-[0.6rem] sm:text-[0.8rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem] ${errorMsg ? "text-red-600 bg-red-50" : "text-green-600 bg-green-50"}`}>
                        <button type="button" className="text-red-700 bg-white text-3xl w-8 h-fit shadow-2xl z-50 rounded-full mr-[2rem] font-sans font-bold cursor-pointer" title="cancel" onClick={() => setMessage("")} aria-label="cancel">&times;</button>
                        {message}
                    </div>
                )
            }
            <div className="flex flex-row items-center justify-between">
                <DeleteUserCustomDropDown handleSelected={handleSelected}/>
                <button type="submit" className="bg-white shadow-2xl border border-red-600 text-red-600 w-[40%] rounded-lg font-bold font-sans outline-none text-center p-2 xs:text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem]">
                    {
                        loading ? (
                            <div>
                                <>
                                <div className="text-red-600 text-center break-words font-sans animate-pulse xs:text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem]">Deleting...</div>
                                </>
                            </div>
                        ) : (
                            <div className="text-center font-bold font-sans xs:text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem]">
                                Delete
                            </div>
                        )
                    }
                </button>
            </div>
        </form>
    );
};
export default DeleteUserDom;