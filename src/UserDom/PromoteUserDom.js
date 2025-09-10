import React from "react";
import Spinner from "../Utils/Spinner";
import PromoteUserInputField from "./PromoteUserInputField";


const PromoteUserDom = ({emailRef, codeRef, message, setMessage, isLoading, handleClearMsg, handleUserPromotion, errorMsg}) => {
    return (
        <form onSubmit={handleUserPromotion} className="w-full mb-[2rem] xs:w-[80%] sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[50%] mx-auto p-6 rounded-2xl flex flex-col bg-black space-y-4 shadow-2xl">
            <h1 className="w-full text-white font-sans xs:text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.3rem]">Promote User To An Admin-User</h1>
            {
                message && (
                    <div className={`w-full break-words p-4 rounded-xl xs:text-[0.6rem] sm:text-[0.8rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem] ${errorMsg ? "text-red-600 bg-red-50" : "text-green-600 bg-green-50"}`}>
                        <button type="button" className="text-red-700 bg-white text-3xl w-8 h-fit shadow-2xl z-50 rounded-full mr-[2rem] font-sans font-bold cursor-pointer" title="cancel" onClick={() => setMessage("")} aria-label="cancel">&times;</button>
                        {message}
                    </div>
                )
            }
            <PromoteUserInputField
            autoComplete="email"
            handleClearMsg={handleClearMsg}
            id="email_address"
            inputRef={emailRef}
            label="User Email-Address:"
            placeholder="Please enter the user email address"
            type="email"
            />
            <PromoteUserInputField
            autoComplete="on"
            handleClearMsg={handleClearMsg}
            id="code"
            inputRef={codeRef}
            label="Access Code:"
            placeholder="Please enter the ACCESS-CODE"
            type="text" 
            />
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