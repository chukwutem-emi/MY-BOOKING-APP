import React, { useEffect, useRef, useState } from 'react'
import useRealEstateAgent from '../../../AppointmentOperationCustomHooks/useRealEstateAgent';
import RealEstateAgentDom from '../../AppointmentDOM/RealEstateAgentDom';

const RealEstateAgentAppointment = () => {
    const addressRef                 =  useRef(null);
    const nextOfKinRef               =  useRef(null);
    const genderRef                  =  useRef(null);
    const nextOfKinPhoneNumberRef    =  useRef(null);
    const nextOfKinAddressRef        =  useRef(null);
    const appointmentTimeRef         =  useRef(null);
    const appointmentDateRef         =  useRef(null);
    const appointmentDescriptionRef  =  useRef(null);

    const[personnelName, setPersonnelName] =useState("");

    useEffect(() => {
        const {
            handleRealEstateAppointment : handleRealEstateAppointmentPayload,
            isError,
            isLoading,
            message,
            setMessage
        } = useRealEstateAgent();
        
        if (message && !isError) {
            personnelName                           = "";
            genderRef.current.value                 = "";
            addressRef.current.value                = "";
            nextOfKinRef.current.value              = "";
            nextOfKinPhoneNumberRef.current.value   = "";
            nextOfKinAddressRef.current.value       = "";
            appointmentTimeRef.current.value        = "";
            appointmentDateRef.current.value        = "";
            appointmentDescriptionRef.current.value = "";
        };
        if (message) {
            window.scrollTo({top:0, behavior:"smooth"});
        };
    }, [message, isError]);

    const handleSelected = (event) => {
        setPersonnelName(event.target.value);
    };


    const handleRealEstateAppointmentForm = (event) => {
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
        handleRealEstateAppointmentPayload(payload);
    };
  return (
    <div className='mt-[16rem] overflow-x-hidden w-full items-center'>
        <RealEstateAgentDom
        addressRef={addressRef}
        appointmentDateRef={appointmentDateRef}
        appointmentDescriptionRef={appointmentDescriptionRef}
        appointmentTimeRef={appointmentTimeRef}
        genderRef={genderRef}
        handleRealEstateAppointmentForm={handleRealEstateAppointmentForm}
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
export default RealEstateAgentAppointment;