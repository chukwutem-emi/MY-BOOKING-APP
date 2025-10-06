import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import lang from "../Utils/multiLanguageConfig";

const HealthCareAppointment = forwardRef((props, ref) => {
    const lanKey = useSelector((store) => store.config?.lang);

    const[currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef(null);

    const healthcare = [
        {
            title:lang[lanKey]?.healthcareAppointment?.vaccinationTitle,
            description:lang[lanKey]?.healthcareAppointment?.vaccinationDescription,
            book:lang[lanKey]?.healthcareAppointment?.vaccinationBooking,
            link:"/vaccination"
        },
        {
            title:lang[lanKey]?.healthcareAppointment?.consultationTitle,
            description:lang[lanKey]?.healthcareAppointment?.consultationDescription,
            book:lang[lanKey]?.healthcareAppointment?.consultationBooking,
            link:"/consultation"
        },
        {
            title:lang[lanKey]?.healthcareAppointment?.counselingTitle,
            description:lang[lanKey]?.healthcareAppointment?.counselingDescription,
            book:lang[lanKey]?.healthcareAppointment?.counselingBooking,
            link:"/counseling"
        },
        {
            title:lang[lanKey]?.healthcareAppointment?.dentalTitle,
            description:lang[lanKey]?.healthcareAppointment?.dentalDescription,
            book:lang[lanKey]?.healthcareAppointment?.dentalBooking,
            link:"/dental"
        },
        {
            title:lang[lanKey]?.healthcareAppointment?.physiotherapyTitle,
            description:lang[lanKey]?.healthcareAppointment?.physiotherapyDescription,
            book:lang[lanKey]?.healthcareAppointment?.physiotherapyBooking,
            link:"/physiotherapy"
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
        if (currentIndex < healthcare.length -1) {
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
        max   : healthcare.length - 1
    }));
    
    return (
        <div ref={scrollRef} className="relative flex flex-row shadow-xl overflow-x-hidden whitespace-normal w-full h-[24rem] p-4 space-x-4 snap-x snap-mandatory px-12">
            {
                healthcare.map((item) => (
                    <Link to={item.link} key={item.title} className="rounded-xl break-words cursor-pointer bg-gradient-to-r from-emerald-600 to-amber-400 p-2 flex-shrink-0 w-full h-full space-x-4 snap-center xs:p-2">
                        <h2 className="text-lg font-sans bg-amber-400 border-[2px] border-gray-100 p-1 w-fit rounded-md text-gray-900 font-bold m-[0.5rem] xs:text-sm xs:font-extrabold sm:text-lg sm:font-bold md:font-extrabold md:text-lg lg:text-lg lg:font-bold xl:font-extrabold xl:text-xl">
                            {item.title}
                        </h2>
                        <p className="text-gray-700 font-extrabold text-base
                        m-[0.5rem] font-sans xs:text-base sm:text-base md:text-base lg:text-base xl:text-base">
                            {item.description}
                        </p>
                        <p className="text-gray-700 font-bold text-center animate-pulse mt-4 xs:mt-1 sm:text-lg sm:p-2 sm:m-6 md:text-lg md:font-extrabold md:m-10 lg:m-10 lg:p-1 xl:text-xl xl:font-extrabold xl:m-15 xl:p-1">
                            {item.book}
                        </p>
                    </Link>
                ))
            };
        </div>
    );
});
export default HealthCareAppointment;