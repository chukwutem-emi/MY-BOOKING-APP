import React, { useState } from "react";
import SignUpInputField from "./SignUpInputField";
import lang from "../Utils/multiLanguageConfig";
import { MdToggleOff, MdToggleOn } from "react-icons/md";
import Spinner from "../Utils/Spinner";

const SignUpDom = ({usernameRef, emailRef, passwordRef, phoneRef, langKey, loading, handleClearMsg, handleSignupForm}) => {
    const[showPassword, setShowPassword] = useState(false);

    return (
        <form onSubmit={handleSignupForm} className="space-y-4 mb-[2rem] w-[90%] mx-auto">
            <SignUpInputField
            autoComplete="on"
            handleClearMsg={handleClearMsg}
            id="username"
            inputRef={usernameRef}
            label={lang[langKey]?.signUpLanguageConfig?.inputUsernameLabel}
            placeholder={lang[langKey]?.signUpLanguageConfig?.userNamePlaceholder}
            type="text" 
            />
            <SignUpInputField
            autoComplete="email"
            handleClearMsg={handleClearMsg}
            id="email_address"
            inputRef={emailRef}
            label={lang[langKey]?.signUpLanguageConfig?.inputEmailLabel}
            placeholder={lang[langKey]?.signUpLanguageConfig?.emailAddressPlaceholder}
            type="email" 
            />
            <SignUpInputField
            autoComplete="off"
            handleClearMsg={handleClearMsg}
            id="password"
            inputRef={passwordRef}
            label={lang[langKey]?.signUpLanguageConfig?.inputPasswordLabel}
            placeholder={lang[langKey]?.signUpLanguageConfig?.passwordPlaceholder}
            type={showPassword ? "text" : "password"} 
            />
            <div onClick={() => setShowPassword(!showPassword)} className="flex flex-row text-white">
                <div>
                    {
                        showPassword ? <MdToggleOn color="green" size={60}/> : <MdToggleOff color="red" size={60}/>
                    }
                </div>
                <div className="mt-[1rem]">{lang[langKey]?.loginLanguageConfig?.checkBoxInnerText}</div>
            </div>
            <SignUpInputField
            autoComplete="tel"
            handleClearMsg={handleClearMsg}
            id="phone_number"
            inputRef={phoneRef}
            label={lang[langKey]?.signUpLanguageConfig?.inputPhoneLabel}
            placeholder={lang[langKey]?.signUpLanguageConfig?.phoneNumber}
            type="text" 
            />
            <button
            type="submit"
            className="bg-red-400 w-full text-white font-bold text-xl p-4 font-sans rounded-md outline-none hover:bg-red-300 break-words" disabled={loading}
            >
                {loading ? (
                    <>
                    <div className="flex flex-row justify-between">
                        <Spinner />
                        <div className="animate-pulse break-words xs:ml-[6rem] sm:ml-[6rem] md:ml-[6rem] lg:ml-[10rem] xl:ml-[12rem]">{lang[langKey]?.signUpLanguageConfig?.buttonInnerText}</div>
                    </div>
                    </>
                ) : (
                    <span className="text-center font-bold xs:text-[1.3rem] sm:text-[1.4rem] md:text-[1.4rem] lg:text-[1.5rem] xl:text-[1.5rem]">{lang[langKey]?.signUpLanguageConfig?.signUp}</span>
                )}
            </button>
        </form>
    );
};
export default SignUpDom;