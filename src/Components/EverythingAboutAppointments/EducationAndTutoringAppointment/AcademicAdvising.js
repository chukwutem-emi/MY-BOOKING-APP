import React, { useRef } from "react";
import useAcademicAdvisory from "../../../AppointmentOperationCustomHooks/useAcademicAdvising";
import AcademicAdvisingDom from "../../AppointmentDOM/AcademicAdvisingDom";

const AcademicAdvising = () => {
    const firstName        = useRef(null);
    const lastName         = useRef(null);
    const userPhoneNumber  = useRef(null);
    const emailAddress     = useRef(null);
    const address          = useRef(null);
    const nextOfKin        = useRef(null);
    const nextOfKinAddress = useRef(null);
    const appointmentTime  = useRef(null);
    const appointmentDate  = useRef(null);
    const gender           = useRef(null);
    const amount           = useRef(null);
    const phone            = useRef(null);
    const description      = useRef(null);

    const {
        handleAcademic : handleAcademicPayload,
        errorMsg,
        message,
        isLoading
    } = useAcademicAdvisory({payload:{}});

    const handleAcademicForm = (event) => {
        event.preventDefault();
        const payload = {
            first_name               : firstName.current.value,
            last_name                : lastName.current.value,
            gender                   : gender.current.value,
            user_phone_number        : userPhoneNumber.current.value,
            address                  : address.current.value,
            email_address            : emailAddress.current.value,
            next_of_kin              : nextOfKin.current.value,
            next_of_kin_address      : nextOfKinAddress.current.value,
            amount                   : amount.current.value,
            appointment_time         : appointmentTime.current.value,
            appointment_date         : appointmentDate.current.value,
            next_of_kin_phone_number : phone.current.value,
            appointment_description  : description.current.value
        };
        handleAcademicPayload(event, payload);
    };
    return (
        <div className="my-[12rem] xs:mt-[12rem] sm:mt-[16rem] md:mt-[16rem] lg:mt-[16rem] xl:mt-[16rem] w-full rounded-lg items-center overflow-x-hidden">
            <AcademicAdvisingDom
            handleAcademicForm={handleAcademicForm}
            message={message}
            errorMsg={errorMsg}
            isLoading={isLoading}
            firstName={firstName}
            lastName={lastName}
            gender={gender}
            userPhoneNumber={userPhoneNumber}
            emailAddress={emailAddress}
            address={address}
            amount={amount}
            appointmentDate={appointmentDate}
            appointmentTime={appointmentTime}
            description={description}
            nextOfKin={nextOfKin}
            nextOfKinAddress={nextOfKinAddress}
            phone={phone}
            />
        </div>
    );
};
export default AcademicAdvising;