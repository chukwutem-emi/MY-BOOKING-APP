import React, { useEffect, useState } from "react";
import BigSpinner from "../../Utils/BigSpinner";
import UpdatePersonnelInfo from "../../PersonnelCrudOperation/UpdatePersonnelInfo";

const UpdatePersonnelInfoSubComponent = () => {
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        const updatePersonnelInfoTimer = setTimeout(() => {
            setLoading(false);
        }, 4000);
        return () => clearTimeout(updatePersonnelInfoTimer);
    }, []);
    return (
        <div className="flex items-center justify-center mt-[8rem]">
            {
                loading ? <BigSpinner /> : <UpdatePersonnelInfo />
            }
        </div>
    );
};
export default UpdatePersonnelInfoSubComponent;