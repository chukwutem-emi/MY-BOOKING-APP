import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { FETCH_USER_URL } from "../Utils/constants";
import { addUserInfo } from "../Utils/getUserSlice";

const useGetUser = () => {
    const[loading, setLoading]                     = useState(false);
    const[backgroundLoading, setBackgroundLoading] = useState(false);
    const[responseMsg, setResponseMsg]             = useState("");
    const[errorMsg, setErrorMsg]                   = useState(false);
    const[hasFetch, setHasFetch]                   = useState(false)

    const userToken = useSelector((store) => store.token?.accessToken);
    const dispatchUser = useDispatch()

    useEffect(() => {
        if (userToken) {
            handleGetUser();
        }
    }, [userToken]);

    const handleGetUser = async () => {
        setLoading(true);
        setBackgroundLoading(true)
        try {
            const data = await fetch(FETCH_USER_URL, {
                method:"GET",
                headers:{
                    "Content-Type" : "application/json",
                    "access-token" : `Bearer ${userToken}`
                }
            });
            const json = await data.json();
            if (data.status === 200) {
                setResponseMsg(json.user);
                dispatchUser(addUserInfo(json.user))
                setHasFetch(true);
                setErrorMsg(false);
            }else {
                const [key] = Object.keys(json);
                setResponseMsg(json[key]);
                setErrorMsg(true);
            }

        } catch (error) {
            setResponseMsg(`Network error or server not responding. Please check your internet connection. ${String(error)}`);
            setErrorMsg(true);
        }finally {
            setLoading(false);
            setBackgroundLoading(false);
        }
    };
    return {
        handleGetUser,
        loading,
        backgroundLoading,
        responseMsg,
        errorMsg,
        hasFetch,
        setResponseMsg
    };
};
export default useGetUser;