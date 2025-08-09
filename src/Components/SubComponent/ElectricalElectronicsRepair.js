import React, { useEffect, useState } from "react";
import BigSpinner from "../../Utils/BigSpinner";
import ElectricalElectronicsRepair from "../EverythingAboutAppointments/TechnicalAndRepairServiceAppointments/ElectricalElectronicsRepairAppointment";

const ElectricalElectronics = () => {
    const[isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const electElectTimer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);
        return () => clearTimeout(electElectTimer);
    }, []);
    return (
        <div className="flex items-center justify-center mt-[8rem]">
            {
                isLoading ? <BigSpinner /> : <ElectricalElectronicsRepair />
            }
        </div>
    );
};
export default ElectricalElectronics;