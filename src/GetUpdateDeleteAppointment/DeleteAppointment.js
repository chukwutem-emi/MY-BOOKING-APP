import React, { useEffect, useRef } from "react";
import useDeleteUserAppointment from "../AppointmentCustomHooks/useDeleteUserAppointment";
import DeleteAppointmentDom from "../RUDAppointmentDom/DeleteAppointmentDom";

const DeleteAppointment = () => {
    const usernameRef = useRef(null);

    const {
        handleDeleteAppointment : handleDeleteAppointmentPayload,
        isError,
        loading,
        message,
        setIsError,
        setMessage
    } = useDeleteUserAppointment();

    useEffect(() => {
        if (message && !isError) {
            usernameRef.current.value = "";
        };
        if (message) {
            window.scrollTo({top:0, behavior:"smooth"});
        };
    }, [message, isError]);

    const handleDeleteAppointmentForm = (event) => {
        event.preventDefault();

        const payload = {
            username : usernameRef.current.value
        };
        handleDeleteAppointmentPayload(payload);
    };

    const handleClearMessage = () => {
        setIsError(false);
        setMessage("")
    }
    return (
        <div className="w-full mt-[15rem]">
            <DeleteAppointmentDom
            handleClearMessage={handleClearMessage}
            handleDeleteAppointmentForm={handleDeleteAppointmentForm}
            isError={isError}
            loading={loading}
            message={message}
            setMessage={setMessage}
            usernameRef={usernameRef}
            />
        </div>
    );
};
export default DeleteAppointment;