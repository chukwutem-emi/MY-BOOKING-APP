import React, { useEffect, useState } from "react";
import BigSpinner from "../../Utils/BigSpinner";
import UpdateAppointment from "../../GetUpdateDeleteAppointment/UpdateAppointment";

const UpdateAppointmentDetailsSubComponent = () => {
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        const updateAppointmentTimer = setTimeout(() => {
            setLoading(false);
        }, 4000);

        return () => clearTimeout(updateAppointmentTimer);
    }, []);

    return (
        <div className="flex items-center justify-center mt-[8rem]">
            {
                loading ? <BigSpinner /> : <UpdateAppointment />
            }
        </div>
    );
};
export default UpdateAppointmentDetailsSubComponent;