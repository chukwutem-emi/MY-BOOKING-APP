import React, { useEffect, useState } from "react";
import BigSpinner from "../../Utils/BigSpinner";
import HealthCareConsultationAppointment from "../EverythingAboutAppointments/HealthCareAppointments/HealthCareConsultationAppointment";


const HealthCareConsultation = () => {
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() =>{
        const consultationTimer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);
        return () => clearTimeout(consultationTimer);
    }, []);
    return (
        <div className="flex items-center justify-center mt-[8rem]">
            {
                isLoading ? <BigSpinner /> : <HealthCareConsultationAppointment />
            }
        </div>
    );
};
export default HealthCareConsultation;