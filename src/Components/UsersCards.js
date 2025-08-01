import React from "react";


const UsersCard = (props) => {
    const {userData} = props;
    const {
        id,
        username,
        public_id,
        email_address,
        phone_number,
        admin,
        created_at
    } = userData;

    return (
        <div className=" text-green-800 bg-green-50 flex-shrink-0 break-words text-sm h-[10rem] p-4 shadow-2xl">
           <ul>
            <li><strong>Id:</strong>&nbsp;{id}</li>
            <li><strong>Username:</strong>&nbsp;{username}</li>
            <li><strong>Public-id:</strong>&nbsp;{public_id}</li>
            <li><strong>Email-address:</strong>&nbsp;{email_address}</li>
            <li><strong>Phone-number:</strong>&nbsp;{phone_number}</li>
            <li><strong>Admin:</strong>&nbsp;{admin ? "Yes" : "No"}</li>
            <li><strong>Created-at:</strong>&nbsp;{created_at}</li>
            </ul> 
        </div>
    )
                        
}
export default UsersCard;