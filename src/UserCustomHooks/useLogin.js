import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGIN_URL } from "../Utils/constants";
import { addAccessToken } from "../Utils/tokenSlice";


const useLogin = (setMessage, setIsError) => {
    const[loading, setLoading]   = useState(false);

    const langKey = useSelector((store) => store.config?.lang);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (payload) => {
        setLoading(true)
        try {
            const data = await fetch(LOGIN_URL, {
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(payload),
                });
                const json = await data.json();
                console.log("JSON:", json)
                if (data.status === 200) {
                    setMessage(json.Login);
                    setIsError(false);
                    dispatch(addAccessToken(json.Token))
                    setTimeout(() => {
                        navigate("/clear-token")
                    }, 6000);
                } else {
                    const [key] = Object.keys(json);
                    setMessage(json[key] || "❌ Invalid input");
                    setIsError(true);
                }       
        } catch(error) {
            setMessage(`An error occurred or server not responding. please check internet connection or try again later. ${String(error)}`);
            setIsError(true);
        } finally {
            setLoading(false)
        }

    };
    return {
        langKey,
        loading,
        handleLogin
    }
};
export default useLogin;