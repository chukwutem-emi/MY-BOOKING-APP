import { useRef } from 'react'
import useRealEstateAgent from '../../../AppointmentOperationCustomHooks/useRealEstateAgent';
import RealEstateAgentDom from '../../AppointmentDOM/RealEstateAgentDom';

const RealEstateAgentAppointment = () => {
    const firstNameRef               =  useRef(null);
    const lastNameRef                =  useRef(null);
    const emailAddressRef            =  useRef(null);
    const addressRef                 =  useRef(null);
    const nextOfKinRef               =  useRef(null);
    const genderRef                  =  useRef(null);
    const userPhoneNumberRef         =  useRef(null);
    const nextOfKinPhoneNumberRef    =  useRef(null);
    const nextOfKinAddressRef        =  useRef(null);
    const amountRef                  =  useRef(null);
    const appointmentTimeRef         =  useRef(null);
    const appointmentDateRef         =  useRef(null);
    const appointmentDescriptionRef  =  useRef(null);

    const {
        handleRealEstateAppointment : handleRealEstateAppointmentPayload,
        isError,
        isLoading,
        message
    } = useRealEstateAgent({payload:{}});

    const handleRealEstateAppointmentForm = (event) => {
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
        handleRealEstateAppointmentPayload(event, payload);
    };
  return (
    <div className='mt-[16rem] overflow-x-hidden w-full items-center'>
        <RealEstateAgentDom
        addressRef={addressRef}
        amountRef={amountRef}
        appointmentDateRef={appointmentDateRef}
        appointmentDescriptionRef={appointmentDescriptionRef}
        appointmentTimeRef={appointmentTimeRef}
        emailAddressRef={emailAddressRef}
        firstNameRef={firstNameRef}
        genderRef={genderRef}
        handleRealEstateAppointmentForm={handleRealEstateAppointmentForm}
        isError={isError}
        isLoading={isLoading}
        lastNameRef={lastNameRef}
        message={message}
        nextOfKinAddressRef={nextOfKinAddressRef}
        nextOfKinPhoneNumberRef={nextOfKinPhoneNumberRef}
        nextOfKinRef={nextOfKinRef}
        userPhoneNumberRef={userPhoneNumberRef} 
        />
    </div>
  );
};
export default RealEstateAgentAppointment;