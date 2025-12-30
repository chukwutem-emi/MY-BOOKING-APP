import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import lang from "../Utils/multiLanguageConfig";
import { AnimatePresence, motion } from "framer-motion";

const HealthCareAppointment = () => {
    const lanKey = useSelector((store) => store.config?.lang);

    const[currentIndex, setCurrentIndex] = useState(0)
    const[direction, setDirection]       = useState(0);

    const healthcare = [
        {
            title:lang[lanKey]?.healthcareAppointment?.vaccinationTitle,
            description:lang[lanKey]?.healthcareAppointment?.vaccinationDescription,
            book:lang[lanKey]?.healthcareAppointment?.vaccinationBooking,
            link:"vaccination"
        },
        {
            title:lang[lanKey]?.healthcareAppointment?.consultationTitle,
            description:lang[lanKey]?.healthcareAppointment?.consultationDescription,
            book:lang[lanKey]?.healthcareAppointment?.consultationBooking,
            link:"consultation"
        },
        {
            title:lang[lanKey]?.healthcareAppointment?.counselingTitle,
            description:lang[lanKey]?.healthcareAppointment?.counselingDescription,
            book:lang[lanKey]?.healthcareAppointment?.counselingBooking,
            link:"counseling"
        },
        {
            title:lang[lanKey]?.healthcareAppointment?.dentalTitle,
            description:lang[lanKey]?.healthcareAppointment?.dentalDescription,
            book:lang[lanKey]?.healthcareAppointment?.dentalBooking,
            link:"dental"
        },
        {
            title:lang[lanKey]?.healthcareAppointment?.physiotherapyTitle,
            description:lang[lanKey]?.healthcareAppointment?.physiotherapyDescription,
            book:lang[lanKey]?.healthcareAppointment?.physiotherapyBooking,
            link:"physiotherapy"
        },
    ];
    
    const handleNext = () => {
            if (currentIndex  < healthcare.length -1) {
                setDirection(1)
                setCurrentIndex(currentIndex + 1)
            }
        };
    const handlePrev = () => {
        if (currentIndex > 0) {
            setDirection(-1)
            setCurrentIndex(currentIndex - 1)
        }
    };
    const variants = {
        enter : (direction) => ({
            x : direction > 0 ? 300 : -300,
            opacity : 0,
            scale   : 0.9,
        }),
        center : {
            x : 0,
            opacity : 1,
            scale   : 1,
            transition : {duration : 0.4}
        },
        exit : (direction) => ({
            x : direction < 0 ? 300 : -300,
            opacity : 0,
            scale   : 0.9,
            transition : {duration : 0.4}
        })
    }
    return (
        <div className="relative flex items-center justify-center w-full px-[2.5rem] overflow-hidden">
            <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`absolute left-4 px-3 py-1 rounded-full text-[2rem] bg-black text-white shadow-2xl font-extrabold ${currentIndex === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-gray-800 text-white hover:bg-gray-700"}`}
            >
                &lt;
            </button>
            <div className="w-[95%] h-[30rem] m-[1.5rem] relative flex items-center justify-center">
                <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                    key={healthcare[currentIndex]?.title}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute w-full h-full bg-gradient-to-r from-emerald-600 to-amber-400 z-30 p-2 flex-shrink-0 snap-center break-words xl:p-4 flex flex-col justify-center items-center rounded-2xl shadow-lg"
                    >
                        <h2 className="text-lg font-sans bg-amber-400 border-[2px] border-gray-100 p-1 w-fit rounded-md text-gray-900 font-bold m-[0.5rem] xs:text-sm xs:font-extrabold sm:text-lg sm:font-bold md:font-extrabold md:text-lg lg:text-lg lg:font-bold xl:font-extrabold xl:text-2xl">
                            {healthcare[currentIndex]?.title}
                        </h2>
                        <p className="text-gray-700 font-extrabold text-base
                        m-[0.5rem] font-sans xs:text-base sm:text-base md:text-base lg:text-base xl:text-[1.2rem]">
                            {healthcare[currentIndex]?.description}
                        </p>
                        <Link to={healthcare[currentIndex]?.link}>
                            <p className="underline bg-black rounded-xl text-white w-fit font-bold text-center animate-pulse mt-4 xs:mt-1 sm:text-lg sm:p-2 sm:m-6 md:text-lg md:font-extrabold md:m-10 lg:m-10 lg:p-1 xl:text-xl xl:font-extrabold xl:m-15 xl:p-2">
                                {healthcare[currentIndex]?.book}
                            </p>
                        </Link>
                    </motion.div>
                </AnimatePresence>
            </div>
            {/* Next Button */}
            <button
                onClick={handleNext}
                disabled={currentIndex === healthcare.length - 1}
                className={`absolute right-4 px-3 py-1 rounded-full text-[2rem] bg-black shadow-2xl font-extrabold ${currentIndex === healthcare.length - 1 ? "bg-gray-400 cursor-not-allowed" : "bg-gray-800 text-white hover:bg-gray-700"}`}
            >
                &gt;
            </button>
        </div>
    );
};
export default HealthCareAppointment;