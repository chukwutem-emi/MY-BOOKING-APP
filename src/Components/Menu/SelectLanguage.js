import React from "react";
import { SUPPORTED_LANGUAGES } from "../../Utils/constants";
import { useDispatch } from "react-redux";
import { changeLanguageKey } from "../../Utils/LanguageSlice";

const SelectLanguage = () => {
    const dispatch = useDispatch();
    const handleChangeLanguage = (event) => {
        dispatch(changeLanguageKey(event.target.value));
    };
    return (
        <>
         <div className="flex flex-col">
             <div className="flex flex-col space-y-4 relative">
                <label htmlFor="language-selector" className="sr-only"><strong>Select-language</strong></label>
                <select id="language-selector" onChange={handleChangeLanguage} className="bg-blue-950 outline-none text-white text-2xl font-sans absolute rounded-md p-4 xs:p-2 xs:text-[0.8rem] xs:font-bold sm:p-6 sm:text-lg sm:font-bold md:p-7 md:text-xl md:font-extrabold lg:p-8 lg:text-2xl lg:font-extrabold xl:p-0 xl:text-3xl xl:font-extrabold">
                    <option value={""} disabled>
                        Choose language
                    </option>
                    {
                        SUPPORTED_LANGUAGES.map((lang) => (
                            <option key={lang.identifier} value={lang.identifier} className="text-white font-sans shadow-2xl z-50 xs:text-[0.6875rem] xs:bg-gray-500 sm:text-xs sm:bg-gray-500 md:text-sm md:bg-gray-500 lg:text-sm lg:bg-gray-500 xl:text-lg xl:bg-gray-500">{lang.name}</option>
                        ))
                    }
                </select>     
                     </div>
                     <p className="animate-bounce text-yellow-300 font-extrabold
                     xs:text-[0.7rem] sm:text-sm md:text-lg lg:text-lg xl:text-lg 2xl:text-xl mt-[5rem] xs:mt-[3rem] sm:mt-[5rem] lg:mt-[6rem] xl:mt-[5rem]">Select👆your preferred language.</p>
         </div>
        </>
    );
};
export default SelectLanguage;