import React, { useRef } from 'react'
import useCareerCounseling from '../../../AppointmentOperationCustomHooks/useCareerCounseling';
import CareerCounselingDom from '../../AppointmentDOM/CareerCounselingDom';

const CareerCounseling = () => {
    const firstNameRef              = useRef(null);
    const lastNameRef               = useRef(null);
    const genderRef                 = useRef(null);
    const userPhoneNumberRef        = useRef(null);
    const addressRef                = useRef(null);
    const emailAddressRef           = useRef(null);
    const nextOfKinRef              = useRef(null);
    const nextOfKinPhoneNumberRef   = useRef(null);
    const nextOfKinAddressRef       = useRef(null);
    const amountRef                 = useRef(null);
    const appointmentDateRef        = useRef(null);
    const appointmentTimeRef        = useRef(null);
    const appointmentDescriptionRef = useRef(null);

    const {
        handleCareerClick : handleCareerPayload,
        message,
        errorMsg,
        loading
    } = useCareerCounseling({payload:{}});

    const handleCareerClickForm = (event) => {
        event.preventDefault();
        const payload = {
            first_name               : firstNameRef.current.value,
            last_name                : lastNameRef.current.value,
            gender                   : genderRef.current.value,
            user_phone_number        : userPhoneNumberRef.current.value,
            address                  : addressRef.current.value,
            email_address            : emailAddressRef.current.value,
            next_of_kin              : nextOfKinRef.current.value,
            next_of_kin_phone_number : nextOfKinPhoneNumberRef.current.value,
            next_of_kin_address      : nextOfKinAddressRef.current.value,
            amount                   : amountRef.current.value,
            appointment_time         : appointmentTimeRef.current.value,
            appointment_date         : appointmentDateRef.current.value,
            appointment_description  : appointmentDescriptionRef.current.value,
        };
        handleCareerPayload(event, payload);
    };
  return (
    <div className='my-[12rem] w-full items-center min-h-screen overflow-x-hidden'>
      <CareerCounselingDom
      addressRef={addressRef}
      amountRef={amountRef}
      appointmentDateRef={appointmentDateRef}
      appointmentDescriptionRef={appointmentDescriptionRef}
      appointmentTimeRef={appointmentTimeRef}
      emailAddressRef={emailAddressRef}
      firstNameRef={firstNameRef}
      genderRef={genderRef}
      handleCareerClickForm={handleCareerClickForm}
      lastNameRef={lastNameRef}
      loading={loading}
      message={message}
      nextOfKinAddressRef={nextOfKinAddressRef}
      nextOfKinPhoneNumberRef={nextOfKinPhoneNumberRef}
      nextOfKinRef={nextOfKinRef}
      userPhoneNumberRef={userPhoneNumberRef}
      errorMsg={errorMsg}
      />
    </div>
  );
};
export default CareerCounseling