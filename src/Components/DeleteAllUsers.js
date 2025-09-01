import React from "react";
import useDeleteAllUser from "../UserCustomHooks/useDeleteAllUser";
import DeleteAllUsersDom from "../UserDom/DeleteAllUsersDom";

const DeleteAllUsers = () => {
    const {
        backgroundLoading,
        errorMsg,
        handleDeleteAllUsers,
        isLoading, 
        message,
        setMessage,
    } = useDeleteAllUser();

    return (
        <div className="w-full mt-[16rem] overflow-x-hidden">
            <DeleteAllUsersDom
            backgroundLoading={backgroundLoading}
            errorMsg={errorMsg}
            handleDeleteAllUsers={handleDeleteAllUsers}
            isLoading={isLoading}
            message={message}
            setMessage={setMessage} 
            />
        </div>
    );
};
export default DeleteAllUsers;