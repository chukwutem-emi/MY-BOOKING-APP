import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import lang from "../Utils/multiLanguageConfig";

const TechnicalRepair = () => {
    const lanKey = useSelector((store) => store.config?.lang)
    const technical = [
        {
            title:lang[lanKey]?.technicalAppointment?.electricalElectronicsTitle,
            description:lang[lanKey]?.technicalAppointment?.electricalElectronicsDescription,
            book:lang[lanKey]?.technicalAppointment?.electricalElectronicsBooking,
            link:""
        },
        {
            title:lang[lanKey]?.technicalAppointment?.homeServiceTitle,
            description:lang[lanKey]?.technicalAppointment?.homeServiceDescription,
            book:lang[lanKey]?.technicalAppointment?.homeServiceBooking,
            link:""
        },
    ];
    return (
        <div className="relative flex w-full h-[20rem] whitespace-normal space-x-4 overflow-x-auto p-4">
            <div className="absolute top-0 left-0 z-50 flex justify-center items-center h-full w-8 cursor-pointer">
                <span className="font-extrabold text-black text-5xl"><strong>&larr;</strong></span>
            </div>
            {
                technical.map((item) => (
                    <Link to={item.link} key={item.title} className="bg-gray-500 shadow-xl rounded-xl flex-shrink-0 p-4 w-[50%] xs:w-[90%] sm:w[80%] md:w-[80%] lg:w-[80%] xl:w-[50%] hover:p-8">
                        <h2 className="text-blue-900 text-lg font-extrabold font-sans bg-white p-1 rounded-lg w-fit m-[0.5rem] xs:text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg">
                            {item.title}
                        </h2>
                        <p className="text-base m-[0.5rem] text-white font-sans">
                            {item.description}
                        </p>
                        <p className="text-white font-bold text-center animate-pulse mt-4 xs:mt-1 sm:text-lg sm:p-2 sm:m-10 md:m-10 lg:m-10 xl:m-10 md:text-lg md:font-extrabold  lg:p-1 xl:text-xl xl:font-extrabold xl:p-1">
                            {item.book}
                        </p>
                    </Link>
                ))
            }
            <div className="absolute top-0 right-0 z-50 flex justify-center items-center h-full w-8 cursor-pointer">
                <span className="font-extrabold text-black text-5xl"><strong>&rarr;</strong></span>
            </div>
        </div>
    );
};
export default TechnicalRepair;