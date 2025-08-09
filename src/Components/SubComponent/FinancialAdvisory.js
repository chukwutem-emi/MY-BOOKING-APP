import React, { useEffect, useState } from "react";
import BigSpinner from "../../Utils/BigSpinner";
import FinancialAdvisoryAppointment from "../EverythingAboutAppointments/ProfessionalServiceAppointment/FinancialAdvisoryAppointment";


const FinancialAdvisory = () => {
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const financialTimer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);
        return () => clearTimeout(financialTimer);
    }, []);

    return (
        <div className="flex items-center justify-center mt-[8rem]">
            {
                isLoading ? <BigSpinner /> : <FinancialAdvisoryAppointment />
            }
        </div>
    )
};
export default FinancialAdvisory;