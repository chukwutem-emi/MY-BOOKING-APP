import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import lang from "../Utils/multiLanguageConfig";

const EducationAppointment = forwardRef((props, ref) => {
    const lanKey = useSelector((store) => store.config?.lang);

    const scrollRef = useRef(null);
    const[currentIndex, setCurrentIndex] = useState(0);

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
    const scrollToIndex = (index) => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const card      = container.children[index];
            if (card) {
                container.scrollTo({left:card.offsetLeft - container.offsetLeft, behavior:"smooth"})
            };
        };
    };
    const handleNext = () => {
        if (currentIndex < education.length - 1) {
            const newIndex = currentIndex + 1;
            setCurrentIndex(newIndex);
            scrollToIndex(newIndex);
        }
    };
    const handlePrev = () => {
        if (currentIndex > 0) {
            const newIndex = currentIndex - 1;
            setCurrentIndex(newIndex);
            scrollToIndex(newIndex);
        };
    };
    useImperativeHandle(ref, () => ({
        next  : handleNext,
        prev  : handlePrev,
        index : currentIndex,
        max   : education.length - 1
    }));
    return (
        <div ref={scrollRef} className="relative flex items-center overflow-x-hidden w-full shadow-xl h-[24rem] whitespace-normal space-x-4 snap-x snap-mandatory px-12">
            {
                education.map((item) => (
                    <Link to={item.link} key={item.title} className="bg-gradient-to-r from-emerald-600 to-amber-400 z-30 w-full shadow-2xl p-2 rounded-lg space-x-4  cursor-pointer h-full flex-shrink-0 snap-center break-words xl:p-4">
                        <h2 className="text-gray-900 bg-amber-400 border-[2px] border-gray-100 font-sans font-bold w-fit p-2 rounded-md m-[0.5rem] xs:text-sm xs:font-extrabold sm:text-lg sm:font-bold md:font-extrabold md:text-lg lg:text-lg lg:font-bold xl:font-extrabold xl:text-xl">
                            {item.title}
                        </h2>
                        <p className="text-gray-700 font-extrabold text-base
                        m-[0.5rem] font-sans xs:text-base sm:text-base md:text-base lg:text-base xl:text-base">
                            {item.description}
                        </p>
                        <p className="text-gray-700 animate-pulse font-bold text-center mt-4 xs:mt-0 sm:text-lg sm:p-2 sm:m-8 md:text-lg md:font-extrabold md:m-8 lg:m-8 lg:p-1 xl:text-xl xl:font-extrabold xl:m-8 xl:p-1">{item.book}</p>
                    </Link>
                ))
            }
        </div>
    );
});
export default EducationAppointment;