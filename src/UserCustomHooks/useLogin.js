import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FETCH_USER_URL, LOGIN_URL } from "../Utils/constants";
import { addAccessToken } from "../Utils/tokenSlice";
import { addUserInfo } from "../Utils/getUserSlice";


const useLogin = (setMessage, setIsError) => {
    const[loading, setLoading]   = useState(false);

    const langKey = useSelector((store) => store.config?.lang);

    const dispatch = useDispatch();
    const navigate = useNavigate();
     
    const fetchUserAfterLogin = async (token) => {
        try {
            const fetchUser = await fetch(FETCH_USER_URL, {
                method : "GET",
                headers : {
                    "Content-Type" : "application/json",
                    "access-token" : `Bearer ${token}`
                }
            });
            const userData = await fetchUser.json();
            if (fetchUser.status === 200) {
                dispatch(addUserInfo(userData.user));
            }
        } catch (error) {
            console.log(`Fail to fetch user details after login ${String(error)}`)
        };
    };
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
                    dispatch(addAccessToken(json.Token));

                    await fetchUserAfterLogin(json.Token)
                    
                    setTimeout(() => {
                        navigate("/clear-token")
                    }, 6000);
                } else {
                    const [key] = Object.keys(json);
                    setMessage(json[key] || "❌ Invalid input");
                    setIsError(true);
                }       
        } catch(error) {
            setMessage(`Network error or server not responding. Please check your internet connection. ${String(error)}`);
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