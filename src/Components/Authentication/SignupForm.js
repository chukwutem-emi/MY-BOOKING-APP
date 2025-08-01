import { useRef, useState } from "react";
import { SIGN_UP_URL } from "../../Utils/constants";
import React from "react";
import Spinner from "../../Utils/Spinner";
import { useDispatch, useSelector } from "react-redux";
import lang from "../../Utils/multiLanguageConfig";
import { addUserPassword } from "../../Utils/getUserSlice";

const SignupForm = ({setMessage, setIsError}) => {
    const langKey = useSelector((store) => store.config?.lang)
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const phoneRef = useRef(null);
    const[loading, setLoading] = useState(false);
    const dispatchPassword = useDispatch();

    const handleSignup = async(e) => {
        e.preventDefault();
        setLoading(true)
        console.log("Signup form submitted!");
        console.log("PASSWORD:", passwordRef)
        const payload = {
            username:usernameRef.current.value,
            email_address:emailRef.current.value,
            password:passwordRef.current.value,
            phone_number:phoneRef.current.value,
        };
        dispatchPassword(addUserPassword(password));
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
                <label htmlFor="username" className="text-red-400 font-sans font-bold text-xl xs:text-lg sm:text-xl md:text-xl"><strong>{lang[langKey]?.signUpLanguageConfig?.inputUsernameLabel}</strong></label>
                <input
                id="username"
                ref={usernameRef}
                type="text"
                placeholder={lang[langKey]?.signUpLanguageConfig?.userNamePlaceholder}
                name="username"
                autoComplete="on"
                className="w-full rounded-md outline-none bg-gray-700 p-4 text-white font-sans text-lg"
                required
                />
                <label htmlFor="email_address" className="text-red-400 font-sans font-bold text-xl xs:text-lg sm:text-xl md:text-xl"><strong>{lang[langKey]?.signUpLanguageConfig?.inputEmailLabel}</strong></label>
                <input
                id="email_address"
                ref={emailRef}
                type="email"
                placeholder={lang[langKey]?.signUpLanguageConfig?.emailAddressPlaceholder}
                name="email_address"
                autoComplete="email"
                className="w-full rounded-sm outline-none bg-gray-700 p-4 text-white font-sans text-lg"
                required
                />
                <label htmlFor="password" className="text-red-400 font-sans font-bold text-xl xs:text-lg sm:text-xl md:text-xl"><strong>{lang[langKey]?.signUpLanguageConfig?.inputPasswordLabel}</strong></label>
                <input
                id="password"
                ref={passwordRef}
                type="password"
                placeholder={lang[langKey]?.signUpLanguageConfig?.passwordPlaceholder}
                name="password"
                className="w-full outline-none bg-gray-700 p-4 text-white font-sans text-lg"
                required
                />
                <label htmlFor="phone_number" className="text-red-400 font-sans font-bold text-xl xs:text-lg sm:text-xl md:text-xl "><strong>{lang[langKey]?.signUpLanguageConfig?.inputPhoneLabel}</strong></label>
                <input
                id="phone_number"
                ref={phoneRef}
                type="text"
                placeholder={lang[langKey]?.signUpLanguageConfig?.phoneNumber}
                name="phone_number"
                className="w-full rounded-md outline-none bg-gray-700 p-4 text-white font-sans text-lg"
                required
                />
                <button
                type="submit"
                className="bg-red-400 w-full text-center text-white font-bold text-xl p-4 font-sans rounded-md outline-none hover:bg-red-300 break-words" disabled={loading}
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