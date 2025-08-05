import React from "react";
import { useSelector } from "react-redux";
import lang from "../Utils/multiLanguageConfig";

const HomePage = () => {
    const lanKey = useSelector((store) => store.config?.lang)
    const details = {
        description:lang[lanKey]?.homePageDescription
    };
    return (
        <div className="w-full px-4 shadow-xl bg-gray-200 border-[2rem] border-gray-300">
            <p className="text-base sm:text-lg font-sans text-blue-500 font-semibold p-4 rounded-xl text-start">{details?.description}</p>
        </div>
    );
};
export default HomePage;