import React from "react";
import { useState } from "react";
import { SIGN_UP_URL } from "../Utils/constants";
import { useNavigate } from "react-router-dom";


const useSignUp = (setMessage, setIsError) => {
    const[loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSignup = async(payload) => {
        setLoading(true);
        try {
            const data = await fetch(SIGN_UP_URL, {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(payload),
            });
            const json = await data.json();
            !json && setMessage("No response")

            if (data.status === 201) {
                setMessage(json.success || "✔️ Registration successful!");
                setIsError(false);
                setTimeout(() => {
                    if (typeof navigate === "function") {
                        navigate("/");
                    }
                }, 5000);
            } else {
                const [key] = Object.keys(json);
                setMessage(json[key] || "❌ Invalid input");
                setIsError(true);
            }
        } catch(error) {
            setMessage(`❌ Network error or server not responding. Please check your internet connection. ${String(error)}`);
            setIsError(true);
        } finally {
            setLoading(false)
        }
    };
    return {
        handleSignup,
        loading
    };
};
export default useSignUp;