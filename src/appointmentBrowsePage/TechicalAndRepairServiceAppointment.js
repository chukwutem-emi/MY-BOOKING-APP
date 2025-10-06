import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import lang from "../Utils/multiLanguageConfig";

const TechnicalRepair = forwardRef((props, ref) => {
    const lanKey = useSelector((store) => store.config?.lang);

    const[currentIndex, setCurrentIndex] = useState(0);

    const scrollRef = useRef(null);

    const technical = [
        {
            title:lang[lanKey]?.technicalAppointment?.electricalElectronicsTitle,
            description:lang[lanKey]?.technicalAppointment?.electricalElectronicsDescription,
            book:lang[lanKey]?.technicalAppointment?.electricalElectronicsBooking,
            link:"/electrical"
        },
        {
            title:lang[lanKey]?.technicalAppointment?.homeServiceTitle,
            description:lang[lanKey]?.technicalAppointment?.homeServiceDescription,
            book:lang[lanKey]?.technicalAppointment?.homeServiceBooking,
            link:"/home-service"
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
        if (currentIndex < technical.length - 1) {
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
        max   : technical.length - 1
    }));

    return (
        <div ref={scrollRef} className="relative flex w-full h-[25rem] whitespace-normal space-x-4 overflow-x-hidden snap-x snap-mandatory px-12">
            {
                technical.map((item) => (
                    <Link to={item.link} key={item.title} className="bg-gradient-to-r from-emerald-600 to-amber-400 shadow-xl rounded-xl flex-shrink-0 p-2 w-full snap-center">
                        <h2 className="text-gray-900 bg-amber-400 border-[2px] border-gray-100 text-lg font-extrabold font-sans p-1 rounded-lg w-fit m-[0.5rem] xs:text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg">
                            {item.title}
                        </h2>
                        <p className="text-base m-[0.5rem] text-gray-700 font-extrabold font-sans">
                            {item.description}
                        </p>
                        <p className="text-gray-700 font-bold text-center animate-pulse mt-4 xs:mt-1 sm:text-lg sm:p-2 sm:m-10 md:m-10 lg:m-10 xl:m-10 md:text-lg md:font-extrabold  lg:p-1 xl:text-xl xl:font-extrabold xl:p-1">
                            {item.book}
                        </p>
                    </Link>
                ))
            }
        </div>
    );
});
export default TechnicalRepair;