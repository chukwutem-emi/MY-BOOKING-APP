import React, { useEffect, useRef, useState } from "react";
import useUpdateUser from "../UserCustomHooks/useUpdateUser";
import UpdateUserDom from "../UserDom/UpdateUserDom";

const UpdateUser = () => {
    const[showPassword, setShowPassword] = useState(false);
    const userNameRef      = useRef(null);
    const passwordRef      = useRef(null);
    const emailAddressRef  = useRef(null);
    const phoneNumberRef   = useRef(null);


    const {
        message,
        loading,
        errorMessage,
        handleUserUpdate : handleUserInfo,
        setMessage,
        setErrorMessage
    } = useUpdateUser();

    useEffect(() => {
        if (message && !errorMessage) {
            userNameRef.current.value     = "";
            emailAddressRef.current.value = "";
            passwordRef.current.value     = "";
            phoneNumberRef.current.value  = "";
        };
        if (message) {
            window.scrollTo({top:0, behavior:"smooth"});
        };
    }, [message, errorMessage]);

    const handleBtnClick = (e) => {
        e.preventDefault();
        const payload = {
            username      : userNameRef.current.value,
            password      : passwordRef.current.value,
            email_address : emailAddressRef.current.value,
            phone_number  : phoneNumberRef.current.value,
        };
        handleUserInfo(payload);
    };
    const handleClearMessage = () => {
        setMessage("");
        setErrorMessage(false);
    };

    return (
        <div className="w-full mt-[15rem] overflow-x-hidden items-center">
            <UpdateUserDom
            emailAddressRef={emailAddressRef}
            errorMessage={errorMessage}
            handleBtnClick={handleBtnClick}
            handleClearMessage={handleClearMessage}
            loading={loading}
            message={message}
            passwordRef={passwordRef}
            phoneNumberRef={phoneNumberRef}
            setShowPassword={setShowPassword}
            showPassword={showPassword}
            userNameRef={userNameRef} 
            />
        </div>
    )
};
export default UpdateUser;