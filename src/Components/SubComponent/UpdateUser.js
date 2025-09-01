import React, { useEffect, useState } from "react";
import BigSpinner from "../../Utils/BigSpinner";
import UpdateUser from "../UpdateUser";


const UpdateUserSubComponent = () => {
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        const updateTimer = setTimeout(() => {
            setLoading(false);
        }, 4000);
        return () => clearTimeout(updateTimer);
    }, []);
    return (
        <div className="flex items-center justify-center mt-[8rem]">
            {
                loading ? <BigSpinner /> : <UpdateUser /> 
            }
        </div>
    );
};
export default UpdateUserSubComponent;