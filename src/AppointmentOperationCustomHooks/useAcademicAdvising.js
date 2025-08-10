import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ACADEMIC_ADVISING_URL, BASE_URL } from "../Utils/constants";
import { useNavigate } from "react-router-dom";


const useAcademicAdvisory = () => {
    const userToken = useSelector((store) => store.token?.accessToken)
    const[isLoading, setIsLoading] = useState(false);
    const[errorMsg, setErrorMsg]   = useState(false);
    const[message, setMessage]     = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (message) {
            window.scrollTo({top:0, behavior:"smooth"});
        }
    }, [message]);

    const handleAcademic = async (event, payload) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const data = await fetch(ACADEMIC_ADVISING_URL, {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "access-token":`Bearer ${userToken}`,
                },
                body:JSON.stringify(payload),
            });
            const json = await data.json();
            if (data.status === 401) {
                if (json.re_auth_url) {
                    const authUrl = `${BASE_URL}${json.re_auth_url}`
                    setTimeout(() => {
                        window.open(authUrl, "_blank");   
                    }, 5000);
                    setMessage(`
                        ❗You haven't authenticated yet.
                        <br />
                        🔐 Redirecting you to google for authentication.........
                        <br />
                        <a
                        href=${authUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-blue-600 underline animate-pulse"
                        >
                            Click here to authorize
                        </a>
                        `)
                } else if (json.Login_required){
                    setMessage("❌ You must be logged in to book an appointment.");
                    setTimeout(() => {
                        navigate("/")   
                    }, 8000);
                } else {
                    setMessage("⚠️ Unauthorized access. Please login or try again");
                }
                setErrorMsg(true);
            }
            else if (data.status === 201) {
                setMessage(`${json.Academic_advising}<br><a class="text-blue-600 underline font-semibold hover:text-blue-800 hover:text-lg justify-center items-center my-0 mx-auto" href="${json.googleCalendarEvent}" target="_blank" rel="noopener noreferrer">Click here to view the appointment</a>`)
                setErrorMsg(false)
            } else {
                const[key] = Object.keys(json);
                setMessage(json[key] || "An error occurred");
                setErrorMsg(true);
            }

        } catch(error) {
            setMessage(`Network issue or server not responding: ${String(error)}`);
            setErrorMsg(true);

        } finally {
            setIsLoading(false)
        };

    };
    return {
        handleAcademic,
        message,
        isLoading,
        errorMsg
    };
};
export default useAcademicAdvisory;