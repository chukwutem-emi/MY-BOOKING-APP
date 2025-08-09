import React, { useEffect, useState } from "react";
import BigSpinner from "../../Utils/BigSpinner";
import GetUser from "../GetUser";

const User = () => {
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const userTimer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);
        return () => clearTimeout(userTimer);
    }, []);
    return (
        <div>
            {
                isLoading ? <BigSpinner /> : <GetUser />
            }
        </div>
    );
};
export default User;