import React, { useEffect, useState } from "react";
import BigSpinner from "../../Utils/BigSpinner";
import HealthCarePhysiotherapySessionAppointment from "../EverythingAboutAppointments/HealthCareAppointments/HealthCarePhysiotherapySessionAppointment";


const HealthCareCounselingSession = () => {
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const counselingTimer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);
        return () => clearTimeout(counselingTimer);
    }, []);

    return (
        <div className="flex items-center justify-center mt-[8rem]">
            {
                isLoading ? <BigSpinner /> : <HealthCarePhysiotherapySessionAppointment />
            }
        </div>
    );
};
export default HealthCareCounselingSession;