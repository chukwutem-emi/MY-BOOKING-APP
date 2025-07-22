import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import lang from "../Utils/multiLanguageConfig";

const HealthCareAppointment = () => {
    const lanKey = useSelector((store) => store.config?.lang)
    const healthcare = [
        {
            title:lang[lanKey]?.healthcareAppointment?.vaccinationTitle,
            description:lang[lanKey]?.healthcareAppointment?.vaccinationDescription,
            book:lang[lanKey]?.healthcareAppointment?.vaccinationBooking,
            link:""
        },
        {
            title:lang[lanKey]?.healthcareAppointment?.consultationTitle,
            description:lang[lanKey]?.healthcareAppointment?.consultationDescription,
            book:lang[lanKey]?.healthcareAppointment?.consultationBooking,
            link:""
        },
        {
            title:lang[lanKey]?.healthcareAppointment?.counselingTitle,
            description:lang[lanKey]?.healthcareAppointment?.counselingDescription,
            book:lang[lanKey]?.healthcareAppointment?.counselingBooking,
            link:""
        },
        {
            title:lang[lanKey]?.healthcareAppointment?.dentalTitle,
            description:lang[lanKey]?.healthcareAppointment?.dentalDescription,
            book:lang[lanKey]?.healthcareAppointment?.dentalBooking,
            link:""
        },
        {
            title:lang[lanKey]?.healthcareAppointment?.physiotherapyTitle,
            description:lang[lanKey]?.healthcareAppointment?.physiotherapyDescription,
            book:lang[lanKey]?.healthcareAppointment?.physiotherapyBooking,
            link:""
        },
    ];
    return (
        <div className="relative flex flex-row shadow-xl overflow-x-auto whitespace-normal w-full h-[20rem] p-4 space-x-4">
            <div className="absolute top-0 left-0 h-full w-8 flex items-center justify-center cursor-pointer z-40">
                <span className="text-black text-5xl font-extrabold">&larr;</span>
            </div>
            {
                healthcare.map((item, index) => (
                    <Link to={item.link} key={index} className="rounded-xl break-words cursor-pointer bg-gray-500 p-2 flex-shrink-0 xs:w-[95%] sm:w-[60%] md:w-[60%] lg:w-[40%] xl:w-[50%] h-full xs:p-4 hover:p-8">
                        <h2 className="text-lg font-sans bg-white p-1 w-fit rounded-md text-blue-900 font-bold m-[0.5rem] xs:text-sm xs:font-extrabold sm:text-lg sm:font-bold md:font-extrabold md:text-lg lg:text-lg lg:font-bold xl:font-extrabold xl:text-xl">
                            {item.title}
                        </h2>
                        <p className="text-white text-base
                        m-[0.5rem] font-semibold font-sans xs:text-base sm:text-base md:text-base lg:text-base xl:text-base">
                            {item.description}
                        </p>
                        <p className="text-white font-bold text-center animate-pulse mt-4 xs:mt-1 sm:text-lg sm:p-2 sm:m-6 md:text-lg md:font-extrabold md:m-10 lg:m-10 lg:p-1 xl:text-xl xl:font-extrabold xl:m-15 xl:p-1">
                            {item.book}
                        </p>
                    </Link>
                ))
            };
            <div className="absolute top-0 right-0 h-full w-8 flex items-center justify-center cursor-pointer z-40">
                <span className="text-black text-5xl font-extrabold">&rarr;</span>
            </div>
        </div>
    );
};
export default HealthCareAppointment;