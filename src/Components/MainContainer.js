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
            <p className="mt-[1rem] w-[95%] my-0 mx-auto text-base font-sans font-semibold text-center  text-blue-500 shadow-xl p-6 xs:font-bold sm:text-extrabold">{projectDescription?.description}</p>
        </div>
    );
};
export default MainContainer;