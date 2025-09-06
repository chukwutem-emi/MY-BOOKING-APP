import React, { useEffect, useRef } from "react";
import useUpdateUserAppointment from "../AppointmentCustomHooks/useUpdateUserAppointment";
import UpdateAppointmentDom from "../RUDAppointmentDom/UpdateAppointmentDom";

const UpdateAppointment = () => {
    const nextOfKinPhoneNumberRef         = useRef(null);
    const appointmentDescriptionRefRef    = useRef(null);
    const nextOfKinAddressRef             = useRef(null);
    const appointmentTimeRef              = useRef(null);
    const appointmentDateRef              = useRef(null);
    const nextOfKinRef                    = useRef(null);
    const genderRef                       = useRef(null);
    const addressRef                      = useRef(null);
    
    const {
        handleUpdateUserAppointment :  handleUpdateUserAppointmentPayload,
        isError,
        loading,
        message,
        setIsError,
        setMessage
    } = useUpdateUserAppointment();

    useEffect(() => {
        if (message && !isError) {
            appointmentDescriptionRefRef.current.value = "";
            nextOfKinPhoneNumberRef.current.value      = "";
            nextOfKinAddressRef.current.value          = "";
            appointmentDateRef.current.value           = "";
            appointmentTimeRef.current.value           = "";
            nextOfKinRef.current.value                 = "";
            genderRef.current.value                    = "";
            addressRef.current.value                   = "";
         };
         if (message) {
            window.scrollTo({top:0, behavior:"smooth"});
         };
    }, [message, isError]);

    const handleUpdateUserAppointmentForm = (event) => {
        event.preventDefault();

        const payload = {
            appointment_description   : appointmentDescriptionRefRef.current.value,
            next_of_kin_phone_number  : nextOfKinPhoneNumberRef.current.value,
            next_of_kin_address       : nextOfKinAddressRef.current.value,
            appointment_time          : appointmentTimeRef.current.value,
            appointment_date          : appointmentDateRef.current.value,
            next_of_kin               : nextOfKinRef.current.value,
            gender                    : genderRef.current.value,
            address                   : addressRef.current.value
        };
        handleUpdateUserAppointmentPayload(payload);
    };

    const handleClearMsg = () => {
        setIsError(false);
        setMessage("")
    };
    
    return (
        <div className="w-full mt-[15rem] overflow-x-hidden">
            <UpdateAppointmentDom
            addressRef={addressRef}
            appointmentDateRef={appointmentDateRef}
            appointmentDescriptionRefRef={appointmentDescriptionRefRef}
            appointmentTimeRef={appointmentTimeRef}
            genderRef={genderRef}
            handleClearMsg={handleClearMsg}
            handleUpdateUserAppointmentForm={handleUpdateUserAppointmentForm}
            isError={isError}
            loading={loading}
            message={message}
            nextOfKinAddressRef={nextOfKinAddressRef}
            nextOfKinPhoneNumberRef={nextOfKinPhoneNumberRef}
            nextOfKinRef={nextOfKinRef}
            setMessage={setMessage} 
            />
        </div>
    );
};
export default UpdateAppointment;