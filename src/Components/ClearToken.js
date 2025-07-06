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
        }
        return () => handleClearToken();
    }, [userToken]);

    const handleClearToken = async(event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const data = await fetch(CLEAR_TOKEN, {
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
    <div>
      <h1>Response from database</h1>
      {
        message && (
            <div className={`mb-4 p-3 rounded text-sm break-words ${isError ? "text-red-700 bg-red-100" : "text-green-700 bg-white"}`}>
                <span>{message}</span>
            </div>
        )
      }
      {
        isLoading ? <><Spinner />Clearing the old Token, please wait............</> : "An error occurred. Check your internet connection"
      }
    </div>
  )
};

export default ClearToken
