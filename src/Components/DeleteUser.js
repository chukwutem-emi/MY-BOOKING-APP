import React, { useEffect, useState } from "react";
import useDeleteUser from "../UserCustomHooks/useDeleteUser";
import DeleteUserDom from "../UserDom/DeleteUserDom";

const DeleteUser = () => {
    const[userName, setUserName] = useState("");

    const{
        message,
        errorMsg,
        loading,
        handleDeleteUser : handleUserDelete,
        setMessage
    } = useDeleteUser();

    useEffect(() => {
        if (message) {
            window.scrollTo({top:0, behavior:"smooth"});
        };
    }, [message]);

    const handleDelete = (e) => {
        e.preventDefault();
        if (!userName.trim()) {
            setMessage("Please select a user before submitting.");
            return;
        };
        const payload = {
            username : userName
        };
        handleUserDelete(payload);
    };

    const handleSelected = (event) => setUserName(event.target.value);
    return (
        <div className="w-full overflow-x-hidden">
            <DeleteUserDom
            errorMsg={errorMsg}
            handleDelete={handleDelete}
            handleSelected={handleSelected}
            loading={loading}
            message={message}
            setMessage={setMessage} 
            />
        </div>
    );
};
export default DeleteUser;