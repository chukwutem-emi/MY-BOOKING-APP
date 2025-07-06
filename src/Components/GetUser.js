import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { FETCH_USER_URL } from "../Utils/constants";
import { addEmailAddress, addPhoneNumber, addUsername } from "../Utils/profileSlice";
import Spinner from "../Utils/Spinner";
import LoadingSpinner from "../Utils/LoadingSpinner";


const GetUser = () => {
    const[loading, setLoading] = useState(false);
    const[backgroundLoading, setBackgroundLoading] = useState(false);
    const[responseMsg, setResponseMsg] = useState("");
    const[errorMsg, setErrorMsg] = useState(false);
    const[hasFetch, setHasFetch] = useState(false);
    const userToken = useSelector((store) => store.token?.accessToken)
    console.log("USER_TOKEN:", userToken)
    const dispatchUsername = useDispatch();
    const dispatchEmail = useDispatch();
    const dispatchPhone = useDispatch();
    
    
    useEffect(() => {
        if (userToken) {
            handleGetUser();
        }

    }, [userToken])
    const handleGetUser = async () => {
        setLoading(true);
        setBackgroundLoading(true)
        try {
            const data = await fetch(FETCH_USER_URL, {
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "access-token":`Bearer ${userToken}`,
                },
            });
            const json = await data.json();
            if (data.status === 200) {
                setResponseMsg(json.user);
                setErrorMsg(false);
                setHasFetch(true);
                dispatchUsername(addUsername(json?.user?.username));
                dispatchEmail(addEmailAddress(json?.user?.email_address));
                dispatchPhone(addPhoneNumber(json?.user?.phone_number));
            } else {
                const [key] = Object.keys(json);
                setResponseMsg(json[key]);
                setErrorMsg(true);
            }
        } catch(error) {
            setResponseMsg(`❌ Network error or server not responding. ${String(error)}`)
            setErrorMsg(true)
        } finally {
            setLoading(false);
            setBackgroundLoading(false)
            
        }
    };
        
        return (
            <div className="min-h-screen flex items-center justify-center">
            <div className="w-[40rem]">
                <p className="font-bold font-serif text-blue-950 text-center animate-bounce text-lg mb-8">click the button bellow to fetch your details.</p>
                <button className="py-2 text-white bg-blue-950 text-xl rounded w-full text-center hover:bg-blue-600" onClick={handleGetUser} title={loading ? "🚫 Processing, please wait..." : "Click here to fetch👆"} disabled={loading}>{loading ? (<><Spinner /> Processing, please wait!....</>) : (hasFetch ? "Refetch" : "Fetch")}</button>
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