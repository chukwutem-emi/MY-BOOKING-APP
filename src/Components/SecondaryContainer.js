import React from "react";
import EducationAppointment from "../appointmentBrowsePage/EducationAppointment";
import HealthCareAppointment from "../appointmentBrowsePage/HealthCareAppointment";
import ProfessionalService from "../appointmentBrowsePage/ProfessionalServiceAppointment";
import TechnicalRepair from "../appointmentBrowsePage/TechicalAndRepairServiceAppointment";

const SecondaryContainer = () => {
    return (
        <>
        <h1 className="p-4 font-sans m-4 text-blue-800 font-extrabold xs:text-lg sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl">Education appointment</h1>
        <EducationAppointment />
        <h1 className="p-4 font-sans m-4 text-blue-800 font-extrabold xs:text-lg sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl">Healthcare appointment</h1>
        <HealthCareAppointment />
        <h1 className="p-4 font-sans m-4 text-blue-800 font-extrabold xs:text-lg sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl">Professional service appointment</h1>
        <ProfessionalService />
        <h1 className="p-4 font-sans m-4 text-blue-800 font-extrabold xs:text-lg sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl">Technical repair appointment</h1>
        <TechnicalRepair />
        </>
    );
};
export default SecondaryContainer;