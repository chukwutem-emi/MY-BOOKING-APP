import { useRef, useState } from "react";
import { SIGN_UP_URL } from "../../Utils/constants";
import React from "react";
import Spinner from "../../Utils/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { addPassword } from "../../Utils/profileSlice";
import lang from "../../Utils/multiLanguageConfig";
import Header from "../Header";

const SignupForm = ({setMessage, setIsError}) => {
    const dispatchPassword = useDispatch();
    const langKey = useSelector((store) => store.config?.lang)
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const phoneRef = useRef(null);
    const[loading, setLoading] = useState(false);

    const handleSignup = async(e) => {
        e.preventDefault();
        setLoading(true)
        console.log("Signup form submitted!");

        const payload = {
            username:usernameRef.current.value,
            email_address:emailRef.current.value,
            password:passwordRef.current.value,
            phone_number:phoneRef.current.value,
        };
        dispatchPassword(addPassword(payload?.password));
        try {
            const data = await fetch(SIGN_UP_URL, {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(payload),
            });
            const json = await data.json();
            console.log("DATA:", data)
            console.log("JSON:", json)
            !json && setMessage("No response")

            if (data.status === 201) {
                setMessage(json.success || "✔️ Registration successful!");
                setIsError(false);
            } else {
                const [key] = Object.keys(json);
                setMessage(json[key] || "❌ Invalid input");
                setIsError(true);
            }
        } catch(error) {
            setMessage("❌ Network error or server not responding!");
            setIsError(true);
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="p-4">
            <form onSubmit={handleSignup} className="space-y-4">
                <label htmlFor="username" className="text-blue-700 font-sans font-bold text-xl xs:text-lg sm:text-xl md:text-xl"><strong>{lang[langKey]?.signUpLanguageConfig?.inputUsernameLabel}</strong></label>
                <input
                id="username"
                ref={usernameRef}
                type="text"
                placeholder={lang[langKey]?.signUpLanguageConfig?.userNamePlaceholder}
                name="username"
                className="w-full px-4 py-2 rounded-md outline-none border-[1px] border-blue-300"
                required
                />
                <label htmlFor="email_address" className="text-blue-700 font-sans font-bold text-xl xs:text-lg sm:text-xl md:text-xl"><strong>{lang[langKey]?.signUpLanguageConfig?.inputEmailLabel}</strong></label>
                <input
                id="email_address"
                ref={emailRef}
                type="email"
                placeholder={lang[langKey]?.signUpLanguageConfig?.emailAddressPlaceholder}
                name="email_address"
                className="w-full px-4 py-2 rounded-sm outline-none border-[1px] border-blue-300"
                required
                />
                <label htmlFor="password" className="text-blue-700 font-sans font-bold text-xl xs:text-lg sm:text-xl md:text-xl"><strong>{lang[langKey]?.signUpLanguageConfig?.inputPasswordLabel}</strong></label>
                <input
                id="password"
                ref={passwordRef}
                type="password"
                placeholder={lang[langKey]?.signUpLanguageConfig?.passwordPlaceholder}
                name="password"
                className="w-full px-4 py-2 outline-none border-[1px] border-blue-300 rounded-md"
                required
                />
                <label htmlFor="phone_number" className="text-blue-700 font-sans font-bold text-xl xs:text-lg sm:text-xl md:text-xl "><strong>{lang[langKey]?.signUpLanguageConfig?.inputPhoneLabel}</strong></label>
                <input
                id="phone_number"
                ref={phoneRef}
                type="text"
                placeholder={lang[langKey]?.signUpLanguageConfig?.phoneNumber}
                name="phone_number"
                className="w-full px-4 py-2 rounded-md outline-none border-[1px] border-blue-300"
                required
                />
                <button
                type="submit"
                className="bg-blue-950 w-full text-center text-white font-bold text-lg p-2 font-sans rounded-md outline-none hover:bg-blue-600" disabled={loading}
                >
                    {loading ? (
                        <>
                        <Spinner />
                        {lang[langKey]?.signUpLanguageConfig?.buttonInnerText}
                        </>
                    ) : (
                        lang[langKey]?.signUpLanguageConfig?.signUp
                    )}
                </button>
            </form>
        </div>
    );
};
export default SignupForm;