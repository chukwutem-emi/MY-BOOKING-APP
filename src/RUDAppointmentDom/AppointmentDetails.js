import React from "react";

const AppointmentDetails = ({appointmentDetails}) => {
    const {
        id,
        username,
        user_id,
        gender,
        address,
        next_of_kin,
        next_of_kin_address,
        next_of_kin_phone_number,
        appointment_time,
        appointment_date,
        appointment_description,
        user_phone_number,
        appointment_endTime,
        appointment_types,
        duration,
        price,
        personnel_id,
        personnel_role,
        personnel_tel,
        organization_name,
        organization_address,
        created_at
    } = appointmentDetails;
    return (
        <div className="w-[50%] bg-green-50 text-green-800 font-sans shadow-2xl p-6 overflow-x-auto flex-shrink-0 break-words xs:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[50%]">
            <ul className="">
                <li><strong>Appointment-Id:</strong>&nbsp;{id}</li>
                <li><strong>Username:</strong>&nbsp;{username}</li>
                <li><strong>User-Id:</strong>&nbsp;{user_id}</li>
                <li><strong>Gender:</strong>&nbsp;{gender}</li>
                <li><strong>Address:</strong>&nbsp;{address}</li>
                <li><strong>Next-Of-Kin:</strong>&nbsp;{next_of_kin}</li>
                <li><strong>Next-Of-Kin-Address:</strong>&nbsp;{next_of_kin_address}</li>
                <li><strong>Next-Of-Kin-Phone-Number:</strong>&nbsp;{next_of_kin_phone_number}</li>
                <li><strong>Appointment-Time:</strong>&nbsp;{appointment_time}</li>
                <li><strong>Appointment-Date:</strong>&nbsp;{appointment_date}</li>
                <li><strong>Appointment-Description:</strong>&nbsp;{appointment_description}</li>
                <li><strong>User-Phone-Number:</strong>&nbsp;{user_phone_number}</li>
                <li><strong>Appointment_EndTime:</strong>&nbsp;{appointment_endTime}</li>
                <li><strong>Appointment-Type:</strong>&nbsp;{appointment_types}</li>
                <li><strong>Duration:</strong>&nbsp;{`${duration} minutes`}</li>
                <li><strong>Price:</strong>&nbsp;{price}</li>
                <li><strong>Personnel-Id:</strong>&nbsp;{personnel_id}</li>
                <li><strong>Personnel-Role:</strong>&nbsp;{personnel_role}</li>
                <li><strong>Personnel-Tel:</strong>&nbsp;{personnel_tel}</li>
                <li><strong>Organization-Name:</strong>&nbsp;{organization_name}</li>
                <li><strong>Organization-Address:</strong>&nbsp;{organization_address}</li>
                <li><strong>Booked-At:</strong>&nbsp;{created_at}</li>
            </ul>
        </div>
    );
};
export default AppointmentDetails;