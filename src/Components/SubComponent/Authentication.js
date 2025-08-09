import React, { useEffect, useState } from "react";
import AuthForm from "../Authentication/AuthForm";
import WelcomePage from "../../Utils/WelcomePage";

const Authentication = () => {
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const authTimer = setTimeout(() => {
            setIsLoading(false);
        }, 8000);
        return () => clearTimeout(authTimer);
    }, []);
    return (
        <div>
            {
                isLoading ? <WelcomePage /> : <AuthForm />
            }
        </div>
    )
};
export default Authentication;