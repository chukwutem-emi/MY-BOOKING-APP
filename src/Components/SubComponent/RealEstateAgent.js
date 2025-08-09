import React, { useEffect, useState } from "react";
import BigSpinner from "../../Utils/BigSpinner";
import RealEstateAgentAppointment from "../EverythingAboutAppointments/ProfessionalServiceAppointment/RealEstateAgentAppointment";


const RealEstateAgent = () => {
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const realEstateTimer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);
        return () => clearTimeout(realEstateTimer);
    }, []);
    return (
        <div className="flex items-center justify-center mt-[8rem]">
            {
                isLoading ? <BigSpinner /> : <RealEstateAgentAppointment />
            }
        </div>
    );
};
export default RealEstateAgent;