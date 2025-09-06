import { useEffect, useRef } from "react";
import React from "react";
import Spinner from "../../Utils/Spinner";
import { useDispatch, useSelector } from "react-redux";
import lang from "../../Utils/multiLanguageConfig";
import useSignUp from "../../UserCustomHooks/useSignUp";
import SignUpDom from "../../UserDom/SignUpDom";
import { addUserPassword } from "../../Utils/getUserSlice";

const SignupForm = ({setMessage, setIsError, message, isError}) => {
    const usernameRef = useRef(null);
    const emailRef    = useRef(null);
    const passwordRef = useRef(null);
    const phoneRef    = useRef(null);

    const langKey = useSelector((store) => store.config?.lang);

    const dispatchPassword = useDispatch();
    
    const {
        handleSignup : handleSignupPayload,
        loading
    } = useSignUp(setMessage, setIsError);

    useEffect(() => {
        if (message && !isError) {
            usernameRef.current.value = "";
            passwordRef.current.value = "";
            emailRef.current.value    = "";
            phoneRef.current.value    = "";
        };
    }, [message, isError]);

    const handleSignupForm = async(e) => {
        e.preventDefault();
        const payload = {
            username      : usernameRef.current.value,
            email_address : emailRef.current.value,
            password      : passwordRef.current.value,
            phone_number  : phoneRef.current.value,
        };
        handleSignupPayload(payload);
        dispatchPassword(addUserPassword(passwordRef.current.value));
    };

    const handleClearMsg = () => {
        setIsError(false);
        setMessage("");
    };
    return (
        <div className="p-4">
           <SignUpDom
           emailRef={emailRef}
           handleClearMsg={handleClearMsg}
           langKey={langKey}
           loading={loading}
           passwordRef={passwordRef}
           phoneRef={phoneRef}
           usernameRef={usernameRef}
           handleSignupForm={handleSignupForm} 
           />
        </div>
    );
};
export default SignupForm;