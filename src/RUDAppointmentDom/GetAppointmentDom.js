import React from "react";
import LoadingSpinner from "../Utils/LoadingSpinner";
import Spinner from "../Utils/Spinner";

const GetAppointmentDom = ({backgroundLoading, handleGetUserAppointment, isError, loading, message,  setMessage, hasFetch}) => {
    return (
        <>
        <div className="w-[80%] mb-[2rem] items-center justify-center mx-auto xl:w-[90%]">
            <p className="w-full font-bold font-serif text-blue-950 text-center animate-bounce text-lg mb-8">click the button bellow to fetch your appointment details.</p>
            <button type="button" className={`py-2 text-white bg-green-900 text-xl rounded w-full text-center hover:bg-green-600 flex items-center justify-center gap-2 ${loading ? "cursor-not-allowed bg-green-600" : "cursor-pointer"}`} title={loading ? "Processing, please wait..." : "Click here to fetch👆"} disabled={loading === true} onClick={handleGetUserAppointment}>{loading ? (<><Spinner /> Processing, please wait!....</>) : (hasFetch ? "Refetch" : "Fetch")}</button>
            {
                backgroundLoading && (
                    <>
                    <LoadingSpinner />
                    </>
                )
            }
            {
                message && (
                    <div className={`text-sm break-words rounded p-3 mb-4 mt-14 shadow-lg w-full ${isError ? "text-red-700 bg-red-100" : "text-green-700 bg-white"}`}>
                        <button type="button" className="text-xl font-bold px-2 rounded hover:bg-gray-300 bg-blue-500 w-8 text-white text-center mb-4" onClick={() => setMessage("")} title="cancel" aria-label="cancel">&times;
                        </button>
                        {!isError && typeof message === "object" ? (
                            <ul className="shadow-2xl z-50 p-6 rounded-2xl text-green-800 bg-green-50 font-semibold">
                                <li><strong>Username:</strong>&nbsp;{message?.username}</li>
                                <li><strong>User-Id:</strong>&nbsp;{message?.user_id}</li>
                                <li><strong>User-Phone-Number:</strong>&nbsp;{message?.user_phone_number}</li>
                                <li><strong>Appointment-Id:</strong>&nbsp;{message?.id}</li>
                                <li><strong>Gender:</strong>&nbsp;{message?.gender}</li>
                                <li><strong>Address:</strong>&nbsp;{message?.address}</li>
                                <li><strong>Next of kin:</strong>&nbsp;{message?.next_of_kin}</li>
                                <li><strong>Next of kin address:</strong>&nbsp;{message?.next_of_kin_address}</li>
                                <li><strong>Next of kin phone-number:</strong>&nbsp;{message?.next_of_kin_phone_number}</li>
                                <li><strong>Appointment Time:</strong>&nbsp;{message?.appointment_time}</li>
                                <li><strong>Appointment Date:</strong>&nbsp;{message?.appointment_date}</li>
                                <li><strong>Appointment description:</strong>&nbsp;{message?.appointment_description}</li>
                                <li><strong>Appointment Type:</strong>&nbsp;{message?.appointment_types}</li>
                                <li><strong>Appointment EndTime:</strong>&nbsp;{message?.appointment_endTime}</li>
                                <li><strong>Appointment Duration:</strong>&nbsp;{`${message?.duration} Minutes`}</li>
                                <li><strong>Organization-Name:</strong>&nbsp;{message?.organization_name}</li>
                                <li><strong>Organization-Address:</strong>&nbsp;{message?.organization_address}</li>
                                <li><strong>Personnel-Role:</strong>&nbsp;{message?.personnel_role}</li>
                                <li><strong>Personnel-Tel:</strong>&nbsp;{message?.personnel_tel}</li>
                                <li><strong>Price:</strong>&nbsp;{`${message?.price} NGN`}</li>
                                <li><strong>Created-At:</strong>&nbsp;{message?.created_at}</li>
                            </ul>
                        ) : (
                            <span>{message}</span>
                        )}
                    </div>
                )
            }
        </div>
        </>
    );
};
export default GetAppointmentDom;