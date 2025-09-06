import React, { useEffect } from "react";
import useGetUserAppointment from "../AppointmentCustomHooks/useGetUserAppointment";
import GetAppointmentDom from "../RUDAppointmentDom/GetAppointmentDom";

const GetAppointment = () => {
    const {
        backgroundLoading,
        handleGetUserAppointment,
        isError,
        loading,
        message,
        setMessage,
        userToken,
        hasFetch
    } = useGetUserAppointment();

    useEffect(() => {
        if (userToken) {
            handleGetUserAppointment();
        };
    }, [userToken]);

    
    return (
        <div className="w-full mt-[15rem] overflow-x-hidden">
            <GetAppointmentDom
            backgroundLoading={backgroundLoading}
            handleGetUserAppointment={handleGetUserAppointment}
            hasFetch={hasFetch}
            isError={isError}
            loading={loading}
            message={message}
            setMessage={setMessage} 
            />
        </div>
    );
};
export default GetAppointment;