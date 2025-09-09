import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL, HOME_SERVICE_URL } from "../Utils/constants";


const useHomeService = () => {
    const[message, setMessage]      = useState("");
    const[isLoading, setIsLoading]  = useState(false);
    const[isError, setIsError]      = useState(false);

    const navigate = useNavigate();

    const userToken = useSelector((store) => store.token?.accessToken);

    const handleHomeService = async (payload) => {
        setIsLoading(true);
        try {
            const data = await fetch(HOME_SERVICE_URL, {
                method:"POST",
                headers:{
                    "Content-Type" : "application/json",
                    "access-token" : `Bearer ${userToken}`
                },
                body:JSON.stringify(payload)
            });
            const json = await data.json();
            if (data.status === 401) {
                if (json.home_service_error) {
                    setMessage(json.home_service_error);
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
                        ❗To book an appointment, you have to allow this app to view and manage your google calendar.
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
                setMessage(`${json.home_service}<br><a href=${json.googleCalendarLink} rel="noopener, noreferrer" target="_blank" title="click here" class="text-blue-500 justify-center items-center text-center font-semibold underline hover:text-lg hover:text-blue-800 my-0 mx-auto break-words">Click this link to view the home service appointment you booked in google calender</a>`)
                setIsError(false);
            } else {
                const [key] = Object.keys(json);
                setMessage(json[key] || "An error occurred. Please try again");
                setIsError(true)
            }
        }catch(error) {
            setMessage(`Network error or server not responding. Please check your internet connection. ${String(error)}`);
            setIsError(true)
        }finally {
            setIsLoading(false);
        }
    };
    return {
        handleHomeService,
        message,
        isError,
        isLoading,
        setMessage
    }
};
export default useHomeService;