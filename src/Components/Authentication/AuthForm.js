import { useState } from "react";
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
    return (
        <>
        <div className="min-h-screen w-full overflow-x-hidden flex flex-col items-center justify-start px-4 bg-gray-100 py-6">
            <HomePage />
            <div className="mt-12 w-full max-w-md bg-gray-400 p-2 rounded-xl shadow-lg">
                <h2 className="text-center text-xl font-bold text-blue-950 mb-6">
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
                <p className="mt-4 text-center text-md text-blue-900">
                    {isSignup ? lang[langKey]?.authLanguageConfig?.paragraphTextAlready : lang[langKey]?.authLanguageConfig?.paragraphTextDonT}{" "}
                    <button onClick={() => setIsSignup(!isSignup)} className="text-blue-950 hover:underline font-bold">
                        {isSignup ? lang[langKey]?.authLanguageConfig?. buttonInnerTextLogin : lang[langKey]?.authLanguageConfig?.buttonInnerTextSignup}
                    </button>
                </p>
            </div>
        </div>
        </>
    )
};
export default AuthForm;