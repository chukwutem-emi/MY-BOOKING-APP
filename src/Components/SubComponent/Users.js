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
        <div className="flex items-center justify-center mt-[8rem]">
            {
                isLoading ? <BigSpinner /> : <GetAllUsers />
            }
        </div>
    );
};
export default Users;