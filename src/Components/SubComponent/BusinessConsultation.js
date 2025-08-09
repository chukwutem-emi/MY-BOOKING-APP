import React, { useEffect, useState } from "react";
import BigSpinner from "../../Utils/BigSpinner";
import BusinessConsultationAppointment from "../EverythingAboutAppointments/ProfessionalServiceAppointment/BusinessConsultationAppointment";

const BusinessConsultation = () => {
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const businessConsultTimer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);
        return () => clearTimeout(businessConsultTimer);
    }, []);

    return (
        <div className="flex items-center justify-center mt-[8rem]">
            {
                isLoading ? <BigSpinner /> : <BusinessConsultationAppointment />
            }
        </div>
    );
};
export default BusinessConsultation;