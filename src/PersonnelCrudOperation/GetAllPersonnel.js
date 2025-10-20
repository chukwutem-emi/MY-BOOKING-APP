import React, { useEffect, useRef } from "react";
import useGetAllPersonnel from "../PersonnelCustomHooks/useGetAllPersonnel";;
import GetAllPersonnelDom from "../PersonnelDom/GetAllPersonnelDom";


const GetAllPersonnel = () => {
    const searchText = useRef(null);

    const {
        backgroundLoading,
        errorMsg,
        filteredPersonnelList,
        handleBtnClick,
        isLoading,
        message,
        setErrorMsg,
        setMessage,
    } = useGetAllPersonnel();

    useEffect(() => {
        if (message && !errorMsg) {
            searchText.current.value = "";
        }
    }, [message, errorMsg]);
    
    const handleClearMsg = () => {
        setErrorMsg(false);
        setMessage("");
    };
    return (
        <div className="w-full overflow-x-hidden">
            <GetAllPersonnelDom
            backgroundLoading={backgroundLoading}
            errorMsg={errorMsg}
            filteredPersonnelList={filteredPersonnelList}
            handleBtnClick={handleBtnClick}
            handleClearMsg={handleClearMsg}
            isLoading={isLoading}
            message={message}
            searchText={searchText} 
            />
        </div>
    );
};
export default GetAllPersonnel;