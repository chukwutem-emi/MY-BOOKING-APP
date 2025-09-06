import { useState } from "react";
import { FETCH_USER_APPOINTMENT_URL } from "../Utils/constants";
import { useSelector } from "react-redux";

const useGetUserAppointment = () => {
    const[loading, setLoading]                     = useState(false);
    const[message, setMessage]                     = useState("");
    const[isError, setIsError]                     = useState(false);
    const[backgroundLoading, setBackgroundLoading] = useState(false);
    const[hasFetch, setHasFetch]                   = useState(false);

    const userToken = useSelector((store) => store.token?.accessToken);

    const handleGetUserAppointment = async () => {
        setLoading(true);
        setBackgroundLoading(true);

        try {
            const data = await fetch(FETCH_USER_APPOINTMENT_URL, {
                method:"GET",
                headers:{
                    "Content-Type" : "application/json",
                    "access-token" : `Bearer ${userToken}`
                }
            });
            const json = await data.json();

            if (data.status === 200) {
                setMessage(json.user_appointments);
                setIsError(false);
                setHasFetch(true);
            } else {
                const [key] = Object.keys(json);
                setMessage(json[key] || "An error has occurred.");
                setIsError(true);
            }
        } catch (error) {
            setMessage(`Network error or server not responding. ${String(error)}`);
            setIsError(true);
        } finally {
            setBackgroundLoading(false);
            setLoading(false);
        }
    };
    return {
        loading,
        message,
        setMessage,
        isError,
        handleGetUserAppointment,
        backgroundLoading,
        userToken,
        hasFetch
    };
};
export default useGetUserAppointment;