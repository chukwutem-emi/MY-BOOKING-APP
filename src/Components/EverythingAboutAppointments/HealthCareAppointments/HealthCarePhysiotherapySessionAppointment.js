import React, { useEffect, useRef, useState } from "react";
import HealthCarePhysiotherapySessionDom from "../../AppointmentDOM/HealthcarePhysiotherapySessionDom";
import useHealthcarePhysiotherapySession from "../../../AppointmentOperationCustomHooks/useHealthcarePhysiotherapySession";

const HealthCarePhysiotherapySessionAppointment = () => {
    const addressRef                 =  useRef(null);
    const nextOfKinRef               =  useRef(null);
    const genderRef                  =  useRef(null);
    const nextOfKinPhoneNumberRef    =  useRef(null);
    const nextOfKinAddressRef        =  useRef(null);
    const appointmentTimeRef         =  useRef(null);
    const appointmentDateRef         =  useRef(null);
    const appointmentDescriptionRef  =  useRef(null);

    const[personnelName, setPersonnelName] = useState("");

    const {
        handlePhysiotherapyAppointment : handlePhysiotherapyAppointmentPayload,
        isError,
        isLoading,
        message,
        setMessage
    } = useHealthcarePhysiotherapySession();
    
    useEffect(() => {
        if (message && !isError) {
            appointmentDescriptionRef.current.value = "";
            nextOfKinPhoneNumberRef.current.value   = "";
            nextOfKinAddressRef.current.value       = "";
            appointmentDateRef.current.value        = "";
            appointmentTimeRef.current.value        = "";
            nextOfKinRef.current.value              = "";
            addressRef.current.value                = "";
            genderRef.current.value                 = "";
            setPersonnelName("");
        };
        if (message) {
            window.scrollTo({top:0, behavior:"smooth"});
        };
    }, [message, isError]);

    const handleSelected = (event) => {
        setPersonnelName(event.target.value);
    };


    const handlePhysiotherapyAppointmentForm = (event) => {
        event.preventDefault();
        const payload = {
            name                     : personnelName,
            gender                   : genderRef.current.value,
            address                  : addressRef.current.value,
            next_of_kin              : nextOfKinRef.current.value,
            next_of_kin_phone_number : nextOfKinPhoneNumberRef.current.value,
            next_of_kin_address      : nextOfKinAddressRef.current.value,
            appointment_time         : appointmentTimeRef.current.value,
            appointment_date         : appointmentDateRef.current.value,
            appointment_description  : appointmentDescriptionRef.current.value,
        };
        handlePhysiotherapyAppointmentPayload(payload);
    };
  return (
    <div className="overflow-x-hidden">
        <HealthCarePhysiotherapySessionDom
        addressRef={addressRef}
        appointmentDateRef={appointmentDateRef}
        appointmentDescriptionRef={appointmentDescriptionRef}
        appointmentTimeRef={appointmentTimeRef}
        genderRef={genderRef}
        handlePhysiotherapyAppointmentForm={handlePhysiotherapyAppointmentForm}
        handleSelected={handleSelected}
        isError={isError}
        isLoading={isLoading}
        message={message}
        nextOfKinAddressRef={nextOfKinAddressRef}
        nextOfKinPhoneNumberRef={nextOfKinPhoneNumberRef}
        nextOfKinRef={nextOfKinRef}
        setMessage={setMessage}
        />
    </div>
  );
};
export default HealthCarePhysiotherapySessionAppointment;