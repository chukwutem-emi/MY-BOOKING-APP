import { useEffect, useState } from "react"
import { PROMOTE_USER_URL } from "../Utils/constants";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



const usePromoteUser = () => {
    const[message, setMessage]      = useState("");
    const[errorMsg, setErrorMsg]    = useState(false);
    const[isLoading, setIsLoading]  = useState(false);

    const userToken = useSelector((store) => store.token?.accessToken);
    const navigate = useNavigate();

    useEffect(() => {
        if (message) {
            window.scrollTo({top:0, behavior:"smooth"});
        }
    }, [message]);

    const handlePromoteUser = async (e, payload) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const promoteUser = await fetch(PROMOTE_USER_URL, {
                method:"PUT",
                headers:{
                    "Content-Type"  : "application/json",
                    "access-token"  :  `Bearer ${userToken}`,
                },
                body:JSON.stringify(payload),
            });
            const json = await promoteUser.json();
            if (promoteUser.status === 200) {
                setMessage(json.Promoted);
                setErrorMsg(false);
                setTimeout(() => {
                    navigate("/users");
                }, 4000);
            } else {
                const [key] = Object.keys(json)
                setMessage(json[key || "An error occurred"]);
                setErrorMsg(true);
            }

        } catch(error) {
            setMessage(`An error occurred or server not responding. Please check your internet connection and try again later. ${String(error)}`);
            setErrorMsg(true);
        } finally {
            setIsLoading(false);
        }
    };
    return {
        handlePromoteUser,
        message,
        errorMsg,
        isLoading,
        setErrorMsg,
        setMessage
    }
};
export default usePromoteUser;