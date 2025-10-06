import React from "react";
import lang from "../Utils/multiLanguageConfig";
import Spinner from "../Utils/Spinner";
import LoginInputField from "./LoginInputField";
import { MdToggleOff, MdToggleOn } from "react-icons/md";

const LoginDom = ({handleLoginForm, emailRef, passwordRef, showPassword, setShowPassword, loading, langKey, handleClearMsg}) => {
    return (
       <form onSubmit={handleLoginForm} className="space-y-4 w-[80%] mb-[2rem] mx-auto">
            <LoginInputField
            autoComplete="on"
            id="email_address"
            inputRef={emailRef}
            label={lang[langKey]?.loginLanguageConfig?.loginEmailInputLabel}
            placeholder={lang[langKey]?.loginLanguageConfig?.emailAddressPlaceholder}
            type="text"
            handleClearMsg={handleClearMsg} 
            />
            <div>
                <LoginInputField
                autoComplete="off"
                id="password"
                inputRef={passwordRef}
                label={lang[langKey]?.loginLanguageConfig?.loginPasswordInputLabel}
                placeholder={lang[langKey]?.loginLanguageConfig?.passwordPlaceholder}
                type={showPassword ? "text" : "password"}
                handleClearMsg={handleClearMsg} 
                />
                <p className="text-sm font-sans text-gray-700 animate-bounce mt-2 sm:text-sm xs:text-xs  md:text-lg lg:text-lg xl:text-lg 2xl:text-xl">{lang[langKey]?.loginLanguageConfig?.paragraphText}</p>
                <div onClick={() => setShowPassword(!showPassword)} className="text-white flex flex-row">
                    <div>
                        {
                            showPassword ? <MdToggleOn color="green" size={60} /> : <MdToggleOff color="red" size={60} />
                        }
                    </div>
                    <div className="mt-[1rem] text-gray-700 font-bold">{lang[langKey]?.loginLanguageConfig?.checkBoxInnerText}</div>
                </div>
            </div>
            <button type="submit" className="w-full mt-4 p-2 text-lg bg-emerald-600 text-white font-bold rounded hover:bg-emerald-800 break-words outline-none" disabled={loading}>
                {loading ? (
                    <>
                    <div className="flex flex-row justify-between">
                        <Spinner />
                        <div className="animate-pulse break-words xs:ml-[6rem] sm:ml-[6rem] md:ml-[6rem] lg:ml-[10rem] xl:ml-[12rem]">{lang[langKey]?.loginLanguageConfig?.buttonInnerText}</div>
                    </div>
                    </>
                ) : (
                    <span className="text-center font-bold xs:text-[1.3rem] sm:text-[1.4rem] md:text-[1.4rem] lg:text-[1.5rem] xl:text-[1.5rem]">{lang[langKey]?.loginLanguageConfig?.login}</span>
                )}
                </button>
        </form> 
    );
};
export default LoginDom;