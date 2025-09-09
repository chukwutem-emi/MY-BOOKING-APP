import { useState } from "react";
import { DELETE_PERSONNEL_INFO } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { removePersonnelDetails } from "../Utils/usersDetailsAndAppointmentsSlice";


const useDeletePersonnel = () => {
    const[isLoading, setIsLoading]                 = useState(false);
    const[errorMsg, setErrorMsg]                   = useState(false);
    const[message, setMessage]                     = useState("");
    const[backgroundLoading, setBackgroundLoading] = useState(false);

    const userToken = useSelector((store) => store.token?.accessToken);

    const dispatch = useDispatch();

    const handleDeletePersonnel = async (payload) => {
        setIsLoading(true);
        setBackgroundLoading(true);

        try {
            const data = await fetch(DELETE_PERSONNEL_INFO, {
                method:"DELETE",
                headers:{
                    "Content-Type" : "application/json",
                    "access-token" : `Bearer ${userToken}`
                },
                body:JSON.stringify(payload)
            });
            const json = await data.json();
            if (data.status === 200) {
                setMessage(json.deleted);
                setErrorMsg(false);
                dispatch(removePersonnelDetails());
            } else {
                const [key] = Object.keys(json);
                setMessage(json[key] || "An error has occurred!.");
                setErrorMsg(true);
            }
        } catch (error) {
            setMessage(`Network error or server not responding. Please check your internet connection. ${String(error)}`);
            setErrorMsg(true);
        } finally {
            setIsLoading(false);
            setBackgroundLoading(false);
        }
    };
    return {
        handleDeletePersonnel,
        message,
        setMessage,
        errorMsg,
        setErrorMsg,
        isLoading,
        backgroundLoading
    };
};
export default useDeletePersonnel;