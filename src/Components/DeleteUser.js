import React, { useRef } from "react";
import useDeleteUser from "./EverythingAboutAppointments/UserCustomHooks/useDeleteUser";

const DeleteUser = () => {
    const emailRef = useRef(null);

    const{
        message,
        errorMsg,
        loading,
        handleDeleteUser : handleUserDelete
    } = useDeleteUser({payload:{}});

    const handleDelete = (e) => {
        e.preventDefault();
        const payload = {
            email_address : emailRef.current.value
        };
        handleUserDelete(e, payload);
    };
    return (
        <div className="w-full mt-[16rem] overflow-x-hidden">
            <form onSubmit={handleDelete} className="w-[50%]">
                <h1 className="w-full ">Delete User</h1>
                <label htmlFor="email_address" className=""><strong>User Email Address:</strong></label>
                <input
                type="email"
                id="email_address" 
                name="email_address"
                className=""
                placeholder="Enter the user email address"
                required
                autoComplete="email"
                autoFocus
                />
                <button type="submit" className="">

                </button>
            </form>
        </div>
    );
};
export default DeleteUser;