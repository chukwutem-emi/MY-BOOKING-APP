import React from "react";
import Spinner from "../Utils/Spinner";
import UsersCustomDropDown from "./UsersCustomDropDown";


const PromoteUserDom = ({message, setMessage, isLoading, handleUserPromotion, errorMsg, handleSelected}) => {
    return (
        <form onSubmit={handleUserPromotion} className="w-[80%] mb-[2rem] xl:w-[50%] mx-auto p-6 rounded-2xl flex flex-col bg-black space-y-4 shadow-2xl">
            <h1 className="w-full text-white font-sans xs:text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.3rem]">Promote User To An Admin-User</h1>
            {
                message && (
                    <div className={`w-full break-words p-4 rounded-xl xs:text-[0.6rem] sm:text-[0.8rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem] ${errorMsg ? "text-red-600 bg-red-50" : "text-green-600 bg-green-50"}`}>
                        <button type="button" className="text-red-700 bg-white text-3xl w-8 h-fit shadow-2xl z-50 rounded-full mr-[2rem] font-sans font-bold cursor-pointer" title="cancel" onClick={() => setMessage("")} aria-label="cancel">&times;</button>
                        {message}
                    </div>
                )
            }
            <UsersCustomDropDown handleSelected={handleSelected}/>
            <button type="submit" className="bg-red-900 hover:bg-red-700 text-white w-full p-2 rounded-lg font-bold font-sans outline-none">
                {
                    isLoading ? (
                        <div className="flex flex-row justify-between">
                            <>
                            <Spinner />
                            <div className="text-white break-words font-sans animate-pulse xs:ml-[6rem] sm:ml-[6rem] md:ml-[6rem] lg:ml-[10rem] xl:ml-[12rem]">Processing...</div>
                            </>
                        </div>
                    ) : (
                        <div className="text-center font-bold font-sans xs:text-[1.3rem] sm:text-[1.4rem] md:text-[1.4rem] lg:text-[1.5rem] xl:text-[1.5rem]">
                            Submit
                        </div>
                    )
                }
            </button>
        </form>
    );
};
export default PromoteUserDom;