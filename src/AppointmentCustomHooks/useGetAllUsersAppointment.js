import { useState } from "react";
import { FETCH_ALL_USERS_APPOINTMENT_URL } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addAppointmentDetails } from "../Utils/usersDetailsAndAppointmentsSlice";


const useGetAllUserAppointment = () => {
    const[loading, setLoading]                         = useState(false);
    const[message, setMessage]                         = useState("");
    const[isError, setIsError]                         = useState(false);
    const[backgroundLoading, setBackgroundLoading]     = useState(false);
    const[filteredAppointment, setFilteredAppointment] = useState([]);
    const[appointmentFullList, setAppointmentFullList] = useState([]); 

    const userToken = useSelector((store) => store.token?.accessToken);

    const dispatch = useDispatch();


    const handleGetAllUserAppointment = async () => {
        setBackgroundLoading(true);
        setLoading(true);

        try {
            const data = await fetch(FETCH_ALL_USERS_APPOINTMENT_URL, {
                method:"GET",
                headers:{
                    "Content-Type" : "application/json",
                    "access-token" : `Bearer ${userToken}`
                }
            });
            const json = await data.json();
            if (data.status === 200) {
                setAppointmentFullList(json.All_appointments);
                setFilteredAppointment(json.All_appointments);
                setIsError(false);
                dispatch(addAppointmentDetails(json.All_appointments));
            } else {
                const [key] = Object.keys(json);
                setMessage(json[key] || "An error has occurred.");
                setIsError(true);
                setAppointmentFullList([]);
                setFilteredAppointment([]);
            }
        } catch (error) {
            setMessage(`Network error or server not responding. Please check your internet connection. ${String(error)}`);
            setIsError(true);
            setAppointmentFullList([]);
            setFilteredAppointment([]);
        } finally {
            setBackgroundLoading(false);
            setLoading(false);
        }
    };
    const handleBtnClick = (searchText) => {
        setMessage("");
        setIsError(false);

        setBackgroundLoading(true);
        setLoading(true);

        setTimeout(() => {
            const appointmentToSearch = [...appointmentFullList];

            if (!Array.isArray(appointmentToSearch) || appointmentToSearch.length === 0) {
                setMessage("No appointment to search from");
                setIsError(true);
                setFilteredAppointment([]);
            } else {
                const searchTerm = searchText.current.value.trim();
                let filtered = [];

                if (searchTerm === "") {
                    filtered = appointmentToSearch
                    setMessage("");
                    setIsError(false);
                } else {
                    filtered = appointmentToSearch.filter((appointment) => appointment.username.toLowerCase().includes(searchTerm.toLowerCase()));
                    setMessage("");
                    setIsError(false);
                }
                if (filtered.length === 0) {
                    setFilteredAppointment([]);
                    setIsError(true);
                    setMessage("Appointment not found!.");
                } else {
                    setFilteredAppointment(filtered);
                    setIsError(false);
                    setMessage("")
                }
            }
            setBackgroundLoading(false);
            setLoading(false);
        }, 3000);
    };
    return {
        backgroundLoading,
        message,
        setMessage,
        loading,
        isError,
        setIsError,
        filteredAppointment,
        handleBtnClick,
        userToken,
        handleGetAllUserAppointment,
    };
};
export default useGetAllUserAppointment;