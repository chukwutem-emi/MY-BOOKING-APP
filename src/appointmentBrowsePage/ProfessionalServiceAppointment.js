import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import lang from "../Utils/multiLanguageConfig";

const ProfessionalService = () => {
    const lanKey = useSelector((store) => store.config?.lang)
    const services = [
        {
            title:lang[lanKey]?.professionalServiceAppointment?.businessConsultTitle,
            description:lang[lanKey]?.professionalServiceAppointment?.businessConsultDescription,
            book:lang[lanKey]?.professionalServiceAppointment?.businessConsultBooking,
            link:"/business",
        },
        {
            title:lang[lanKey]?.professionalServiceAppointment?.financialAdvisingTitle,
            description:lang[lanKey]?.professionalServiceAppointment?.financialAdvisingDescription,
            book:lang[lanKey]?.professionalServiceAppointment?.financialAdvisingBooking,
            link:"/financial",
        },
        {
            title:lang[lanKey]?.professionalServiceAppointment?.realEstateAgentTitle,
            description:lang[lanKey]?.professionalServiceAppointment?.realEstateAgentDescription,
            book:lang[lanKey]?.professionalServiceAppointment?.realEstateAgentBooking,
            link:"/real-estate",
        },
    ];
    return (
        <div className="relative flex flex-row w-full h-[25rem] whitespace-normal overflow-x-auto p-4 space-x-4">
            <div className="absolute left-0 top-0 flex items-center justify-center w-8 z-50 h-full cursor-pointer">
                <span className="text-black font-extrabold text-5xl"><strong>&larr;</strong></span>
            </div>
            {
                services.map((item) => (
                    <Link to={item.link} key={item.title} className="w-[90%] xs:w-[80%] sm:w-[80%] md:w-[80%] lg:w-[60%] xl:w-[50%] bg-gray-500 flex-shrink-0 p-4 h-full rounded-xl shadow-lg hover:p-8">
                    <h2 className="text-blue-900 text-lg font-extrabold font-sans bg-white p-1 rounded-lg w-fit m-[0.5rem] xs:text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg">{item.title}</h2>
                    <p className="text-base m-[0.5rem] text-white font-sans">{item.description}</p>
                    <p className="text-white font-bold text-center animate-pulse mt-4 xs:mt-0 sm:text-lg sm:p-2 sm:m-10 md:m-10 lg:m-10 xl:m-10 md:text-lg md:font-extrabold  lg:p-1 xl:text-xl xl:font-extrabold xl:p-1">{item.book}</p>
                    </Link>
                ))
            }
            <div className="absolute right-0 top-0 flex items-center justify-center w-8 z-50 h-full cursor-pointer">
                <span className="text-black font-extrabold text-5xl"><strong>&rarr;</strong></span>
            </div>
        </div>
    );
};
export default ProfessionalService;