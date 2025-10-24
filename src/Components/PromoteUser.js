import React, { useEffect, useRef, useState } from "react";
import usePromoteUser from "../UserCustomHooks/usePromoteUser";
import PromoteUserDom from "../UserDom/PromoteUserDom";


const PromoteUser = () => {
    const[userName, setUserName] = useState("");

    const {
        handlePromoteUser : handleUserPromotionInfo,
        message,
        errorMsg,
        isLoading,
        setMessage
    } = usePromoteUser();

    useEffect(() => {
        if (message) {
            window.scrollTo({top:0, behavior:"smooth"});
        };
    }, [message]);

    const handleUserPromotion = (e) => {
        e.preventDefault();
        const payload = {
            username : userName
        };
        handleUserPromotionInfo(payload)
    };

    const handleSelected = (event) => {
        setUserName(event.target.value);
    };
    return(
        <div className="w-full overflow-x-hidden mt-[15rem] items-center">
            <PromoteUserDom
            errorMsg={errorMsg}
            handleSelected={handleSelected}
            handleUserPromotion={handleUserPromotion}
            isLoading={isLoading}
            message={message}
            setMessage={setMessage} 
            />
        </div>
    )
};
export default PromoteUser;