import React, { useEffect, useRef, useState } from "react";
import { ACADEMIC_ADVISING_URL, BASE_URL } from "../../../Utils/constants";
import { useSelector } from "react-redux";
import Spinner from "../../../Utils/Spinner";
import { useNavigate } from "react-router-dom";

const AcademicAdvising = () => {
    const userToken = useSelector((store) => store.token?.accessToken)
    const[isLoading, setIsLoading] = useState(false);
    const[errorMsg, setErrorMsg] = useState(false);
    const[message, setMessage] = useState("");

    const firstName = useRef(null);
    const lastName = useRef(null);
    const userPhoneNumber = useRef(null);
    const emailAddress = useRef(null);
    const address = useRef(null);
    const nextOfKin = useRef(null);
    const nextOfKinAddress = useRef(null);
    const appointmentTime = useRef(null);
    const appointmentDate = useRef(null);
    const gender = useRef(null);
    const amount = useRef(null);
    const phone = useRef(null);
    const description = useRef(null);

    const navigate = useNavigate()

    useEffect(() => {
        if (message) {
            window.scrollTo({top:0, behavior:"smooth"})
        }
    }, [message])


    const handleAcademic = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const payload = {
            first_name               : firstName.current.value,
            last_name                : lastName.current.value,
            gender                   : gender.current.value,
            user_phone_number        : userPhoneNumber.current.value,
            address                  : address.current.value,
            email_address            : emailAddress.current.value,
            next_of_kin              : nextOfKin.current.value,
            next_of_kin_address      : nextOfKinAddress.current.value,
            amount                   : amount.current.value,
            appointment_time         : appointmentTime.current.value,
            appointment_date         : appointmentDate.current.value,
            next_of_kin_phone_number : phone.current.value,
            appointment_description  : description.current.value
        };
        try {
            const data = await fetch(ACADEMIC_ADVISING_URL, {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "access-token":`Bearer ${userToken}`,
                },
                body:JSON.stringify(payload),
            });
            const json = await data.json();
            if (data.status === 401) {
                if (json.re_auth_url) {
                    const authUrl = `${BASE_URL}${json.re_auth_url}`
                    setTimeout(() => {
                        window.open(authUrl, "_blank");   
                    }, 5000);
                    setMessage(`
                        ❗You haven't authenticated yet.
                        <br />
                        🔐 Redirecting you to google for authentication.........
                        <br />
                        <a
                        href=${authUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-blue-600 underline animate-pulse"
                        >
                            Click here to authorize
                        </a>
                        `)
                } else if (json.Login_required){
                    setMessage("❌ You must be logged in to book an appointment.");
                    setTimeout(() => {
                        navigate("/")   
                    }, 8000);
                } else {
                    setMessage("⚠️ Unauthorized access. Please login or try again");
                }
                setErrorMsg(true);
            }
            else if (data.status === 201) {
                setMessage(`${json.Academic_advising}<br><a class="text-blue-600 underline font-semibold hover:text-blue-800 hover:text-lg justify-center items-center my-0 mx-auto" href="${json.googleCalenderEvent}" target="_blank" rel="noopener noreferrer">Click here to view the appointment</a>`)
                setErrorMsg(false)
            } else {
                const[key] = Object.keys(json);
                setMessage(json[key] || "An error occurred");
                setErrorMsg(true);
            }

        } catch(error) {
            setErrorMsg(`Network issue or server not responding: ${String(error)}`)

        } finally {
            setIsLoading(false)
        };

    };
    return (
        <div className="my-[12rem] xs:mt-[12rem] sm:mt-[16rem] md:mt-[16rem] lg:mt-[16rem] xl:mt-[16rem] w-full rounded-lg items-center overflow-x-hidden">
            <form onSubmit={handleAcademic} className="flex flex-col w-[50%] mx-auto p-4 space-y-4 shadow-2xl rounded-xl bg-white xs:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[50%]">
                <h1 className="text-center justify-center text-blue-800 text-[1.4rem] font-extrabold mb-[2rem] animate-pulse">Academic-Advising Appointment</h1>
                {
                    message && (
                        <div className={`m-2 p-2 font-sans break-words text-sm shadow-xl ${errorMsg ? "text-red-600 bg-red-200" : "text-green-800 bg-white"}`}>
                            <button type="button" className="h-fit w-fit text-xl p-1 bg-blue-400 font-extrabold text-red-600" onClick={() => setMessage(null)} title="cancel
                            ">&times;</button>
                            <div dangerouslySetInnerHTML={{__html:message}} />
                        </div>
                    )
                }
                <label htmlFor="first_name" className="text-xl text-blue-700 font-extrabold sm:text-[1.5rem] md:text-[1.7rem] lg:text-[1.7rem]"><strong>First name:</strong></label>
                <input 
                    type="text"
                    id="first_name"
                    placeholder="Please enter your first name"
                    ref={firstName}
                    name="first_name"
                    autoComplete="given-name"
                    required
                    className="p-2 rounded-lg font-sans text-[1rem] text-start md:text-[1.7rem] lg:text-[1.7rem] outline-none border-[1px] border-blue-300"
                />
                <label htmlFor="last_name" className="text-xl text-blue-700 font-extrabold sm:text-[1.5rem] md:text-[1.7rem] lg:text-[1.7rem]"><strong>Last name:</strong></label>
                <input 
                    type="text"
                    id="last_name"
                    placeholder="Please enter your last name"
                    ref={lastName}
                    name="last_name"
                    autoComplete="family-name"
                    required
                    className="p-2 rounded-lg font-sans text-[1rem] text-start md:text-[1.7rem] lg:text-[1.7rem] outline-none border-[1px] border-blue-300"
                />
                <label htmlFor="gender" className="text-xl text-blue-700 font-extrabold sm:text-[1.5rem] md:text-[1.7rem] lg:text-[1.7rem]"><strong>Gender:</strong></label>
                <input 
                    type="text"
                    id="gender"
                    placeholder="Please enter your gender"
                    ref={gender}
                    name="gender"
                    autoComplete="on"
                    required
                    className="p-2 rounded-lg font-sans text-[1rem] text-start md:text-[1.7rem] lg:text-[1.7rem] outline-none border-[1px] border-blue-300"
                />
                <label htmlFor="user_phone_number" className="text-xl text-blue-700 font-extrabold sm:text-[1.5rem] md:text-[1.7rem] lg:text-[1.7rem]"><strong>User phone number:</strong></label>
                <input 
                    type="text"
                    id="user_phone_number"
                    placeholder="Please enter your phone number"
                    ref={userPhoneNumber}
                    name="user_phone_number"
                    autoComplete="on"
                    required
                    className="p-2 rounded-lg font-sans text-[1rem] text-start md:text-[1.7rem] lg:text-[1.7rem] outline-none border-[1px] border-blue-300"
                />
                <label htmlFor="email_address" className="text-xl text-blue-700 font-extrabold sm:text-[1.5rem] md:text-[1.7rem] lg:text-[1.7rem]"><strong>Email address:</strong></label>
                <input 
                    type="email"
                    id="email_address"
                    placeholder="Please enter your email address"
                    ref={emailAddress}
                    name="email_address"
                    autoComplete="email"
                    required
                    className="p-2 rounded-lg font-sans text-[1rem] text-start md:text-[1.7rem] lg:text-[1.7rem] outline-none border-[1px] border-blue-300"
                />
                <label htmlFor="address" className="text-xl text-blue-700 font-extrabold sm:text-[1.5rem] md:text-[1.7rem] lg:text-[1.7rem]"><strong>Address:</strong></label>
                <input 
                    type="text"
                    id="address"
                    placeholder="Please enter Your address"
                    ref={address}
                    name="address"
                    autoComplete="on"
                    required
                    className="p-2 rounded-lg font-sans text-[1rem] text-start md:text-[1.7rem] lg:text-[1.7rem] outline-none border-[1px] border-blue-300"
                />
                <label htmlFor="next_of_kin" className="text-xl text-blue-700 font-extrabold sm:text-[1.5rem] md:text-[1.7rem] lg:text-[1.7rem]"><strong>Next of kin:</strong></label>
                <input 
                    type="text"
                    id="next_of_kin"
                    placeholder="Please enter the name of your next of kin"
                    ref={nextOfKin}
                    name="next_of_kin"
                    autoComplete="on"
                    required
                    className="p-2 rounded-lg font-sans text-[1rem] text-start md:text-[1.7rem] lg:text-[1.7rem] outline-none border-[1px] border-blue-300"
                />
                <label htmlFor="next_of_kin_address" className="text-xl text-blue-700 font-extrabold sm:text-[1.5rem] md:text-[1.7rem] lg:text-[1.7rem]"><strong>Next of kin address:</strong></label>
                <input 
                    type="text"
                    id="next_of_kin_address"
                    placeholder="Please enter your next of kin address"
                    ref={nextOfKinAddress}
                    name="next_of_kin_address"
                    autoComplete="on"
                    required
                    className="p-2 rounded-lg font-sans text-[1rem] text-start md:text-[1.7rem] lg:text-[1.7rem] outline-none border-[1px] border-blue-300"
                />
                <label htmlFor="next_of_kin_phone_number" className="text-xl text-blue-700 font-extrabold sm:text-[1.5rem] md:text-[1.7rem] lg:text-[1.7rem]"><strong>Next of kin phone number:</strong></label>
                <input 
                    type="text"
                    id="next_of_kin_phone_number"
                    placeholder="Please enter your next of kin phone number"
                    ref={phone}
                    name="next_of_kin_phone_number"
                    autoComplete="on"
                    required
                    className="p-2 rounded-lg font-sans text-[1rem] text-start md:text-[1.7rem] lg:text-[1.7rem] outline-none border-[1px] border-blue-300"
                />
                <label htmlFor="amount" className="text-xl text-blue-700 font-extrabold sm:text-[1.5rem] md:text-[1.7rem] lg:text-[1.7rem]"><strong>Amount:</strong></label>
                <input 
                    type="number"
                    id="amount"
                    placeholder="The amount to be paid is N40,000"
                    ref={amount}
                    name="amount"
                    autoComplete="on"
                    required
                    className="p-2 rounded-lg font-sans text-[1rem] text-start md:text-[1.7rem] lg:text-[1.7rem] outline-none border-[1px] border-blue-300"
                    min={1000}
                    step={1000.00}
                />
                <label htmlFor="appointment_time" className="text-xl text-blue-700 font-extrabold sm:text-[1.5rem] md:text-[1.7rem] lg:text-[1.7rem]"><strong>Time:</strong></label>
                <input 
                    type="time"
                    id="appointment_time"
                    placeholder="Please choose time"
                    ref={appointmentTime}
                    name="appointment_time"
                    autoComplete="on"
                    required
                    className="p-2 rounded-lg font-sans text-[1rem] text-start md:text-[1.7rem] lg:text-[1.7rem] outline-none border-[1px] border-blue-300"
                />
                <label htmlFor="appointment_date" className="text-xl text-blue-700 font-extrabold sm:text-[1.5rem] md:text-[1.7rem] lg:text-[1.7rem]"><strong>Date:</strong></label>
                <input 
                    type="date"
                    id="appointment_date"
                    placeholder="Please choose date"
                    ref={appointmentDate}
                    name="appointment_date"
                    autoComplete="on"
                    required
                    className="p-2 rounded-lg font-sans text-[1rem] text-start md:text-[1.7rem] lg:text-[1.7rem] outline-none border-[1px] border-blue-300"
                />
                <label htmlFor="appointment_description" className="text-xl text-blue-700 font-extrabold sm:text-[1.5rem] md:text-[1.7rem] lg:text-[1.7rem]"><strong>Appointment description:</strong></label>
                <textarea
                    id="appointment_description"
                    placeholder="Please write your appointment description"
                    ref={description}
                    name="appointment_description"
                    autoComplete="on"
                    autoFocus
                    required
                    className="p-2 rounded-lg font-sans text-[1rem] text-start break-words md:text-[1.7rem] lg:text-[1.7rem] outline-none border-[1px] border-blue-300"
                />
                <input 
                    type="text"
                />
                <button type="submit" className="p-2 rounded-lg font-sans text-[1.2rem] md:text-[1.7rem] sm:text-[1.5rem] text-center cursor-pointer bg-blue-900 text-white hover:animate-pulse hover:bg-blue-600">
                    {
                        isLoading ? (
                            <div className="flex flex-row">
                                <Spinner />
                                <p className="text-lg font-semibold text-white font-sans animate-pulse ml-[3rem]">Processing......</p>
                            </div>
                        ) : (
                            "Submit"
                        )
                    }
                </button>
            </form>
        </div>
    )
};
export default AcademicAdvising;