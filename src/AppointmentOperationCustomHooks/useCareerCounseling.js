import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CAREER_COUNSELING_URL, BASE_URL } from "../Utils/constants";


const useCareerCounseling = () => {
    const[message, setMessage]   = useState("");
    const[errorMsg, setErrorMsg] = useState(false);
    const[loading, setLoading]   = useState(false);

    const getUserToken = useSelector((store) => store.token?.accessToken);

    const navigate = useNavigate();

    useEffect(() => {
        if (message) {
            window.scrollTo({top:0, behavior:"smooth"});
        }
    }, [message])

    const handleCareerClick = async (event, payload) => {
        event.preventDefault();
        setLoading(true);
        try {
            const data = await fetch(CAREER_COUNSELING_URL, {
                method:"POST",
                headers:{
                    "Content-Type" : "application/json",
                    "access-token" : `Bearer ${getUserToken}`,
                },
                body:JSON.stringify(payload)
            });
            const json = await data.json();
            if (data.status === 401) {
                if (json.re_auth_url) {
                    const authUrl = `${BASE_URL}${json.re_auth_url}`
                    setTimeout(() => {
                        window.open(authUrl, "_blank")
                    }, 5000);
                    setMessage(`
                        ❗You haven't authenticated yet.
                        <br />
                        🔐 Redirecting you to google for authentication...........
                        <br />
                        <a
                        href     = ${authUrl}
                        target   = "_blank"
                        rel      = "noopener noreferrer"
                        class    = "text-blue-600 underline animate-pulse"
                        >
                        Click here to authenticate
                        </a>
                        `);
                } else if (json.Msg) {
                    setMessage("⚠️ Access denied!. You must be logged in to book an appointment");
                    setTimeout(() => {
                        navigate("/")  
                    }, 8000);
                } else {
                    setMessage("Unauthorized access!.Please login or try again later.");
                }
                setErrorMsg(true);
            } else if (data.status === 201) {
                setMessage(`
                    ${json.Career_counseling}<br><a class="text-blue-500 justify-center items-center text-center font-semibold underline hover:text-lg hover:text-blue-800 my-0 mx-auto" target="_blank" href=${json.googleCalendarEvent} ref="noopener noreferrer">Click here to view the career-counseling appointment</a>
                    `);
                setErrorMsg(false);
            } else {
                const [key] = Object.keys(json);
                setMessage(json[key] || "An error occurred!.")
                setErrorMsg(true)
            }
        }catch(error) {
            setMessage(`❌Network issue or server not responding ${String(error)}`);
            setErrorMsg(true)
        }finally {
            setLoading(false);
        }
    };
    return {
        handleCareerClick,
        message,
        errorMsg,
        loading
    };
};
export default useCareerCounseling
