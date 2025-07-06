import React, { useEffect, useRef, useState } from "react";
import { ACADEMIC_ADVISING_URL } from "../../../Utils/constants";
import { useSelector } from "react-redux";
import Spinner from "../../../Utils/Spinner";

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


    const handleAcademic = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const payload = {
            first_name:firstName.current.value,
            last_name:lastName.current.value,
            gender:gender.current.value,
            user_phone_number:userPhoneNumber.current.value,
            address:address.current.value,
            email_address:emailAddress.current.value,
            next_of_kin:nextOfKin.current.value,
            next_of_kin_address:nextOfKinAddress.current.value,
            amount:amount.current.value,
            appointment_time:appointmentTime.current.value,
            appointment_date:appointmentDate.current.value,
            next_of_kin_phone_number:phone.current.value,
            appointment_description:description.current.value
        };
        try {
            const data = await fetch(ACADEMIC_ADVISING_URL, {
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                    "access-token":`Bearer ${userToken}`,
                },
                body:JSON.stringify(payload),
            });
            const json = await data.json();
            if (data.status === 201) {
                setMessage(json.Academic_advising, json.googleCalenderEvent)
            } else {
                const[key] = Object.keys(json);
                setMessage(key || "An error occurred");
                setErrorMsg(true);
            }

        } catch(error) {
            setErrorMsg(`Network issue or server not responding: ${String(error)}`)

        } finally {
            setIsLoading(false)
        };

    };
    return (
        <div className="my-[12rem] mx-auto bg-gray-300 shadow-2xl w-[30rem] rounded-lg">
            <form onSubmit={handleAcademic} className="flex flex-col w-full p-4 space-y-4">
                <label htmlFor="first_name" className="font-mono text-xl text-blue-900 font-extrabold"><strong>First name:</strong></label>
                <input 
                    type="text"
                    id="first_name"
                    placeholder="Please enter your first name"
                    ref={firstName}
                    name="first_name"
                    required
                    className="p-2 rounded-lg font-sans text-[1rem] text-start"
                />
                <label htmlFor="last_name" className="font-mono text-xl text-blue-900 font-extrabold"><strong>Last name:</strong></label>
                <input 
                    type="text"
                    id="last_name"
                    placeholder="Please enter your last name"
                    ref={lastName}
                    name="last_name"
                    required
                    className="p-2 rounded-lg font-sans text-[1rem] text-start"
                />
                <label htmlFor="gender" className="font-mono text-xl text-blue-900 font-extrabold"><strong>Gender:</strong></label>
                <input 
                    type="text"
                    id="gender"
                    placeholder="Please enter your gender"
                    ref={gender}
                    name="gender"
                    required
                    className="p-2 rounded-lg font-sans text-[1rem] text-start"
                />
                <label htmlFor="user_phone_number" className="font-mono text-xl text-blue-900 font-extrabold"><strong>User phone number:</strong></label>
                <input 
                    type="text"
                    id="user_phone_number"
                    placeholder="Please enter your phone number"
                    ref={userPhoneNumber}
                    name="user_phone_number"
                    required
                    className="p-2 rounded-lg font-sans text-[1rem] text-start"
                />
                <label htmlFor="email_address" className="font-mono text-xl text-blue-900 font-extrabold"><strong>Email address:</strong></label>
                <input 
                    type="email"
                    id="email_address"
                    placeholder="Please enter your email address"
                    ref={emailAddress}
                    name="email_address"
                    required
                    className="p-2 rounded-lg font-sans text-[1rem] text-start"
                />
                <label htmlFor="address" className="font-mono text-xl text-blue-900 font-extrabold"><strong>Address:</strong></label>
                <input 
                    type="text"
                    id="address"
                    placeholder="Please enter Your address"
                    ref={address}
                    name="address"
                    required
                    className="p-2 rounded-lg font-sans text-[1rem] text-start"
                />
                <label htmlFor="next_of_kin" className="font-mono text-xl text-blue-900 font-extrabold"><strong>Next of kin:</strong></label>
                <input 
                    type="text"
                    id="next_of_kin"
                    placeholder="Please enter the name of your next of kin"
                    ref={nextOfKin}
                    name="next_of_kin"
                    required
                    className="p-2 rounded-lg font-sans text-[1rem] text-start"
                />
                <label htmlFor="next_of_kin_address" className="font-mono text-xl text-blue-900 font-extrabold"><strong>Next of kin address:</strong></label>
                <input 
                    type="text"
                    id="next_of_kin_address"
                    placeholder="Please enter your next of kin address"
                    ref={nextOfKinAddress}
                    name="next_of_kin_address"
                    required
                    className="p-2 rounded-lg font-sans text-[1rem] text-start"
                />
                <label htmlFor="next_of_kin_phone_number" className="font-mono text-xl text-blue-900 font-extrabold"><strong>Next of kin phone number:</strong></label>
                <input 
                    type="text"
                    id="next_of_kin_phone_number"
                    placeholder="Please enter your next of kin phone number"
                    ref={phone}
                    name="next_of_kin_phone_number"
                    required
                    className="p-2 rounded-lg font-sans text-[1rem] text-start"
                />
                <label htmlFor="amount" className="font-mono text-xl text-blue-900 font-extrabold"><strong>Amount:</strong></label>
                <input 
                    type="number"
                    id="amount"
                    placeholder="The amount to be paid is N40,000"
                    ref={amount}
                    name="amount"
                    required
                    className="p-2 rounded-lg font-sans text-[1rem] text-start"
                    min={1000}
                    step={1000.00}
                />
                <label htmlFor="appointment_time" className="font-mono text-xl text-blue-900 font-extrabold"><strong>Time:</strong></label>
                <input 
                    type="time"
                    id="appointment_time"
                    placeholder="Please choose time"
                    ref={appointmentTime}
                    name="appointment_time"
                    required
                    className="p-2 rounded-lg font-sans text-[1rem] text-start"
                />
                <label htmlFor="appointment_date" className="font-mono text-xl text-blue-900 font-extrabold"><strong>Date:</strong></label>
                <input 
                    type="date"
                    id="appointment_date"
                    placeholder="Please choose date"
                    ref={appointmentDate}
                    name="appointment_date"
                    required
                    className="p-2 rounded-lg font-sans text-[1rem] text-start"
                />
                <label htmlFor="appointment_description" className="font-mono text-xl text-blue-900 font-extrabold"><strong>Appointment description:</strong></label>
                <input 
                    type="text"
                    id="appointment_description"
                    placeholder="Please write your appointment description"
                    ref={description}
                    name="appointment_description"
                    required
                    className="p-2 rounded-lg font-sans text-[1rem] text-start break-words"
                />
                <button type="submit" className="p-2 rounded-lg font-sans text-[1.2rem] text-center cursor-pointer bg-blue-900 text-white">
                    {
                        isLoading ? (
                            <>
                            <Spinner />
                            Processing
                            </>
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