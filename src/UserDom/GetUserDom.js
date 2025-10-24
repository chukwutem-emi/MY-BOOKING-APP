import React from "react";
import LoadingSpinner from "../Utils/LoadingSpinner";
import Spinner from "../Utils/Spinner";

const GetUserDom = ({backgroundLoading, errorMsg, handleGetUser, hasFetch, loading, responseMsg, setResponseMsg}) => {
    return (
        <>
        <div className="w-[80%] mb-[2rem] items-center justify-center mx-auto xl:w-[90%]">
            <p className="w-full font-bold font-serif break-words text-blue-950 z-50 text-center mb-8 xs:text-[0.6rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.2rem]">click the button bellow to fetch your details.</p>
            <button type="button" className="py-2 text-white bg-blue-950 rounded w-full text-center hover:bg-blue-600 flex flex-row justify-evenly outline-none xs:text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.1rem]" title={loading ? "🚫 Processing, please wait..." : "Click here to fetch👆"} disabled={loading} onClick={handleGetUser}>{loading ? (<><Spinner /> Processing, please wait!....</>) : (hasFetch ? "Refetch" : "Fetch")}</button>
            {
                backgroundLoading && (
                    <>
                    <LoadingSpinner />
                    </>
                )
            }
            {
                responseMsg && (
                    <div className={`xs:text-[0.6rem] sm:text-[0.8rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem] break-words rounded font-bold p-3 mb-4 mt-14 shadow-lg w-full ${errorMsg ? "text-red-700 bg-red-50 text-center" : "text-green-700 bg-white"}`}>
                        <button type="button" className="text-xl font-bold px-2 rounded hover:bg-gray-300 bg-blue-500 w-8 text-white mb-4" onClick={() => setResponseMsg("")} title="cancel" aria-label="cancel">&times;
                        </button>
                        {!errorMsg && typeof responseMsg === "object" ? (
                            <ul className="text-sm">
                                <li><strong>Username:</strong>&nbsp;{responseMsg?.username}</li>
                                <li><strong>Email:</strong>&nbsp;{responseMsg.email_address}</li>
                                <li><strong>Phone:</strong>&nbsp;{responseMsg.phone_number}</li>
                                <li><strong>Admin:</strong>&nbsp;{responseMsg.admin ? "Yes" : "No"}
                                </li>
                                <li><strong>Role:</strong>&nbsp;{responseMsg.role}</li>
                            </ul>
                        ) : (
                            <span>{responseMsg}</span>
                        )}
                    </div>
                )
            }
        </div>
        </>
    );
};
export default GetUserDom;