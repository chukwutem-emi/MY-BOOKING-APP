import React, { useEffect, useRef } from "react";
import useDeletePersonnel from "../PersonnelCustomHooks/useDeletePersonnel";
import DeletePersonnelInfoDom from "../PersonnelDom/DeletePersonnelInfoDom";


const DeletePersonnelInfo = () => {
    const emailRef = useRef(null);

    const {
        backgroundLoading,
        errorMsg,
        handleDeletePersonnel : handleDeletePersonnelPayload,
        isLoading,
        message,
        setErrorMsg, 
        setMessage
    } = useDeletePersonnel();

    useEffect(() => {
        if (message && !errorMsg) {
            emailRef.current.value = "";
        };
    }, [message, errorMsg]);

    const handleDeletePersonnelForm = (event) => {
        event.preventDefault();

        const payload = {
            email : emailRef.current.value
        };
        handleDeletePersonnelPayload(payload);
    };
    const handleClearMsg = () => {
        setErrorMsg(false);
        setMessage("");
    };
    return (
        <div className="w-full overflow-x-hidden mt-[16rem]">
            <DeletePersonnelInfoDom
            backgroundLoading={backgroundLoading}
            emailRef={emailRef}
            errorMsg={errorMsg}
            handleClearMsg={handleClearMsg}
            handleDeletePersonnelForm={handleDeletePersonnelForm}
            isLoading={isLoading}
            message={message}
            setMessage={setMessage} 
            />
        </div>
    );
};
export default DeletePersonnelInfo;