import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HEALTHCARE_CONSULTATION_URL, BASE_URL } from "../Utils/constants";


const useHealthcareConsultation = () => {
    const[message, setMessage]     = useState("");
    const[isError, setIsError]     = useState(false);
    const[isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const userToken = useSelector((store) => store.token?.accessToken);

    useEffect(() => {
        if (message) {
            window.scrollTo({top:0, behavior:"smooth"});
        }
    }, [message]);

    const handleHealthcareConsultation = async (event, payload) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const data = await fetch(HEALTHCARE_CONSULTATION_URL, {
                method:"POST",
                headers:{
                    "Content-Type" : "application/json",
                    "access-token" : `Bearer ${userToken}`
                },
                body:JSON.stringify(payload),
            });
            const json = await data.json();
            if (data.status === 401) {
                if (json.re_auth_url) {
                    const authUrl = `${BASE_URL}${json.re_auth_url}`;
                    setTimeout(() => {
                        window.open(authUrl, "_blank");
                    }, 8000);
                    setMessage(`
                        ⚠️ You haven't authenticated yet.
                        <br />
                        🔐 Redirecting you to google for authentication.........
                        <br />
                        <a
                        href   = ${authUrl}
                        target = "_blank"
                        rel    = "noopener, noreferrer"
                        title  = "click to authenticate now"
                        class  = "text-blue-600 underline animate-pulse"
                        >Click here to authenticate</a>
                        `);
                } else if (json.consultation) {
                    setMessage(json.consultation);
                    setTimeout(() => {
                        navigate('/');
                    }, 8000);
                } else {
                    setMessage("Unauthorized access!. Please login or try again later.")
                    setTimeout(() => {
                        navigate("/");
                    }, 8000);
                }
                setIsError(true);
            } else if (data.status === 201) {
                setMessage(`${json.Consultation}<br><a href=${json.googleCalendarLink} target="_blank" ref="noopener, noreferrer" class="text-blue-500 justify-center items-center text-center font-semibold underline hover:text-lg hover:text-blue-800 my-0 mx-auto" title="click here">click here to view the healthcare consultation you booked in google calender</a>`)
                setIsError(false);
            } else {
                const [key] = Object.keys(json)
                setMessage(json[key]);
                setIsError(true);
            }

        } catch(error) {
            setMessage(`📡Network error or server not responding.${String(error)}`);
            setIsError(true);

        } finally {
            setIsLoading(false)
        }
    };
    return {
        handleHealthcareConsultation,
        message,
        isError,
        isLoading
    };
};
export default useHealthcareConsultation;