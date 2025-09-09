import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_ALL_PERSONNEL } from "../Utils/constants";
import { addPersonnelDetails } from "../Utils/usersDetailsAndAppointmentsSlice";



const useGetAllPersonnel = () => {
    const[backgroundLoading, setBackgroundLoading]                   = useState(false);
    const[isLoading, setIsLoading]                                   = useState(false);
    const[errorMsg, setErrorMsg]                                     = useState(false);
    const[message, setMessage]                                       = useState("");
    const[filteredPersonnelList, setFilteredPersonnelList]           = useState([]);
    const[personnelFullList, setPersonnelFullList]                   = useState([]);

    const userToken = useSelector((store) => store.token?.accessToken);

    const dispatch = useDispatch();


    useEffect(() => {
        if (userToken) {
            handleGetAllPersonnel();
        };
    }, [userToken]);

    const handleGetAllPersonnel = async () => {
        setIsLoading(true);
        setBackgroundLoading(true);

        try {
            const data = await fetch(FETCH_ALL_PERSONNEL, {
                method:"GET",
                headers:{
                    "Content-Type" : "application/json",
                    "access-token" : `Bearer ${userToken}`
                },
            });
            const json = await data.json();
            if (data.status === 200) {
                setMessage(json.all_personnel);
                setFilteredPersonnelList(json.all_personnel);
                setPersonnelFullList(json.all_personnel);
                dispatch(addPersonnelDetails(json.all_personnel));
                setErrorMsg(false);
            } else {
                const [key] = Object.keys(json);
                setMessage(json[key] || "An error has occurred!.");
                setErrorMsg(true);
                setFilteredPersonnelList([]);
                setPersonnelFullList([]);
            }
        } catch (error) {
            setMessage(`Network error or server not responding. Please check your internet connection. ${String(error)}`);
            setErrorMsg(true);
            setFilteredPersonnelList([]);
            setPersonnelFullList([]);
        } finally {
            setBackgroundLoading(false);
            setIsLoading(false);
        }
    };
    const handleBtnClick = (searchText) => {
        setErrorMsg(false);
        setMessage("");

        setBackgroundLoading(true);
        setIsLoading(true);
        setTimeout(() => {
            
            const personnelToSearch = [...personnelFullList];
            if (!Array.isArray(personnelToSearch) || personnelToSearch.length === 0) {
                setMessage("No user to search from.");
                setErrorMsg(true);
                setFilteredPersonnelList([]);
                setIsLoading(false)
                setBackgroundLoading(false)
            } else {
                const searchTerm = searchText.current.value.trim();
                let filtered = [];
                if (searchTerm === "") {
                    filtered = personnelToSearch;
                    setMessage("")
                    setErrorMsg(false);
                } else {
                    filtered = personnelToSearch.filter((personnel) => personnel.name.toLowerCase().includes(searchTerm.toLowerCase()));
                    setErrorMsg(false);
                    setMessage("");
                } if (filtered.length === 0) {
                    setFilteredPersonnelList([]);
                    setErrorMsg(true)
                    setMessage("User Not found.")
                } else {
                    setFilteredPersonnelList(filtered);
                    setErrorMsg(false);
                    setMessage("");
                }
            }
            setBackgroundLoading(false);
            setIsLoading(false)
        }, 3000);
    };
    return {
        backgroundLoading,
        isLoading,
        errorMsg,
        message,
        setErrorMsg,
        setMessage,
        filteredPersonnelList,
        handleBtnClick
    };
};
export default useGetAllPersonnel;