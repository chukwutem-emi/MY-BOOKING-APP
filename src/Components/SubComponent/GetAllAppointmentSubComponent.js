import React, { useEffect, useState } from "react";
import BigSpinner from "../../Utils/BigSpinner";
import GetAllAppointment from "../../GetUpdateDeleteAppointment/GetAllAppointment";

const GetAllAppointmentSubComponent = () => {
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        const getAllAppointmentTimer = setTimeout(() => {
            setLoading(false)
        }, 4000);
        return () => clearTimeout(getAllAppointmentTimer);
    }, []);
    
    return (
        <div className="flex items-center justify-center mt-[8rem]">
            {
                loading ? <BigSpinner /> : <GetAllAppointment />
            }
        </div>
    );
};
export default GetAllAppointmentSubComponent;