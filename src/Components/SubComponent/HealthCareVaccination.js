import React, { useEffect, useState } from "react";
import BigSpinner from "../../Utils/BigSpinner";
import HealthCareVaccinationAppointment from "../EverythingAboutAppointments/HealthCareAppointments/HealthCareVaccinationAppointment";


const HealthCareVaccination = () => {
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const vaccinationTimer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);
        return () => clearTimeout(vaccinationTimer);
    }, []);
    return (
        <div className="flex items-center justify-center mt-[8rem]">
            {
                isLoading ? <BigSpinner /> : <HealthCareVaccinationAppointment />
            }
        </div>
    );
};
export default HealthCareVaccination;