import React, { useEffect, useRef } from "react";
import useDeleteUser from "../UserCustomHooks/useDeleteUser";
import DeleteUserDom from "../UserDom/DeleteUserDom";

const DeleteUser = () => {
    const emailRef = useRef(null);

    const{
        message,
        errorMsg,
        loading,
        handleDeleteUser : handleUserDelete,
        setErrorMsg,
        setMessage
    } = useDeleteUser();

    useEffect(() => {
        if (message && !errorMsg) {
            emailRef.current.value = "";
        };
        if (message) {
            window.scrollTo({top:0, behavior:"smooth"});
        };
    }, [message, errorMsg]);

    const handleDelete = (e) => {
        e.preventDefault();
        const payload = {
            email_address : emailRef.current.value
        };
        handleUserDelete(payload);
    };

    const handleClearMsg = () => {
        setErrorMsg(false);
        setMessage("");
    };
    return (
        <div className="w-full mt-[16rem] overflow-x-hidden items-center">
            <DeleteUserDom
            emailRef={emailRef}
            errorMsg={errorMsg}
            handleClearMsg={handleClearMsg}
            handleDelete={handleDelete}
            loading={loading}
            message={message}
            setMessage={setMessage} 
            />
        </div>
    );
};
export default DeleteUser;