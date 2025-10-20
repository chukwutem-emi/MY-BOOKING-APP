import React from "react";

const PersonnelDetails = ({PersonnelData}) => {
    const {
        specialization,
        organization_address,
        organization,
        phone_number,
        email,
        name,
        role
    } = PersonnelData;
    return (
        <div className="xl:w-[50%] w-[80%] bg-green-50 text-green-800 font-sans shadow-2xl p-6 overflow-x-auto flex-shrink-0 break-words">
            <ul className="">
                <li><strong>Name:</strong>&nbsp;{name}</li>
                <li><strong>Email:</strong>&nbsp;{email}</li>
                <li><strong>Phone-number:</strong>&nbsp;{phone_number}</li>
                <li><strong>Role:</strong>&nbsp;{role}</li>
                <li><strong>Specialization:</strong>&nbsp;{specialization}</li>
                <li><strong>Organization:</strong>&nbsp;{organization}</li>
                <li><strong>Organization-address:</strong>&nbsp;{organization_address}</li>
            </ul>
        </div>
    );
};
export default PersonnelDetails;