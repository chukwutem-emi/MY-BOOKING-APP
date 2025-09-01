import React, { useEffect, useRef } from "react";
import usePromoteUser from "../UserCustomHooks/usePromoteUser";
import PromoteUserDom from "../UserDom/PromoteUserDom";


const PromoteUser = () => {
    const emailRef = useRef(null);
    const codeRef  = useRef(null);

    const {
        handlePromoteUser : handleUserPromotionInfo,
        message,
        errorMsg,
        isLoading,
        setErrorMsg,
        setMessage
    } = usePromoteUser();

    useEffect(() => {
        if (message && !errorMsg) {
            emailRef.current.value = "";
            codeRef.current.value  = "";
        };
        if (message) {
            window.scrollTo({top:0, behavior:"smooth"});
        };
    }, [message, errorMsg]);

    const handleUserPromotion = (e) => {
        e.preventDefault();
        const payload = {
            email_address : emailRef.current.value,
            code          : codeRef.current.value
        };
        handleUserPromotionInfo(payload)
    };

    const handleClearMsg = () => {
        setErrorMsg(false);
        setMessage("");
    };

    return(
        <div className="w-full overflow-x-hidden mt-[15rem] items-center">
            <PromoteUserDom
            codeRef={codeRef}
            emailRef={emailRef}
            handleClearMsg={handleClearMsg}
            handleUserPromotion={handleUserPromotion}
            isLoading={isLoading}
            message={message}
            setMessage={setMessage}
            errorMsg={errorMsg} 
            />
        </div>
    )
};
export default PromoteUser;