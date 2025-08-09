import React, { useEffect, useState } from "react";
import BigSpinner from "../../Utils/BigSpinner";
import HomeServiceAppointment from "../EverythingAboutAppointments/TechnicalAndRepairServiceAppointments/HomeServiceAppointment";


const HomeService = () => {
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const homeServiceTimer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);
        return () => clearTimeout(homeServiceTimer);
    }, []);
    return (
        <div className="flex items-center justify-center mt-[8rem]">
            {
                isLoading ? <BigSpinner /> : <HomeServiceAppointment />
            }
        </div>
    );
};
export default HomeService;