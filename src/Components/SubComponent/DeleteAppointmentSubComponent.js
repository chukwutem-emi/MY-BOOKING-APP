import React, { useEffect, useState } from "react";
import BigSpinner from "../../Utils/BigSpinner";
import DeleteAppointment from "../../GetUpdateDeleteAppointment/DeleteAppointment";


const DeleteAppointmentSubComponent = () => {
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        const deleteAppointmentTimer = setTimeout(() => {
            setLoading(false);
        }, 4000);

        return () => clearTimeout(deleteAppointmentTimer);
    }, []);
    return (
        <div className="flex items-center justify-center mt-[8rem]">
            {
                loading ? <BigSpinner /> : <DeleteAppointment />
            }
        </div>
    );
};
export default DeleteAppointmentSubComponent;