import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import lang from "../Utils/multiLanguageConfig";

const EducationAppointment = () => {
    const lanKey = useSelector((store) => store.config?.lang)
    const education = [
        {
          title:lang[lanKey]?.educationAppointment?.careerTitle,
          description:lang[lanKey]?.educationAppointment?.careerDescription,
          book:lang[lanKey]?.educationAppointment?.careerBooking,
          link:"/career"  
        },
        {
          title:lang[lanKey]?.educationAppointment?.academicTitle,
          description:lang[lanKey]?.educationAppointment?.academicDescription,
          book:lang[lanKey]?.educationAppointment?.academicBooking,
          link:"/academic"  
        },
        {
          title:lang[lanKey]?.educationAppointment?.oneOnOneTitle,
          description:lang[lanKey]?.educationAppointment?.oneOnOneDescription,
          book:lang[lanKey]?.educationAppointment?.oneOnOneBooking,
          link:"/tutorial"  
        },
    ];
    return (
        <div className="relative flex flex-row overflow-x-auto w-full shadow-xl h-[24rem] whitespace-normal space-x-4 p-4">
            <div className="absolute top-0 left-0 h-full w-8 flex items-center justify-center cursor-pointer z-40">
                <span className="text-black text-5xl font-extrabold">&larr;</span>
            </div> 
            {
                education.map((item) => (
                    <Link to={item.link} key={item.title} className="bg-gray-500 p-2 rounded-lg  cursor-pointer w-full xs:w-[80%] xs:p-2 sm:w-[80%] md:w-[80%] lg:w-[60%] xl:w-[50%] h-full flex-shrink-0 break-words xl:p-4 hover:p-4">
                        <h2 className="text-blue-900 bg-white font-sans font-bold w-fit p-2 rounded-md m-[0.5rem] xs:text-sm xs:font-extrabold sm:text-lg sm:font-bold md:font-extrabold md:text-lg lg:text-lg lg:font-bold xl:font-extrabold xl:text-xl">
                            {item.title}
                        </h2>
                        <p className="text-white text-base
                        m-[0.5rem] font-sans xs:text-base sm:text-base md:text-base lg:text-base xl:text-base">
                            {item.description}
                        </p>
                        <p className="text-white font-bold text-center animate-pulse mt-4 xs:mt-0 sm:text-lg sm:p-2 sm:m-8 md:text-lg md:font-extrabold md:m-8 lg:m-8 lg:p-1 xl:text-xl xl:font-extrabold xl:m-8 xl:p-1">{item.book}</p>
                    </Link>
                ))
            }
            <div className="absolute top-0 right-0 h-full w-8 flex items-center justify-center cursor-pointer z-40">
                <span className="text-black text-5xl font-extrabold">&rarr;</span>
            </div>
        </div>
    );
};
export default EducationAppointment;