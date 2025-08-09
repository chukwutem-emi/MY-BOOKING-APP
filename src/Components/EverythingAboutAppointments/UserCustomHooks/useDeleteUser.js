import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DELETE_USER_URL } from "../../../Utils/constants";
import { useNavigate } from "react-router-dom";


const useDeleteUser = () => {
    const[message, setMessage] = useState("");
    const[errorMsg, setErrorMsg] = useState(false);
    const[loading, setLoading]   = useState(false);

    const userToken = useSelector((store) => store.token?.accessToken);

    const navigate = useNavigate()

    useEffect(() => {
        if (message) {
            window.scrollTo({top:0, behavior:"smooth"});
        }
    }, [message]);
    const handleDeleteUser = async (e, payload) => {
        e.preventDefault();
        setLoading(true);

        try {
            const deleteUser = await fetch(DELETE_USER_URL, {
                method:"DELETE",
                headers:{
                    "Content-Type" : "application/json",
                    "access-code"  : `Bearer ${userToken}`
                },
                body:JSON.stringify(payload),
            });
            const json = deleteUser.json();
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
            setMessage(`An error occurred or server not responding.${String(error)}`);
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
    };
}; 
export default useDeleteUser;