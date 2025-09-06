import React from "react";
import LoadingSpinner from "../Utils/LoadingSpinner";
import Spinner from "../Utils/Spinner";

const GetAppointmentDom = ({backgroundLoading, handleGetUserAppointment, isError, loading, message,  setMessage, hasFetch}) => {
    return (
        <>
        <div className="w-[90%] mb-[2rem] items-center justify-center mx-auto xs:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[90%]">
            <p className="w-full font-bold font-serif text-blue-950 text-center animate-bounce text-lg mb-8">click the button bellow to fetch your appointment details.</p>
            <button className="py-2 text-white bg-blue-950 text-xl rounded w-full text-center hover:bg-blue-600 flex flex-row justify-evenly" title={loading ? "🚫 Processing, please wait..." : "Click here to fetch👆"} disabled={loading} onClick={handleGetUserAppointment}>{loading ? (<><Spinner /> Processing, please wait!....</>) : (hasFetch ? "Refetch" : "Fetch")}</button>
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
                        <button type="button" className="text-xl font-bold px-2 rounded hover:bg-gray-300 bg-blue-500 w-8 text-white mb-4" onClick={() => setMessage("")} title="cancel" aria-label="cancel">&times;
                        </button>
                        {!isError && typeof message === "object" ? (
                            <ul>
                                <li><strong>Gender:</strong>&nbsp;{message?.gender}</li>
                                <li><strong>Address:</strong>&nbsp;{message?.address}</li>
                                <li><strong>Next of kin:</strong>&nbsp;{message?.next_of_kin}</li>
                                <li><strong>Next of kin address:</strong>&nbsp;{message?.next_of_kin_address}</li>
                                <li><strong>Next of kin phone-number:</strong>&nbsp;{message?.next_of_kin_phone_number}</li>
                                <li><strong>Appointment Time:</strong>&nbsp;{message?.appointment_time}</li>
                                <li><strong>Appointment Date:</strong>&nbsp;{message?.appointment_date}</li>
                                <li><strong>Appointment description:</strong>&nbsp;{message?.appointment_description}</li>
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