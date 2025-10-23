import React from "react";


const UsersCard = ({userData}) => {
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
        <div className=" text-green-800 bg-green-50 flex-shrink-0 break-words text-sm h-[14rem] p-4 shadow-2xl w-[80%] xl:w-[50%]">
           <ul className="xs:text-[0.9rem] sm:text-[1.2rem] md:text-[1.3rem] md:space-y-2 lg:text-[1.3rem] lg:space-y-1 xl:text-[1.3rem] xl:space-y-1">
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