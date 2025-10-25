import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DELETE_USER_URL } from "../Utils/constants";


const useDeleteUser = () => {
    const[message, setMessage]   = useState("");
    const[errorMsg, setErrorMsg] = useState(false);
    const[loading, setLoading]   = useState(false);

    const userToken = useSelector((store) => store.token?.accessToken);

    const navigate = useNavigate()

    const handleDeleteUser = async (payload) => {
        setLoading(true);

        try {
            const deleteUser = await fetch(DELETE_USER_URL, {
                method:"DELETE",
                headers:{
                    "Content-Type" : "application/json",
                    "access-token"  : `Bearer ${userToken}`
                },
                body:JSON.stringify(payload),
            });
            const json = await deleteUser.json();
            if (deleteUser.status === 200) {
                setMessage(json.Deleted);
                setErrorMsg(false);
                setTimeout(() => {
                    navigate("/users");
                }, 400);
            } else {
                const [key] = Object.keys(json);
                setMessage(json[key]);
                setErrorMsg(true);
            }
        } catch(error) {
            setMessage(`Network error or server not responding. Please check your internet connection. ${String(error)}`);
            setErrorMsg(true);
        } finally {
            setLoading(false);
        }
    };
    return {
        message,
        errorMsg,
        loading,
        handleDeleteUser,
        setMessage
    };
}; 
export default useDeleteUser;