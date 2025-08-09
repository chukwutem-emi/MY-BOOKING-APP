import React, { useEffect, useState } from "react";
import BigSpinner from "../../Utils/BigSpinner";
import HealthCareDentalAppointment from "../EverythingAboutAppointments/HealthCareAppointments/HealthCareDentalAppointment";


const HealthCareDental = () => {
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const dentalTimer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);
        return () => clearTimeout(dentalTimer);
    }, []);
    return (
        <div className="flex items-center justify-center mt-[8rem]">
            {
                isLoading ? <BigSpinner /> : <HealthCareDentalAppointment />
            }
        </div>
    );
};
export default HealthCareDental;