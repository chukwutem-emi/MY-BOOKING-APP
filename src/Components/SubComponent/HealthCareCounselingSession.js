import React, { useEffect, useState } from "react";
import BigSpinner from "../../Utils/BigSpinner";
import HealthCareCounselingSessionAppointment from "../EverythingAboutAppointments/HealthCareAppointments/HealthCareCounselingSessionAppointment";


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
                isLoading ? <BigSpinner /> : <HealthCareCounselingSessionAppointment />
            }
        </div>
    );
};
export default HealthCareCounselingSession;