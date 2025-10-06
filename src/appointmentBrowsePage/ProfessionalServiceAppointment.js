import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import lang from "../Utils/multiLanguageConfig";

const ProfessionalService = forwardRef((props, ref) => {
    const lanKey = useSelector((store) => store.config?.lang);

    const[currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef(null);

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

    const scrollToIndex = (index) => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const card      = container.children[index];
            if (card) {
                container.scrollTo({left:card.offsetLeft - container.offsetLeft, behavior:"smooth"});
            };
        };
    };

    const handleNext = () => {
        if (currentIndex < services.length - 1) {
            const newIndex = currentIndex + 1;
            setCurrentIndex(newIndex);
            scrollToIndex(newIndex);
        };
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            const newIndex = currentIndex - 1;
            setCurrentIndex(newIndex);
            scrollToIndex(newIndex);
        };
    };

    useImperativeHandle(ref, () => ({
        index : currentIndex,
        next  : handleNext,
        prev  : handlePrev,
        max   : services.length - 1
    }));

    return (
        <div ref={scrollRef} className="relative flex flex-row w-full h-[25rem] whitespace-normal overflow-x-hidden space-x-4 snap-x snap-mandatory px-12">
            {
                services.map((item) => (
                    <Link to={item.link} key={item.title} className="w-full bg-gradient-to-r from-emerald-600 to-amber-400 flex-shrink-0 p-2 h-full rounded-xl shadow-lg snap-center">
                    <h2 className="text-gray-900 bg-amber-400 border-[2px] border-gray-100 text-lg font-extrabold font-sans p-1 rounded-lg w-fit m-[0.5rem] xs:text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg">{item.title}</h2>
                    <p className="text-base m-[0.5rem] text-gray-700 font-extrabold  font-sans">{item.description}</p>
                    <p className="text-gray-700 font-bold text-center animate-pulse mt-4 xs:mt-0 sm:text-lg sm:p-2 sm:m-10 md:m-10 lg:m-10 xl:m-10 md:text-lg md:font-extrabold  lg:p-1 xl:text-xl xl:font-extrabold xl:p-1">{item.book}</p>
                    </Link>
                ))
            }
        </div>
    );
});
export default ProfessionalService;