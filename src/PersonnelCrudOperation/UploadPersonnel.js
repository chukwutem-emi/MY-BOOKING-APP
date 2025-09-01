import React, { useEffect, useRef } from "react";
import useUploadPersonnel from "../PersonnelCustomHooks/useUploadPersonnel";
import UploadPersonnelDom from "../PersonnelDom/UploadPersonnelDom";

const UploadPersonnel = () => {
    const organizationAddressRef = useRef(null);
    const specializationRef      = useRef(null);
    const organizationRef        = useRef(null);
    const phoneNumberRef         = useRef(null);
    const emailRef               = useRef(null);
    const nameRef                = useRef(null);
    const roleRef                = useRef(null);

    const {
        backgroundLoading,
        errorMsg,
        handleUploadPersonnel : handleUploadPersonnelPayload,
        isLoading,
        message,
        setErrorMsg,
        setMessage
    } = useUploadPersonnel();

    useEffect(() => {
        if (message && !errorMsg) {
            organizationAddressRef.current.value = "";
            specializationRef.current.value      = "";
            organizationRef.current.value        = "";
            phoneNumberRef.current.value         = "";
            emailRef.current.value               = "";
            nameRef.current.value                = "";
            roleRef.current                      = "";
        };
        if (message) {
            window.scrollTo({top:0, behavior:"smooth"});
        };
    }, [message, errorMsg]);
    
    const handleUploadPersonnelForm = (event) => {
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
        handleUploadPersonnelPayload(payload);
    };

    const handleClearMsg = () => {
        setErrorMsg(false);
        setMessage("");
    };
    return (
        <div className="w-full mt-[16rem] overflow-x-hidden">
            <UploadPersonnelDom
            backgroundLoading={backgroundLoading}
            emailRef={emailRef}
            errorMsg={errorMsg}
            handleClearMsg={handleClearMsg}
            handleUploadPersonnelForm={handleUploadPersonnelForm}
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
export default UploadPersonnel;