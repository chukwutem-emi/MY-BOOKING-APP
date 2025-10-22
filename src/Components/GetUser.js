import React from "react";
import useGetUser from "../UserCustomHooks/useGetUser"
import GetUserDom from "../UserDom/GetUserDom";


const GetUser = () => {
    const {
        backgroundLoading,
        errorMsg,
        handleGetUser,
        hasFetch,
        loading,
        responseMsg,
        setResponseMsg
    } = useGetUser();
        
    return (
        <div className="overflow-x-hidden w-full">
            <GetUserDom
             backgroundLoading={backgroundLoading}
             errorMsg={errorMsg}
             handleGetUser={handleGetUser}
             hasFetch={hasFetch}
             loading={loading}
             responseMsg={responseMsg}
             setResponseMsg={setResponseMsg}
            />
        </div>
    ); 
};
export default GetUser;