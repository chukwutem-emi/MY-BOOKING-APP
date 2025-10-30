import React, { useEffect, useRef, useState } from "react";
import useDeleteUserAppointment from "../AppointmentCustomHooks/useDeleteUserAppointment";
import DeleteAppointmentDom from "../RUDAppointmentDom/DeleteAppointmentDom";

const DeleteAppointment = () => {
    const[username, setUsername] = useState("");

    const {
        handleDeleteAppointment : handleDeleteAppointmentPayload,
        isError,
        loading,
        message,
        setMessage
    } = useDeleteUserAppointment();

    useEffect(() => {
        if (message) {
            window.scrollTo({top:0, behavior:"smooth"});
        };
    }, [message]);

    const handleDeleteAppointmentForm = (event) => {
        event.preventDefault();
        if (!username.trim()) {
            setMessage("Please select the appointment username before submitting.");
            return;
        };
        const payload = {
            username : username
        };
        handleDeleteAppointmentPayload(payload);
    };

    const handleSelected = (event) => setUsername(event.target.value);
    return (
        <div className="w-full overflow-x-hidden">
            <DeleteAppointmentDom
            handleDeleteAppointmentForm={handleDeleteAppointmentForm}
            handleSelected={handleSelected}
            isError={isError}
            loading={loading}
            message={message}
            setMessage={setMessage}
            />
        </div>
    );
};
export default DeleteAppointment;