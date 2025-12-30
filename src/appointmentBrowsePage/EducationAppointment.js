import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import lang from "../Utils/multiLanguageConfig";
import { motion, AnimatePresence, scale } from "framer-motion";

const EducationAppointment = () => {
    const lanKey = useSelector((store) => store.config?.lang);


    const[currentIndex, setCurrentIndex] = useState(0);
    const[direction, setDirection]       = useState(0);

    const education = [
        {
          title:lang[lanKey]?.educationAppointment?.careerTitle,
          description:lang[lanKey]?.educationAppointment?.careerDescription,
          book:lang[lanKey]?.educationAppointment?.careerBooking,
          link:"career"  
        },
        {
          title:lang[lanKey]?.educationAppointment?.academicTitle,
          description:lang[lanKey]?.educationAppointment?.academicDescription,
          book:lang[lanKey]?.educationAppointment?.academicBooking,
          link:"academic"  
        },
        {
          title:lang[lanKey]?.educationAppointment?.oneOnOneTitle,
          description:lang[lanKey]?.educationAppointment?.oneOnOneDescription,
          book:lang[lanKey]?.educationAppointment?.oneOnOneBooking,
          link:"tutorial"  
        },
    ];
    
    const handleNext = () => {
        if (currentIndex  < education.length -1) {
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
            {/* Prev Button */}
            <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`absolute left-4 px-3 py-1 rounded-full text-[2rem] bg-black text-white shadow-2xl font-extrabold ${currentIndex === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-gray-800 text-white hover:bg-gray-700"}`}
            >
                &lt;
            </button>
            <div className="w-[95%] h-[30rem] relative flex items-center justify-center m-[1.5rem]">
                <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                    key={education[currentIndex]?.title}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute w-full h-full bg-gradient-to-r from-emerald-600 to-amber-400 z-30 p-2 break-words xl:p-4 flex flex-col justify-center items-center flex-shrink-0  rounded-2xl shadow-lg"
                    >
                        <h2 className="text-gray-900 bg-amber-400 border-[2px] border-gray-100 font-sans font-bold w-fit p-2 rounded-md m-[0.5rem] xs:text-sm xs:font-extrabold sm:text-lg sm:font-bold md:font-extrabold md:text-lg lg:text-lg lg:font-bold xl:font-extrabold xl:text-2xl">
                            {education[currentIndex]?.title}
                        </h2>
                        <p className="text-gray-700 font-extrabold text-base
                        m-[0.5rem] font-sans xs:text-base sm:text-base md:text-base lg:text-base xl:text-[1.2rem]">
                            {education[currentIndex]?.description}
                        </p>
                        <Link to={education[currentIndex]?.link}>
                            <p className="underline bg-black rounded-xl text-white w-fit animate-pulse font-bold text-center mt-4 xs:mt-0 sm:text-lg sm:p-2 sm:m-8 md:text-lg md:font-extrabold md:m-8 lg:m-8 lg:p-1 xl:text-xl xl:font-extrabold xl:m-8 xl:p-2">{education[currentIndex]?.book}</p>
                        </Link>
                    </motion.div>
                </AnimatePresence>
            </div>
            {/* Next Button */}
            <button
                onClick={handleNext}
                disabled={currentIndex === education.length - 1}
                className={`absolute right-4 px-3 py-1 rounded-full text-[2rem] bg-black shadow-2xl font-extrabold ${currentIndex === education.length - 1 ? "bg-gray-400 cursor-not-allowed" : "bg-gray-800 text-white hover:bg-gray-700"}`}
            >
                &gt;
            </button>
        </div>
    );
};
export default EducationAppointment;