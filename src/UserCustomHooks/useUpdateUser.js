import { useState } from "react";
import { UPDATE_USER_URL } from "../Utils/constants"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const useUpdateUser = () => {
    const[message, setMessage] = useState("");
    const[loading, setLoading] = useState(false);
    const[errorMessage, setErrorMessage] = useState(false);
    const userToken = useSelector((store) => store.token?.accessToken);

    const navigate = useNavigate();

    const handleUserUpdate = async (payload) => {
        setLoading(true);
        try {
            const updateUser = await fetch(UPDATE_USER_URL, {
                method:"PUT",
                headers:{
                    "Content-Type" : "application/json",
                    "access-token" : `Bearer ${userToken}`
                },
                body:JSON.stringify(payload),
            });
            const json = await updateUser.json();

            if (updateUser.status === 200) {
                setMessage(json.Updated);
                setErrorMessage(false);
                setTimeout(() => {
                    navigate("/user");
                }, 6000);
            } else {
                const [key] = Object.keys(json);
                setMessage(json[key]);
                setErrorMessage(true);
            }
        } catch(error) {
            setMessage(`Network error or server not responding. Please check your internet connection. ${String(error)}`);
            setErrorMessage(true);
        } finally {
            setLoading(false);
        }
    }
    return{
        handleUserUpdate,
        message,
        loading,
        errorMessage,
        setMessage,
        setErrorMessage
    }
};
export default useUpdateUser;