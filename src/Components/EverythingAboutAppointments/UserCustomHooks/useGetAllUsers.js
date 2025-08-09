import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { FETCH_ALL_USERS_URL } from "../../../Utils/constants";
import { addUsersDetails } from "../../../Utils/usersDetailsAndAppointmentsSlice";
import { useNavigate } from "react-router-dom";
import React from "react";

const useGetAllUsers = () => {
    const[loading, setLoading] = useState(false);
    const[backgroundLoading, setBackgroundLoading] = useState(false);
    const[responseMsg, setResponseMsg] = useState("");
    const[errorMsg, setErrorMsg] = useState(false);
    const[filteredUsers, setFilteredUsers] = useState([])
    const[fullUsersList, setFullUsersList] = useState([])

    const userToken = useSelector((store) => store.token?.accessToken);
    const dispatchUsers = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (userToken) {
            handleGetAllUsers();
        }
    }, [userToken]);

    const handleGetAllUsers = async () => {
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
                setFilteredUsers(json.Users);
                setFullUsersList(json.Users);
                dispatchUsers(addUsersDetails(json.Users));
                setErrorMsg(false);
            } else {
                const [key] = Object.keys(json);
                setFullUsersList([]);
                setResponseMsg(json[key]);
                setErrorMsg(true);
            }

        } catch(error) {
            setFullUsersList([]);
            setResponseMsg(`An Error occurred or server not responding. ${String(error)}`);
            setErrorMsg(true);

        } finally {
            setLoading(false);
            setBackgroundLoading(false);
        }
    };

    const handleBtnClick = (searchText) => {
        setErrorMsg(false);
        setResponseMsg("")
        
        setBackgroundLoading(true);
        setLoading(true);
        setTimeout(() => {
            const usersToSearch = [...fullUsersList]
            if (!Array.isArray(usersToSearch) ||  usersToSearch.length===0) {
                setResponseMsg("No users to search from.")
                setErrorMsg(true);
                setFilteredUsers([]);
            } else {
                const searchTerm = searchText.current.value.toUpperCase();
                let filtered = [];
                if (searchTerm === "") {
                    filtered = usersToSearch;
                    setErrorMsg(false);
                    setResponseMsg("")
                } else {
                    filtered = usersToSearch.filter((user) => user.username.toUpperCase().includes(searchTerm.toUpperCase()));
                }

                if (filtered.length===0){
                    setFilteredUsers([]);
                    setResponseMsg("User not found!.");
                    setErrorMsg(true);
                } else {
                    setFilteredUsers(filtered);
                    setErrorMsg(false);
                    setResponseMsg("")
                }
            }                
            setLoading(false);
            setBackgroundLoading(false);
        }, 3000);
    };
    return {
        loading,
        backgroundLoading,
        responseMsg,
        errorMsg,
        filteredUsers,
        setErrorMsg,
        setResponseMsg,
        handleBtnClick,
    };
};
export default useGetAllUsers;