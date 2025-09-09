import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeAccessToken } from "../../Utils/tokenSlice";
import { removePassword } from "../../Utils/getUserSlice";

const Logout = () => {
    const[isLogin, setIsLogin] = useState("Logout");
    const navigate = useNavigate();
    const dispatchLogOutAndRemoveAccessToken = useDispatch();
    const dispatchLogoutAndRemovePassword = useDispatch();
   useEffect(() => {
        if (isLogin === "Login") {
            logOut();
        }
   }, [isLogin]);

   const logOut = () => {
    dispatchLogOutAndRemoveAccessToken(removeAccessToken());
    dispatchLogoutAndRemovePassword(removePassword());
    setTimeout(() => {
        navigate("/"); 
    }, 3000);
   };
    return (
        <button type="button" onClick={() => {isLogin === "Logout" ? setIsLogin("Login") : setIsLogin("Login")}} className="text-white text-center hover:border-[2px] hover:border-white items-center font-sans p-1 mt-5 xs:text-[0.8rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.3rem] xl:text-[1.3rem]">{isLogin}</button>
    );
};
export default Logout;