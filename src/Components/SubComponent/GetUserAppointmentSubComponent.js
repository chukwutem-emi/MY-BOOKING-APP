import React, { useEffect, useState } from "react";
import BigSpinner from "../../Utils/BigSpinner";
import GetAppointment from "../../GetUpdateDeleteAppointment/GetAppointment";


const GetUserAppointmentSubComponent = () => {
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        const getUserAppointmentTimer =  setTimeout(() => {
            setLoading(false);
        }, 4000);

        return () => clearTimeout(getUserAppointmentTimer);
    }, []);

    return (
        <div className="flex items-center justify-center mt-[8rem]">
            {
                loading ? <BigSpinner /> : <GetAppointment />
            }
        </div>
    );
};
export default GetUserAppointmentSubComponent;