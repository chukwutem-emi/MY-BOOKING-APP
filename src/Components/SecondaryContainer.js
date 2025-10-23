import React from "react";
import EducationAppointment from "../appointmentBrowsePage/EducationAppointment";
import HealthCareAppointment from "../appointmentBrowsePage/HealthCareAppointment";
import ProfessionalService from "../appointmentBrowsePage/ProfessionalServiceAppointment";
import TechnicalRepair from "../appointmentBrowsePage/TechnicalAndRepairServiceAppointment";
import { useSelector } from "react-redux";
import lang from "../Utils/multiLanguageConfig";

const SecondaryContainer = () => {
    const langKey = useSelector((store) => store.config?.lang);

    return (
        <div className="relative">
            <h1 className="p-4 font-sans text-center xl:text-left m-4 text-emerald-600 font-extrabold xs:text-[2rem] sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl">{lang[langKey]?.appointmentHeadings?.educationAppointmentHeading}</h1>
            <EducationAppointment />
            <h1 className="p-4 font-sans text-center xl:text-left m-4 text-emerald-600 font-extrabold xs:text-[2rem] sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl">{lang[langKey]?.appointmentHeadings?.healthcareAppointmentHeading}</h1>
            <HealthCareAppointment />
            <h1 className="p-4 font-sans text-center xl:text-left m-4 text-emerald-600 font-extrabold xs:text-[2rem] sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl">{lang[langKey]?.appointmentHeadings?.professionalServiceHeading}</h1>
            <ProfessionalService />
            <h1 className="p-4 font-sans text-center xl:text-left m-4 text-emerald-600 font-extrabold xs:text-[2rem] sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl">{lang[langKey]?.appointmentHeadings?.technicalAppointmentHeading}</h1>
            <TechnicalRepair />  
        </div>
    );
};
export default SecondaryContainer;