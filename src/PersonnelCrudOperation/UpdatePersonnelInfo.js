import React, { useEffect, useRef } from "react";
import useUpdatePersonnelInfo from "../PersonnelCustomHooks/useUpdatePersonnelInfo";
import UpdatePersonnelInfoDom from "../PersonnelDom/UpdatePersonnelInfoDom";

const UpdatePersonnelInfo = () => {
    const specializationRef      = useRef(null);
    const organizationAddressRef = useRef(null);
    const organizationRef        = useRef(null);
    const phoneNumberRef         = useRef(null);
    const emailRef               = useRef(null);
    const nameRef                = useRef(null);
    const roleRef                = useRef(null);

    const {
        backgroundLoading,
        errorMsg,
        handleUpdatePersonnelInfo : handleUpdatePersonnelInfoPayload,
        isLoading,
        message,
        setErrorMsg,
        setMessage
    } = useUpdatePersonnelInfo();

    useEffect(() => {
        if (message && !errorMsg) {
            specializationRef.current.value      = "";
            organizationAddressRef.current.value = "";
            organizationRef.current.value        = "";
            phoneNumberRef.current.value         = "";
            emailRef.current.value               = "";
            nameRef.current.value                = "";
            roleRef.current.value                = "";
        };
        if (message) {
            window.scrollTo({top:0, behavior:"smooth"});
        };
    }, [message, errorMsg]);

    const handleUpdatePersonnelInfoForm = (event) => {
        event.preventDefault();

        const payload = {
            specialization       : specializationRef.current.value,
            organization_address : organizationAddressRef.current.value,
            organization         : organizationRef.current.value,
            phone_number         : phoneNumberRef.current.value,
            email                : emailRef.current.value,
            name                 : nameRef.current.value,
            role                 : roleRef.current.value
        };
        handleUpdatePersonnelInfoPayload(payload);
    };
    const handleClearMsg = () => {
        setErrorMsg(false);
        setMessage("");
    };
    return (
        <div className="w-full overflow-x-hidden">
            <UpdatePersonnelInfoDom
            backgroundLoading={backgroundLoading}
            emailRef={emailRef}
            errorMsg={errorMsg}
            handleClearMsg={handleClearMsg}
            handleUpdatePersonnelInfoForm={handleUpdatePersonnelInfoForm}
            isLoading={isLoading}
            message={message}
            nameRef={nameRef}
            organizationAddressRef={organizationAddressRef}
            organizationRef={organizationRef}
            phoneNumberRef={phoneNumberRef}
            roleRef={roleRef}
            setMessage={setMessage}
            specializationRef={specializationRef}
            />
        </div>
    ); 
};
export default UpdatePersonnelInfo;