import { useEffect, useState } from "react";
import { UPDATE_USER_URL } from "../../../Utils/constants";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const useUpdateUser = () => {
    const[message, setMessage] = useState("");
    const[loading, setLoading] = useState(false);
    const[errorMessage, setErrorMessage] = useState(false);
    const userToken = useSelector((store) => store.token?.accessToken);

    const navigate = useNavigate();

    useEffect(() => {
        if (message) {
            window.scrollTo({top:0, behavior:"smooth"});
        }
    }, [message])

    const handleUserUpdate = async (e, payload) => {
        e.preventDefault();
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
            setMessage(`An error occurred or server not responding. Please check your internet connection or try again later. ${String(error)}`);
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
    }
};
export default useUpdateUser;