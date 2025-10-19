import React, { useEffect, useRef } from "react";
import useGetAllUserAppointment from "../AppointmentCustomHooks/useGetAllUsersAppointment";
import GetAllAppointmentDom from "../RUDAppointmentDom/GetAllAppointmentDom";

const GetAllAppointment = () => {
    const searchText = useRef(null);

    const {
        backgroundLoading,
        filteredAppointment,
        handleBtnClick,
        isError,
        loading,
        message,
        setIsError,
        setMessage,
        handleGetAllUserAppointment,
        userToken
    } = useGetAllUserAppointment();

    useEffect(() => {
        if (userToken) {
            handleGetAllUserAppointment();
        };
    }, [userToken]);
    
    const handleClearMsg = () => {
        setIsError(false);
        setMessage("");
    };

    return (
        <div className="mt-[14rem] w-full relative overflow-hidden">
            <GetAllAppointmentDom
            backgroundLoading={backgroundLoading}
            filteredAppointment={filteredAppointment}
            handleBtnClick={handleBtnClick}
            handleClearMsg={handleClearMsg}
            isError={isError}
            loading={loading}
            message={message}
            searchText={searchText} 
            />
        </div>
    );
};
export default GetAllAppointment;