import React from "react";
import { useSelector } from "react-redux";
import lang from "../Utils/multiLanguageConfig";

const MainContainer = () => {
    const lanKey = useSelector((store) => store.config?.lang);
    const projectDescription = {
        description:lang[lanKey]?.descriptionOfProject
    }
    return (
        <div>
            <p className="mt-[1rem] w-[95%] mx-auto text-base font-sans font-semibold text-center  text-gray-700 bg-gradient-to-r from-emerald-100 to-amber-50 shadow-xl p-6 xs:font-bold sm:text-extrabold">{projectDescription?.description}</p>
        </div>
    );
};
export default MainContainer;