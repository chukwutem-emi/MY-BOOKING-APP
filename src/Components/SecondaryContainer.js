import React, { useEffect, useRef, useState } from "react";
import EducationAppointment from "../appointmentBrowsePage/EducationAppointment";
import HealthCareAppointment from "../appointmentBrowsePage/HealthCareAppointment";
import ProfessionalService from "../appointmentBrowsePage/ProfessionalServiceAppointment";
import TechnicalRepair from "../appointmentBrowsePage/TechicalAndRepairServiceAppointment";
import { useSelector } from "react-redux";
import lang from "../Utils/multiLanguageConfig";

const SecondaryContainer = () => {
    const langKey = useSelector((store) => store.config?.lang);
     const[activeSection, setActiveSession] = useState("edu");
     const[arrowDisabled, setArrowDisabled] = useState({prev:true, next:false})

     const eduRef    = useRef();
     const healthRef = useRef();
     const profRef   = useRef();
     const techRef   = useRef();

     const sectionRefs = {
        edu    : eduRef,
        health : healthRef,
        prof   : profRef,
        tech   : techRef
     };

     const updateArrowState = () => {
         const ref = sectionRefs[activeSection]?.current;
         if (ref) {
            setArrowDisabled({
               prev : ref.index === 0,
               next : ref.index === ref.max
            });
         };
     };
     const handleNext = () => {
        sectionRefs[activeSection]?.current?.next();
        updateArrowState();
     };

     const handlePrev = () => {
        sectionRefs[activeSection]?.current?.prev();
        updateArrowState();
     };
     useEffect(() => {
         updateArrowState();
     }, [activeSection]);

    return (
        <div className="relative">
            <div className="fixed left-2 top-1/2 -translate-y-1/2 z-50">
               <button disabled={arrowDisabled.prev} onClick={handlePrev} className={`p-2 rounded-full shadow-md text-[2.5rem] font-extrabold ${arrowDisabled.prev ? "opacity-30" : "bg-gray-200"}`}>
                  &larr;
               </button>
            </div>
            <div className="fixed top-1/2 right-2 -translate-y-1/2 z-50">
               <button disabled={arrowDisabled.next} onClick={handleNext} className={`p-2 rounded-full shadow-md text-[2.5rem] font-extrabold ${arrowDisabled.next ? "opacity-30" : "bg-gray-200"}`}>
                  &rarr;
               </button>
            </div>
            <h1 className="p-4 font-sans m-4 text-gray-900 font-extrabold xs:text-lg sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl">{lang[langKey]?.appointmentHeadings?.educationAppointmentHeading}</h1>
            <div onClick={() => setActiveSession("edu")}>
               <EducationAppointment ref={eduRef} />
            </div>
            <h1 className="p-4 font-sans m-4 text-gray-900 font-extrabold xs:text-lg sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl">{lang[langKey]?.appointmentHeadings?.healthcareAppointmentHeading}</h1>
            <div onClick={() => setActiveSession("health")}>
               <HealthCareAppointment ref={healthRef} />
            </div>
            <h1 className="p-4 font-sans m-4 tex-gray-900 font-extrabold xs:text-lg sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl">{lang[langKey]?.appointmentHeadings?.professionalServiceHeading}</h1>
            <div onClick={() => setActiveSession("prof")}>
               <ProfessionalService ref={profRef} />
            </div>
            <h1 className="p-4 font-sans m-4 text-gray-900 font-extrabold xs:text-lg sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl">{lang[langKey]?.appointmentHeadings?.technicalAppointmentHeading}</h1>
            <div onClick={() => setActiveSession("tech")}>
              <TechnicalRepair ref={techRef} />  
            </div>
        </div>
    );
};
export default SecondaryContainer;