import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ONE_ON_ONE_TUTORING_URL, BASE_URL } from "../Utils/constants";
import { useSelector } from "react-redux";


const useOneOnOneTutoring = () => {
    const userToken = useSelector((store) => store.token?.accessToken);
    const[message, setMessage]      = useState("");
    const[isError, setIsError]      = useState(false);
    const[isLoading, setIsLoading]  = useState(false);

    const navigate = useNavigate();

    const handleOneOnOneTutorial = async (payload) => {
        setIsLoading(true);
        try {
            const data = await fetch(ONE_ON_ONE_TUTORING_URL, {
                method:"POST",
                headers:{
                    "Content-Type" : "application/json",
                    "access-token" : `Bearer ${userToken}`
                },
                body:JSON.stringify(payload)
            });
            const json = await data.json();
            if (data.status === 401) {
                if (json.re_auth_url){
                    const authUrl = `${BASE_URL}${json.re_auth_url}`
                    setTimeout(() => {
                        window.open(authUrl, "_blank");
                    }, 8000);
                    setMessage(`
                        ❗To book an appointment, you have to allow this app to view and manage your google calendar.
                        <br />
                        🔐 Redirecting you to google for authentication.........
                        <br />
                        <a
                        href   = ${authUrl}
                        rel    = "noopener noreferrer"
                        target = "_blank"
                        title  = "click me"
                        class  = "text-blue-600 underline animate-pulse"
                        >Click here to authenticate</a>
                        `)
                } else if (json.Msg) {
                    setMessage("⚠️ Access denied!. You must be logged in to book an appointment");
                    setTimeout(() => {
                        navigate("/");   
                    }, 8000);
                } else {
                    setMessage("Unauthorized access!. Please login or try again later.");
                    setTimeout(() => {
                        navigate("/");   
                    }, 8000);
                }
                setIsError(true)
            } else if (data.status === 201) {
                setMessage(`
                    ${json.one_one_tutoring}<br><a href=${json.googleCalendarEvent} target="_blank" rel="noopener noreferrer" title="click here" class="text-blue-500 justify-center items-center text-center font-semibold underline hover:text-lg hover:text-blue-800 my-0 mx-auto">Click here to view the one-on-one-tutoring appointment that you booked</a>
                    `);
                    setIsError(false);
            } else {
                const [key] = Object.keys(json);
                setMessage(json[key] || "An error occurred.");
                setIsError(true);
            }
        } catch(error) {
            setMessage(`📡Network error or server not responding. ${String(error)}`)
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }
    return {
        handleOneOnOneTutorial,
        message,
        isError,
        isLoading,
        setMessage
    }
};
export default useOneOnOneTutoring;