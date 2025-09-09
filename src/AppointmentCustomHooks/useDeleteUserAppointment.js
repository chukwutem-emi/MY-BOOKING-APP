import { useState } from "react";
import { DELETE_USER_APPOINTMENT_URL } from "../Utils/constants";
import { useSelector } from "react-redux";


const useDeleteUserAppointment = () => {
    const[loading, setLoading] = useState(false);
    const[isError, setIsError] = useState(false);
    const[message, setMessage] = useState("");

    const userToken = useSelector((store) => store.token?.accessToken);

    const handleDeleteAppointment = async (payload) => {
        setLoading(true);

        try {
            const data = await fetch(DELETE_USER_APPOINTMENT_URL, {
                method:"DELETE",
                headers:{
                    "Content-Type" : "application/json",
                    "access-token" : `Bearer ${userToken}`
                },
                body:JSON.stringify(payload)
            });
            const json = await data.json();
            if (data.status === 200) {
                setMessage(json.user_appointment_details);
                setIsError(false);
            } else {
                const [key] = Object.keys(json);
                setMessage(json[key] || "An error occurred!.");
                setIsError(true);
            }
        } catch (error) {
            setMessage(`Network error or server not responding. Please check your internet connection. ${String(error)}`);
            setIsError(true);
        } finally {
            setLoading(false);
        }
    };
    return {
        handleDeleteAppointment,
        loading,
        isError,
        message,
        setMessage,
        setIsError
    };
};
export default useDeleteUserAppointment;