import { useState } from "react";
import { useSelector } from "react-redux";
import { UPLOAD_PERSONNEL } from "../Utils/constants";
import { useNavigate } from "react-router-dom";


const useUploadPersonnel = () => {
    const[backgroundLoading, setBackgroundLoading] = useState(false);
    const[isLoading, setIsLoading]                 = useState(false);
    const[errorMsg, setErrorMsg]                   = useState(false);
    const[message, setMessage]                     = useState("");

    const navigate = useNavigate();

    const userToken = useSelector((store) => store.token?.accessToken);

    const handleUploadPersonnel = async (payload) => {
        setBackgroundLoading(true);
        setIsLoading(true);

        try {
            const data = await fetch(UPLOAD_PERSONNEL, {
                method:"POST",
                headers:{
                    "Content-Type" : "application/json",
                    "access-token" : `Bearer ${userToken}`
                },
                body:JSON.stringify(payload)
            });
            const json = await data.json();
            if (data.status === 201) {
                setMessage(json.success);
                setTimeout(() => {
                    navigate("/all-personnel");
                }, 4000);
                setErrorMsg(false);
            } else {
                const [key] = Object.keys(json);
                setMessage(json[key] || "An error has occurred!.")
                setErrorMsg(true)
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
        handleUploadPersonnel,
        backgroundLoading,
        isLoading,
        message,
        errorMsg,
        setErrorMsg,
        setMessage
    };
};
export default useUploadPersonnel;