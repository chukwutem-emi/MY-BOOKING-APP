import { useEffect, useState } from "react";
import { DELETE_ALL_USERS_URL } from "../Utils/constants";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const useDeleteAllUser = () => {
    const[isLoading, setIsLoading]                 = useState(false);
    const[message, setMessage]                     = useState("");
    const[backgroundLoading, setBackgroundLoading] = useState(false);
    const[errorMsg, setErrorMsg]                   = useState(false);

    const navigate = useNavigate();

    const userToken = useSelector((store) => store.token?.accessToken);

    useEffect(() => {
        if (userToken) {
            handleDeleteAllUsers();
        };
    }, []);

    const handleDeleteAllUsers = async () => {
        setIsLoading(true);
        setBackgroundLoading(true);
        try {
            const data = await fetch(DELETE_ALL_USERS_URL, {
                method:"DELETE",
                headers:{
                    "Content-Type" : "application/json",
                    "access-token" : `Bearer ${userToken}`
                },
            });
            const json = await data.json();
            if (data.status === 403) {
                setMessage(json.permission_denied);
                setErrorMsg(true);
                setTimeout(() => {
                    if (typeof navigate === "function") {
                        navigate("/browse");
                    }
                }, 8000);
            } else if (data.status === 200) {
                setMessage(json.all_users_deleted);
                setErrorMsg(false);
                setTimeout(() => {
                    navigate("/users")
                }, 8000);
            } else {
                const [key] = Object.keys(json);
                setMessage(json[key] || "An error has occurred!.")
                setErrorMsg(true);
            }
        } catch (error) {
            setMessage(`Network error or server not responding. Please check your internet connection. ${String(error)}`);
            setErrorMsg(true);
        } finally {
            setBackgroundLoading(false);
            setIsLoading(false);
        };
    };
    return {
        backgroundLoading,
        message,
        isLoading,
        errorMsg,
        setMessage,
        handleDeleteAllUsers
    };
};
export default useDeleteAllUser;