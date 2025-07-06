import React from "react";
import { useSelector } from "react-redux";
import lang from "../Utils/multiLanguageConfig";

const HomePage = () => {
    const lanKey = useSelector((store) => store.config?.lang)
    const details = {
        description:lang[lanKey]?.homePageDescription
    };
    return (
        <div className="max-w-4xl w-full mx-auto px-4 shadow-xl">
            <p className="text-base sm:text-lg font-sans text-blue-500 font-semibold p-4 rounded-xl text-center">{details?.description}</p>
        </div>
    );
};
export default HomePage;