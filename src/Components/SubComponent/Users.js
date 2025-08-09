import React, { useEffect, useState } from "react";
import BigSpinner from "../../Utils/BigSpinner";
import GetAllUsers from "../GetAllUsers";

const Users = () => {
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const usersTimer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);
        return () => clearTimeout(usersTimer);
    }, []);
    return (
        <div>
            {
                isLoading ? <BigSpinner /> : <GetAllUsers />
            }
        </div>
    );
};
export default Users;