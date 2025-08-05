import React, { useEffect, useState } from "react";
import { CLEAR_TOKEN } from "../Utils/constants";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../Utils/Spinner";


const ClearToken = () => {
    const[isLoading, setIsLoading] = useState(false);
    const[message, setMessage] = useState("");
    const[isError, setIsError] = useState(false);
    const navigate = useNavigate()
    const userToken = useSelector((store) => store.token?.accessToken);

    useEffect(() => {
        if (userToken) {
            handleClearToken();
        };
    }, [userToken]);

    const handleClearToken = async() => {
        setIsLoading(true);
        try {
            const data = await fetch(CLEAR_TOKEN, {
                method:"PUT",
                headers:{
                    "Content-Type":"application/json", 
                    "access-token":`Bearer ${userToken}`
                }
            });
            const json = await data.json();
            if (data.status === 200) {
                setMessage(json.Cleared);
                setIsError(false);
                setTimeout(() => {
                    navigate("/browse")
                }, 6000);
            } else {
                const[key] = Object.keys(json);
                setMessage(json[key]);
                setIsError(true);
            }
        } catch(error) {

        } finally {
            setIsLoading(false);
        }

    }
  return (
    <div className="mt-[20rem] mx-auto w-[30rem] shadow-2xl p-8 text-center bg-gray-300 rounded-xl space-y-4 items-center flex flex-col">
      <h1 className="text-lg text-blue-800 font-sans font-bold animate-pulse">Response from database</h1>
      {
        message && (
            <div className={`mb-4 p-3 rounded text-sm break-words ${isError ? "text-red-700 bg-red-100" : "text-green-700 bg-white"}`}>
                <span className="text-lg font-sans font-bold">{message}</span>
            </div>
        )
      }
      {
        isLoading && (
            <div className="flex flex-row break-words">
                <>
                <Spinner />
                <div className="font-sans font-semibold text-blue-950 ml-4">Clearing the old Google-Token, please wait............</div>
                </>
            </div>
        ) 
      }
    </div>
  )
};

export default ClearToken
