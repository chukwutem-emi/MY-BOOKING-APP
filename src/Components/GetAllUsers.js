import { FETCH_ALL_USERS_URL } from "../Utils/constants";
import React, { useEffect, useRef, useState } from "react";
import Spinner from "../Utils/Spinner";
import LoadingSpinner from "../Utils/LoadingSpinner";
import { useSelector } from "react-redux";
import UsersCard from "./UsersCards";
import { useNavigate } from "react-router-dom";
import Shimmer from "../Utils/ShimmerUi";

const GetAllUsers = () => {
    const[loading, setLoading] = useState(false);
    const[backgroundLoading, setBackgroundLoading] = useState(false);
    const[responseMsg, setResponseMsg] = useState([]);
    const[errorMsg, setErrorMsg] = useState(false);
    const[filteredUsers, setFilteredUsers] = useState([])
    const userToken = useSelector((store) => store.token?.accessToken);
    const searchText = useRef(null)

    useEffect(() => {
        if (userToken) {
            handleFetchAllUsers();
        }
    }, [userToken]);

    const handleBtnClick = () => {
        setBackgroundLoading(true);
        setLoading(true);
        setTimeout(() => {
            if (!responseMsg.length) {
                setFilteredUsers([]);
                setResponseMsg("No users to search from.")
                setErrorMsg(true)
            } else {
                const searchTerm = searchText.current.value.toUpperCase();
                const filtered = responseMsg.filter((user) => user.username.toUpperCase().includes(searchTerm.toUpperCase()));

                if (filtered.length===0){
                    setFilteredUsers([]);
                    setResponseMsg("User not found!.")
                    setErrorMsg(true);
                } else {
                    setFilteredUsers(filtered);
                    setErrorMsg(false);
                }
            }                
            setLoading(false);
            setBackgroundLoading(false);
        }, 3000);
    };
    
    const handleFetchAllUsers = async () => {
        setBackgroundLoading(true);
        setLoading(true);

        try {
            const fetchAllUsers = await fetch(FETCH_ALL_USERS_URL, {
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "access-token":`Bearer ${userToken}`,
                },
            });
            const json = await fetchAllUsers.json();
            if (fetchAllUsers.status === 200) {
                setResponseMsg(json.Users);
                setFilteredUsers(json.Users);
                setErrorMsg(false);
            } else {
                const [key] = Object.keys(json);
                setResponseMsg(json[key]);
                setErrorMsg(true);
            };

        } catch(error) {
            setResponseMsg(`Network error or server not responding. ${error.message}`);
            setErrorMsg(true);

        } finally {
            setLoading(false);
            setBackgroundLoading(false);
        }
    }
    
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full">
                <form onSubmit={(e) => e.preventDefault()} className="w-full flex flex-row flex-nowrap">
                    <input
                    type="text"
                    placeholder="Search users"
                    ref={searchText}
                    className="w-full m-4 p-2 border border-gray-700 text-center"
                    autoFocus
                    />
                    <button onClick={handleBtnClick} disabled={loading || !responseMsg.length} className="w-full text-white text-lg font-bold font-serif p-2 text-center cursor-pointer m-4 bg-blue-950">
                        {loading ? (
                            <>
                            <Spinner />
                            Searching...
                            </>
                        ) : ("Search")}
                    </button>
                </form>
                {
                    backgroundLoading && (
                        <>
                        <Shimmer />
                        </>
                    )
                }
                {
                  filteredUsers && (
                    <div className={`flex flex-row text-sm rounded break-words m-4 shadow-lg ${errorMsg ? "text-red-600 bg-red-100" : "text-green-700 bg-gray-700"}`}>
                        {!errorMsg && Array.isArray(filteredUsers) ? filteredUsers.map((users) =>(
                        <UsersCard key={users.id} userData={users} />
                        )) : (
                        <span>{responseMsg}</span>
                        )}
                    </div>
                  )  
                }
            </div>
        </div>
    )
}
export default GetAllUsers;