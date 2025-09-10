import React, { useEffect, useRef, useState } from 'react'
import useCareerCounseling from '../../../AppointmentOperationCustomHooks/useCareerCounseling';
import CareerCounselingDom from '../../AppointmentDOM/CareerCounselingDom';

const CareerCounseling = () => {
    const genderRef                 = useRef(null);
    const addressRef                = useRef(null);
    const nextOfKinRef              = useRef(null);
    const nextOfKinPhoneNumberRef   = useRef(null);
    const nextOfKinAddressRef       = useRef(null);
    const appointmentDateRef        = useRef(null);
    const appointmentTimeRef        = useRef(null);
    const appointmentDescriptionRef = useRef(null);

    const[personnelName, setPersonnelName] = useState("");

    const {
        handleCareerClick : handleCareerPayload,
        message,
        errorMsg,
        loading,
        setMessage
    } = useCareerCounseling();
    
    useEffect(() => {
      if (message && !errorMsg) {
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
    }, [message, errorMsg]);

    const handleSelected = (event) => {
      setPersonnelName(event.target.value);
    };


    const handleCareerClickForm = (event) => {
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
        handleCareerPayload(payload);
    };
  return (
    <div className='my-[12rem] w-full items-center min-h-screen overflow-x-hidden'>
      <CareerCounselingDom
        addressRef={addressRef}
        appointmentDateRef={appointmentDateRef}
        appointmentDescriptionRef={appointmentDescriptionRef}
        appointmentTimeRef={appointmentTimeRef}
        errorMsg={errorMsg}
        genderRef={genderRef}
        handleCareerClickForm={handleCareerClickForm}
        handleSelected={handleSelected}
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
export default CareerCounseling