import React, { useEffect, useState } from "react";
import BigSpinner from "../../Utils/BigSpinner";
import HealthCarePhysiotherapySessionAppointment from "../EverythingAboutAppointments/HealthCareAppointments/HealthCarePhysiotherapySessionAppointment";


const HealthCarePhysiotherapy = () => {
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const physiotherapyTimer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);
        return () => clearTimeout(physiotherapyTimer);
    }, []);
    return (
        <div className="flex items-center justify-center mt-[8rem]">
            {
                isLoading ? <BigSpinner /> : <HealthCarePhysiotherapySessionAppointment />
            }
        </div>
    )
};
export default HealthCarePhysiotherapy;