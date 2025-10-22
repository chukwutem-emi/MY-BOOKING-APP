import React, { useRef} from "react";
import useGetAllUsers from "../UserCustomHooks/useGetAllUsers";
import GetAllUsersDom from "../UserDom/GetAllUsersDom";

const GetAllUsers = () => {
    const searchText = useRef(null)

    const {
        loading,
        backgroundLoading,
        responseMsg,
        errorMsg,
        filteredUsers,
        setErrorMsg,
        setResponseMsg,
        handleBtnClick,
    } = useGetAllUsers();

    const handleClear = () => {
        setErrorMsg(false);
        setResponseMsg("")
    };

    return (
        <div className="w-full overflow-x-hidden">
            <GetAllUsersDom
            backgroundLoading={backgroundLoading}
            errorMsg={errorMsg}
            filteredUsers={filteredUsers}
            handleBtnClick={handleBtnClick}
            handleClear={handleClear}
            loading={loading}
            responseMsg={responseMsg}
            searchText={searchText} 
            />
        </div>
    )
}
export default GetAllUsers;