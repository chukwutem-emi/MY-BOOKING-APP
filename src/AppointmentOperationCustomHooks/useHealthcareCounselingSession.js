import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HEALTHCARE_COUNSELING_URL, BASE_URL } from "../Utils/constants";


const useHealthcareCounselingSession = () => {
    const[message, setMessage]      = useState("");
    const[isError, setIsError]      = useState(false);
    const[isLoading, setIsLoading]  = useState(false);

    const userToken = useSelector((store) => store.token?.accessToken);

    const navigate = useNavigate();

    useEffect(() => {
        if (message) {
            window.scrollTo({top:0, behavior:"smooth"})
        }
    }, [message]);

    const handleCounselingSession = async (e, payload) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const data = await fetch(HEALTHCARE_COUNSELING_URL, {
                method:"POST",
                headers:{
                    "Content-Type" : "application/json",
                    "access-token" :  `Bearer ${userToken}`
                },
                body:JSON.stringify(payload)
            });
            const json = await data.json();
            if (data.status === 401) {
                if (json.counseling_error) {
                    setMessage(json.counseling_error);
                    setTimeout(() => {
                        navigate("/");   
                    }, 8000);
                } else if (json.re_auth_url) {
                    const authUrl = `${BASE_URL}${json.re_auth_url}`
                    setTimeout(() => {
                        window.open(authUrl, "_blank");
                    }, 8000);
                    setMessage(`
                        ❗You haven't authenticated yet.
                        <br />
                        🔐 Redirecting you to google for authentication.......
                        <br />
                        <a
                        href   = ${authUrl}
                        rel    = "noopener, noreferrer"
                        target = "_blank"
                        class  = "text-blue-600 underline animate-pulse"
                        title  = "click me"
                        >Click here to authenticate</a>
                        `);
                    } else {
                        setMessage("🔒Unauthorized access!. Please login or try again later");
                    }
                setIsError(true);
            } else if (data.status === 201) {
                setMessage(`${json.Counseling}<br><a class="text-blue-500 justify-center items-center text-center font-semibold underline hover:text-lg hover:text-blue-800 my-0 mx-auto" title="click here" href=${json.googleCalendarLink} rel="noopener, noreferrer" target="_blank">Click here to view the healthcare counseling session appointment you booked.</a>`)
                setIsError(false);
            } else {
                const [key] = Object.keys(json);
                setMessage(json[key] || "An error occurred!. Please try again later.");
                setIsError(true);
            }
        } catch (error) {
            setMessage(`Network error or server not responding. ${String(error)}`);
            setIsError(true)
        } finally {
            setIsLoading(false);
        }
    };
    return {
        handleCounselingSession,
        message,
        isError,
        isLoading
    };
};
export default useHealthcareCounselingSession;