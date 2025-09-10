import React, { useEffect, useRef, useState } from "react";
import useAcademicAdvisory from "../../../AppointmentOperationCustomHooks/useAcademicAdvising";
import AcademicAdvisingDom from "../../AppointmentDOM/AcademicAdvisingDom";

const AcademicAdvising = () => {
    const address          = useRef(null);
    const nextOfKin        = useRef(null);
    const nextOfKinAddress = useRef(null);
    const appointmentTime  = useRef(null);
    const appointmentDate  = useRef(null);
    const gender           = useRef(null);
    const phone            = useRef(null);
    const description      = useRef(null);

    const[personnelName, setPersonnelName] = useState("");

    const {
        handleAcademic : handleAcademicPayload,
        errorMsg,
        message,
        isLoading,
        setMessage
    } = useAcademicAdvisory();
    
    useEffect(() => {
        if (message && !errorMsg) {
            address.current.value         = "";
            nextOfKin.current.value        = "";
            nextOfKinAddress.current.value = "";
            appointmentTime.current.value  = "";
            appointmentDate.current.value  = "";
            gender.current.value           = "";
            phone.current.value            = "";
            description.current.value      = "";
            setPersonnelName("");
        };
        if (message) {
            window.scrollTo({top:0, behavior:"smooth"});
        };
    }, [message, errorMsg]);

    const handleSelected = (event) => {
        setPersonnelName(event.target.value);
    };


    const handleAcademicForm = (event) => {
        event.preventDefault();
        const payload = {
            gender                   : gender.current.value,
            address                  : address.current.value,
            name                     : personnelName,
            next_of_kin              : nextOfKin.current.value,
            next_of_kin_address      : nextOfKinAddress.current.value,
            appointment_time         : appointmentTime.current.value,
            appointment_date         : appointmentDate.current.value,
            next_of_kin_phone_number : phone.current.value,
            appointment_description  : description.current.value
        };
        handleAcademicPayload(payload);
    };
    return (
        <div className="my-[12rem] xs:mt-[12rem] sm:mt-[16rem] md:mt-[16rem] lg:mt-[16rem] xl:mt-[16rem] w-full rounded-lg items-center overflow-x-hidden">
            <AcademicAdvisingDom
            address={address}
            appointmentDate={appointmentDate}
            appointmentTime={appointmentTime}
            description={description}
            errorMsg={errorMsg}
            gender={gender}
            handleAcademicForm={handleAcademicForm}
            handleSelected={handleSelected}
            isLoading={isLoading}
            message={message}
            nextOfKin={nextOfKin}
            nextOfKinAddress={nextOfKinAddress}
            phone={phone}
            setMessage={setMessage}
            />
        </div>
    );
};
export default AcademicAdvising;