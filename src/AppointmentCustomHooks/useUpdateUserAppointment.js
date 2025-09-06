import { useState } from "react";
import { useSelector } from "react-redux";
import { UPDATE_USER_APPOINTMENT_URL } from "../Utils/constants";
import { useNavigate } from "react-router-dom";

const useUpdateUserAppointment = () => {
    const[loading, setLoading] = useState(false);
    const[message, setMessage] = useState("");
    const[isError, setIsError] = useState(false);

    const userToken = useSelector((store) => store.token?.accessToken);

    const navigate = useNavigate();

    const handleUpdateUserAppointment = async (payload) => {
        setLoading(true);

        try {
            const data = await fetch(UPDATE_USER_APPOINTMENT_URL, {
                method:"PUT",
                headers:{
                    "Content-Type" : "application/json",
                    "access-token" : `Bearer ${userToken}`
                },
                body:JSON.stringify(payload)
            });
            const json = await data.json();

            if (data.status === 200) {
                setMessage(json.user_appointment_info);
                setIsError(false);
                setTimeout(() => {
                    navigate("/user-appointment");
                }, 5000);
            } else {
                const [key] = Object.keys(json);
                setMessage(json[key] || "An error has occurred.");
                setIsError(true);
            }
        } catch (error) {
            setMessage(`Network error or server not responding. ${String(error)}`);
            setIsError(true);
        } finally {
            setLoading(false);
        }
    };
    return {
        handleUpdateUserAppointment,
        loading,
        isError,
        message,
        setIsError,
        setMessage
    };
};
export default useUpdateUserAppointment;