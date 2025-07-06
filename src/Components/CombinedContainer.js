import React from "react";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const CombinedContainer = () => {
    return (
        <div className="mt-[10rem] xs:mt-[5rem] sm:mt-[8rem] lg:mt-[10rem]">
            <>
            <MainContainer />
            <SecondaryContainer />
            </>
        </div>
    );
};
export default CombinedContainer;