import { useState } from "react";
import { useSelector } from "react-redux";
import { UPDATE_PERSONNEL_INFO } from "../Utils/constants";
import { useNavigate } from "react-router-dom";


const useUpdatePersonnelInfo = () => {
    const[backgroundLoading, setBackgroundLoading] = useState(false);
    const[isLoading, setIsLoading]                 = useState(false);
    const[errorMsg, setErrorMsg]                   = useState(false);
    const[message, setMessage]                     = useState("");

    const navigate = useNavigate();

    const userToken = useSelector((store) => store.token?.accessToken);

    const handleUpdatePersonnelInfo = async (payload) => {
        setBackgroundLoading(true);
        setIsLoading(true);

        try {
            const data = await fetch(UPDATE_PERSONNEL_INFO, {
                method:"PUT",
                headers:{
                    "Content-Type" : "application/json",
                    "access-token" : `Bearer ${userToken}`
                },
                body:JSON.stringify(payload)
            });
            const json = await data.json();
            if (data.status === 200) {
                setMessage(json.updated);
                setErrorMsg(false);
                setTimeout(() => {
                    if (typeof navigate === "function") {
                        navigate("/all-personnel");
                    }
                }, 4000);
            } else {
                const [key] = Object.keys(json);
                setMessage(json[key] || "An error has occurred!.");
                setErrorMsg(true);
            }
        } catch (error) {
            setMessage(`Network error or server not responding. Please check your internet connection. ${String(error)}`);
            setErrorMsg(true);
        } finally {
            setBackgroundLoading(false);
            setIsLoading(false);
        }
    };
    return {
        handleUpdatePersonnelInfo,
        backgroundLoading,
        isLoading,
        message,
        errorMsg,
        setErrorMsg,
        setMessage
    };
};
export default useUpdatePersonnelInfo;