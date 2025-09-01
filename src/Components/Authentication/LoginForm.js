import { useEffect, useRef, useState } from "react";
import useLogin from "../../UserCustomHooks/useLogin";
import LoginDom from "../../UserDom/LoginDom";
import React from "react";


const LoginForm = ({setMessage, setIsError, message, isError}) => {
    const[showPassword, setShowPassword] = useState(false);
    const emailRef    = useRef(null);
    const passwordRef = useRef(null);

    const {
        handleLogin : handleLoginPayload,
        langKey,
        loading,
    } = useLogin(setMessage, setIsError);

    useEffect(() => {
        if (message && !isError) {
            emailRef.current.value    = "";
            passwordRef.current.value = "";
        };
    }, [message, isError]);

    const handleLoginForm = (e) => {
        e.preventDefault();
        const payload = {
            email_address :emailRef.current.value,
            password      :passwordRef.current.value,
        };
        handleLoginPayload(payload);
    };
    const handleClearMsg = () => {
        setIsError(false);
        setMessage("");
    };
    return (
        <LoginDom
        emailRef={emailRef}
        handleLoginForm={handleLoginForm}
        langKey={langKey}
        loading={loading}
        passwordRef={passwordRef}
        setShowPassword={setShowPassword}
        showPassword={showPassword}
        handleClearMsg={handleClearMsg}
        />
    );
};
export default LoginForm;