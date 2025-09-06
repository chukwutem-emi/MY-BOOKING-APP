import React from "react";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const CombinedContainer = () => {
    return (
        <div className="mt-[2rem] xs:mt-[2rem] sm:mt-[6rem] lg:mt-[4rem] md:mt-[4rem] xl:mt-[2rem]">
            <>
            <MainContainer />
            <SecondaryContainer />
            </>
        </div>
    );
};
export default CombinedContainer;