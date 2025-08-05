import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SUPPORTED_LANGUAGES } from "../Utils/constants";
import { changeLanguageKey } from "../Utils/LanguageSlice";
import NetworkStatus from "./UserOnlineAndOfflineStatus";
import { removeAccessToken } from "../Utils/tokenSlice";
import { useNavigate } from "react-router-dom";
import ActivitiesDropDownMenu from "./ActivitiesDropDownMenu";

const Header = () => {
    const[isLogin, setIsLogin] = useState("Logout");
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const dispatchLogOut = useDispatch();
    const handleChangeLanguage = (event) => {
        dispatch(changeLanguageKey(event.target.value));
    };
   useEffect(() => {
        if (isLogin === "Login") {
            logOut();
        }
   }, [isLogin])
   const logOut = () => {
    dispatchLogOut(removeAccessToken());
    setTimeout(() => {
        navigate("/"); 
    }, 3000);
   }
    return (
        <div className="top-0 right-0 left-0 fixed justify-between shadow-lg z-40 flex  flex-row flex-nowrap p-4 xs:p-4 sm:p-8 md:p-8 lg:p-10 xl:p-12 bg-gray-600  md:flex-row md:mx-0 w-full">
            <div className="flex flex-col space-y-4">
                <label htmlFor="language-selector" className="sr-only"><strong>Select-language</strong></label>
                <select id="language-selector" onChange={handleChangeLanguage} className="bg-blue-950 text-white text-2xl font-sans rounded-md p-4 xs:p-2 xs:text-[0.8rem] xs:font-bold sm:p-6 sm:text-lg sm:font-bold md:p-7 md:text-xl md:font-extrabold lg:p-8 lg:text-2xl lg:font-extrabold xl:p-0 xl:text-3xl xl:font-extrabold">
                    {
                        SUPPORTED_LANGUAGES.map((lang) => (
                            <option key={lang.identifier} value={lang.identifier} className="text-white font-sans xs:text-[0.6875rem] xs:bg-gray-500 sm:text-xs sm:bg-gray-500 md:text-sm md:bg-gray-500 lg:text-sm lg:bg-gray-500 xl:text-lg xl:bg-gray-500">{lang.name}</option>
                        ))
                    }
                </select>
            </div>
            <p className="animate-bounce text-yellow-300 font-extrabold fixed z-50
            xs:text-[0.8rem] sm:text-sm md:text-lg lg:text-lg xl:text-lg 2xl:text-xl mt-[5rem] xs:mt-[3rem] sm:mt-[5rem] lg:mt-[6rem] xl:mt-[5rem]">Select👆your preferred language.</p>
            <button onClick={() => {isLogin === "Logout" ? setIsLogin("Login") : setIsLogin("Login")}} className="bg-blue-950 text-white text-center items-center font-sans font-extrabold h-10 p-2 mt-5 xs:text-[0.8rem] xl:text-2xl">{isLogin}</button>
            <NetworkStatus />
            <ActivitiesDropDownMenu />
        </div>
    )
};
export default Header;