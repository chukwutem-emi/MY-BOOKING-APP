import { useEffect, useRef, useState } from "react";
import { LOGIN_URL } from "../../Utils/constants";
import React from "react";
import Spinner from "../../Utils/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { addAccessToken } from "../../Utils/tokenSlice";
import { useNavigate } from "react-router-dom";
import lang from "../../Utils/multiLanguageConfig";


const LoginForm = ({setMessage, setIsError}) => {
    const[loading, setLoading] = useState(false)
    const langKey = useSelector((store) => store.config?.lang)
    const[showPassword, setShowPassword] = useState(false)
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();
        setLoading(true)
        const payload = {
            email_address:emailRef.current.value,
            password:passwordRef.current.value,
        };
        try {
            const data = await fetch(LOGIN_URL, {
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(payload),
                });
                const json = await data.json();
                console.log("JSON:", json)
                if (data.status === 200) {
                    setMessage(json.Login);
                    setIsError(false);
                    dispatch(addAccessToken(json.Token))
                    setTimeout(() => {
                        navigate("/clear-token")
                    }, 6000);
                } else {
                    const [key] = Object.keys(json);
                    setMessage(json[key] || "❌ Invalid input");
                    setIsError(true);
                }       
        } catch(error) {
            setMessage(`An error occurred or server not responding. please check internet connection or try again later. ${String(error)}`);
            setIsError(true);
        } finally {
            setLoading(false)
        }

    }
    return (
            <>
            <form onSubmit={handleLogin} className="space-y-4 w-[80%] my-0 mx-auto">
                <label htmlFor="email_address" className="text-blue-700 sr-only font-sans font-bold text-xl xs:text-lg sm:text-xl md:text-xl"><strong>{lang[langKey]?.loginLanguageConfig?.loginEmailInputLabel}</strong></label>
                <input
                id="email_address"
                ref={emailRef}
                type="email"
                placeholder={lang[langKey]?.loginLanguageConfig?.emailAddressPlaceholder}
                name="email_address"
                className="w-full p-4 rounded text-white text-lg outline-none bg-gray-700"
                required
                autoComplete="on"
                autoCorrect="on"
                />
                <div>
                    <label htmlFor="password" className="text-blue-700 sr-only text-xl font-sans font-bold xs:text-lg sm:text-xl"><strong>{lang[langKey]?.loginLanguageConfig?.loginPasswordInputLabel}</strong></label>
                    <input
                    id="password"
                    ref={passwordRef}
                    type={showPassword ? "text" : "password"}
                    placeholder={lang[langKey]?.loginLanguageConfig?.passwordPlaceholder}
                    name="password"
                    className="w-full p-4 mt-4 rounded text-white text-lg outline-none bg-gray-700"
                    required
                    autoComplete="off"
                    />
                    <p className="text-sm font-sans text-white animate-bounce mt-2 sm:text-sm xs:text-xs  md:text-lg lg:text-lg xl:text-lg 2xl:text-xl">{lang[langKey]?.loginLanguageConfig?.paragraphText}</p>
                    <label htmlFor="checkbox" className="text-sm text-white font-sans xs:text-xs">
                        <input
                        id="checkbox"
                        name="checkbox"
                        type="checkbox"
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                        className="mr-1 mt-2 cursor-pointer"
                        title={lang[langKey]?.loginLanguageConfig?.title}
                        autoComplete="off"
                        />
                        {lang[langKey]?.loginLanguageConfig?.checkBoxInnerText}
                    </label>
                </div>
                <button type="submit" className="w-full mt-4 p-2 text-lg bg-red-400 text-white font-bold rounded hover:bg-red-300 flex flex-row justify-center break-words" disabled={loading}>
                    {loading ? (
                        <>
                        <Spinner />
                       <div className="animate-pulse ml-4">{lang[langKey]?.loginLanguageConfig?.buttonInnerText}</div>
                        </>
                    ) : (
                        lang[langKey]?.loginLanguageConfig?.login
                    )}
                    </button>
            </form>
            </>
    )
};
export default LoginForm;