import { useEffect, useState } from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import React from "react";
import lang from "../../Utils/multiLanguageConfig";
import { useSelector } from "react-redux";
import HomePage from "../HomePageDetails";

const AuthForm = () => {
    const[isSignup, setIsSignup] = useState(false);
    const[message, setMessage] = useState("");
    const[isError, setIsError] = useState(false);
    const langKey = useSelector((store) => store.config?.lang);

    useEffect(() => {
        if (message) {
            window.scrollTo({top:0, behavior:"smooth"})
        }
    }, [message])
    return (
        <>
        <div className="min-h-screen w-full overflow-x-hidden flex flex-col items-center px-4 bg-white py-6">
            <HomePage />
            <div className="mt-12 w-full max-w-md bg-black opacity-70 p-2 rounded-xl xs:w-[90%]">
                <h2 className="text-left font-bold text-white mb-6 ml-10 mt-10 text-3xl">
                    {isSignup ? lang[langKey]?.authLanguageConfig?.isSignup: lang[langKey]?.authLanguageConfig?.isLogin}
                </h2>
                {message && (
                    <div className={`mb-4 p-3 rounded text-sm break-words ${isError ? "bg-red-100 text-red-700" : "text-green-700 bg-white"}`}>
                        <button className="text-xl font-bold px-2 rounded hover:bg-gray-300 bg-blue-500 text-white" onClick={() => setMessage(null)} title="cancel">
                            &times;
                        </button>
                        <span>{message}</span>
                    </div>
                )}
                {isSignup ? (
                    <SignupForm setMessage={setMessage} setIsError={setIsError} />
                ) : (
                    <LoginForm setMessage={setMessage} setIsError={setIsError} />
                )}
                <p className="mt-4 text-center text-md text-white">
                    {isSignup ? lang[langKey]?.authLanguageConfig?.paragraphTextAlready : lang[langKey]?.authLanguageConfig?.paragraphTextDonT}{" "}
                    <button onClick={() => setIsSignup(!isSignup)} className="text-white hover:underline font-extrabold">
                        {isSignup ? lang[langKey]?.authLanguageConfig?. buttonInnerTextLogin : lang[langKey]?.authLanguageConfig?.buttonInnerTextSignup}
                    </button>
                </p>
            </div>  
        </div>
        </>
    )
};
export default AuthForm;