import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL, REAL_ESTATE_AGENTS_URL } from "../Utils/constants";

const useRealEstateAgent = () => {
    const[message, setMessage]      = useState("");
    const[isLoading, setIsLoading]  = useState(false);
    const[isError, setIsError]      = useState(false);

    const navigate = useNavigate();

    const userToken = useSelector((store) => store.token?.accessToken);
    useEffect(() => {
        if (message) {
            window.scrollTo({top:0, behavior:"smooth"});
        }
    }, [message]);
    const handleRealEstateAppointment = async (event, payload) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const data = await fetch(REAL_ESTATE_AGENTS_URL, {
                method:"POST",
                headers:{
                    "Content-Type" : "application/json",
                    "access-token" : `Bearer ${userToken}`
                },
                body:JSON.stringify(payload)
            });
            const json = await data.json();
            if (data.status === 401) {
                if (json.real_estate_error) {
                    setMessage(json.real_estate_error);
                    setIsError(true);
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
                        🔐 Redirecting you to google for authentication........
                        <br />
                        <a
                        target  = "_blank"
                        href    = ${authUrl}
                        rel     = "noopener, noreferrer"
                        title   = "click here"
                        class   = "text-blue-600 underline animate-pulse cursor-pointer"
                        >Click here to authenticate.</a>
                        `)
                } else {
                    setMessage("Unauthorized!, access denied. Please ensure that you are logged in and try again later");
                }
                setIsError(true);
            } else if (data.status === 201) {
                setMessage(`${json.real_estate_agent}<br><a href=${json.googleCalendarLink} rel="noopener, noreferrer" target="_blank" title="click here" class="text-blue-500 justify-center items-center text-center font-semibold underline hover:text-lg hover:text-blue-800 my-0 mx-auto break-words">Click this link to view the real-estate-agent appointment you booked in google calender</a>`)
                setIsError(false);
            } else {
                const [key] = Object.keys(json);
                setMessage(json[key] || "An error occurred. Please try again");
                setIsError(true)
            }
        }catch(error) {
            setMessage(`Network error or server not responding. ${String(error)}`);
            setIsError(true)
        }finally {
            setIsLoading(false);
        }
    };
    return {
        handleRealEstateAppointment,
        message,
        isError,
        isLoading
    }
};
export default useRealEstateAgent;