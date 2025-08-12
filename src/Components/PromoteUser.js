import React, { useRef } from "react";
import usePromoteUser from "../UserCustomHooks/usePromoteUser";
import Spinner from "../Utils/Spinner";


const PromoteUser = () => {
    const emailRef = useRef(null);
    const codeRef  = useRef(null);

    const {
        handlePromoteUser : handleUserPromotionInfo,
        message,
        errorMsg,
        isLoading,
        setErrorMsg,
        setMessage
    } = usePromoteUser({payload : {}});

    const handleUserPromotion = (e) => {
        e.preventDefault();
        const payload = {
            email_address : emailRef.current.value,
            code          : codeRef.current.value
        };
        handleUserPromotionInfo(e, payload)
    };
    const handleClearMsg = () => {
        setErrorMsg(false);
        setMessage("");
    };
    return(
        <div className="w-full overflow-x-hidden mt-[15rem] items-center">
            <form onSubmit={handleUserPromotion} className="w-[50%] xs:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[50%] mx-auto p-6 rounded-2xl flex flex-col bg-black space-y-4">
                <h1 className="w-full text-white font-sans text-2xl xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] lg:text-[1.5rem] font-bold animate-pulse my-[2rem]">Promote User To An Admin-User</h1>
                {
                    message && (
                        <div className={`w-full break-words text-lg p-4 rounded-xl ${errorMsg ? "text-red-600 bg-red-100" : "text-green-600 bg-green-100"}`}>
                            <button type="button" className="text-red-700 bg-white text-3xl w-8 h-fit shadow-2xl z-50 rounded-full mr-[2rem] font-sans font-bold cursor-pointer" title="cancel" onClick={() => setMessage(null)}>&times;</button>
                            {message}
                        </div>
                    )
                }
                <label htmlFor="email_address" className="text-red-300 text-xl"><strong>User Email-Address:</strong></label>
                <input
                id="email_address"
                name="email_address"
                type="email" 
                ref={emailRef}
                placeholder="Please enter the user email address"
                className="w-full p-2 bg-gray-700 outline-none rounded-lg text-white"
                autoComplete="email"
                onChange={handleClearMsg}
                required
                />
                <label htmlFor="code" className="text-red-300 text-xl"><strong>Access Code:</strong></label>
                <input
                id="code"
                name="code"
                type="text" 
                ref={codeRef}
                placeholder="Please enter the ACCESS-CODE"
                className="w-full p-2 bg-gray-700 outline-none rounded-lg text-white"
                autoComplete="on"
                onChange={handleClearMsg}
                autoFocus
                required
                />
                <button type="submit" className="bg-red-900 hover:bg-red-700 text-white w-full text-center p-2 text-xl rounded-lg font-bold font-sans">
                    {
                        isLoading ? (
                            <div className="flex flex-row justify-center">
                                <>
                                <Spinner />
                                <div className="text-white text-lg ml-[3rem] font-sans animate-pulse">Processing!, please wait......</div>
                                </>
                            </div>
                        ) : (
                            "Submit"
                        )
                    }
                </button>
            </form>
        </div>
    )
};
export default PromoteUser;