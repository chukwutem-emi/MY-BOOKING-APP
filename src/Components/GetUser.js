import React, { useEffect, useState } from "react";
import Spinner from "../Utils/Spinner";
import LoadingSpinner from "../Utils/LoadingSpinner";
import useGetUser from "./EverythingAboutAppointments/UserCustomHooks/useGetUser"


const GetUser = () => {
    const[loading, setLoading] = useState(false);
    const[backgroundLoading, setBackgroundLoading] = useState(false);
    const[responseMsg, setResponseMsg] = useState("");
    const[errorMsg, setErrorMsg] = useState(false);
    const[hasFetch, setHasFetch] = useState(false)
    
    const fetchUser = useGetUser({
        setResponseMsg, 
        setErrorMsg, 
        setLoading, 
        setBackgroundLoading, 
        setHasFetch});
        
        return (
            <div className="min-h-screen mt-[10rem] flex items-center justify-center mx-auto">
            <div className="w-[40rem] xs:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[90%]">
                <p className="font-bold font-serif text-blue-950 text-center animate-bounce text-lg mb-8">click the button bellow to fetch your details.</p>
                <button className="py-2 text-white bg-blue-950 text-xl rounded w-full text-center hover:bg-blue-600" title={loading ? "🚫 Processing, please wait..." : "Click here to fetch👆"} disabled={loading} onClick={fetchUser}>{loading ? (<><Spinner /> Processing, please wait!....</>) : (hasFetch ? "Refetch" : "Fetch")}</button>
                {
                    backgroundLoading && (
                        <>
                        <LoadingSpinner />
                        </>
                    )
                }
                {
                    responseMsg && (
                        <div className={`text-sm break-words rounded p-3 mb-4 mt-14 shadow-lg ${errorMsg ? "text-red-700 bg-red-100" : "text-green-700 bg-white"}`}>
                            <button className="text-xl font-bold px-2 rounded hover:bg-gray-300 bg-blue-500 w-8 text-white mb-4" onClick={() => setResponseMsg(null)} title="cancel">&times;
                            </button>
                            {!errorMsg && typeof responseMsg === "object" ? (
                                <ul>
                                    <li><strong>Username:</strong>&nbsp;{responseMsg?.username}</li>
                                    <li><strong>Email:</strong>&nbsp;{responseMsg.email_address}</li>
                                    <li><strong>Phone:</strong>&nbsp;{responseMsg.phone_number}</li>
                                    <li><strong>Admin:</strong>&nbsp;{responseMsg.admin ? "Yes" : "No"}</li>
                                </ul>
                            ) : (
                                <span>{responseMsg}</span>
                            )}
                        </div>
                    )
                }
            </div>
        </div>
    )
    
}
export default GetUser;