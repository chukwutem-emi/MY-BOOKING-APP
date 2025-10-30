import React, { useEffect, useRef, useState } from "react";
import useDeletePersonnel from "../PersonnelCustomHooks/useDeletePersonnel";
import DeletePersonnelInfoDom from "../PersonnelDom/DeletePersonnelInfoDom";


const DeletePersonnelInfo = () => {
    const[personnelName, setPersonnelName] = useState("");

    const {
        backgroundLoading,
        errorMsg,
        handleDeletePersonnel : handleDeletePersonnelPayload,
        isLoading,
        message,
        setMessage
    } = useDeletePersonnel();

    useEffect(() => {
        if (message) {
            window.scrollTo({top:0, behavior:"smooth"});
        };
    }, [message]);

    const handleDeletePersonnelForm = (event) => {
        event.preventDefault();
        if (!personnelName.trim()) {
            setMessage("Please select personnel before submitting.")
            return;
        };
        const payload = {
            name : personnelName
        };
        handleDeletePersonnelPayload(payload);
    };

    const handleSelected = (event) => setPersonnelName(event.target.value);
    
    return (
        <div className="w-full overflow-x-hidden">
            <DeletePersonnelInfoDom
            backgroundLoading={backgroundLoading}
            errorMsg={errorMsg}
            handleDeletePersonnelForm={handleDeletePersonnelForm}
            handleSelected={handleSelected}
            isLoading={isLoading}
            message={message}
            setMessage={setMessage} 
            />
        </div>
    );
};
export default DeletePersonnelInfo;