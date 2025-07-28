import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BASE_URL, HEALTHCARE_DENTAL_URL } from '../../../Utils/constants';
import Spinner from '../../../Utils/Spinner';

const HealthCareDentalAppointment = () => {
    const[message, setMessage]      = useState("");
    const[isLoading, setIsLoading]  = useState(false);
    const[isError, setIsError]      = useState(false);

    const firstNameRef               =  useRef(null);
    const lastNameRef                =  useRef(null);
    const emailAddressRef            =  useRef(null);
    const addressRef                 =  useRef(null);
    const nextOfKinRef               =  useRef(null);
    const genderRef                  =  useRef(null);
    const userPhoneNumberRef         =  useRef(null);
    const nextOfKinPhoneNumberRef    =  useRef(null);
    const nextOfKinAddressRef        =  useRef(null);
    const amountRef                  =  useRef(null);
    const appointmentTimeRef         =  useRef(null);
    const appointmentDateRef         =  useRef(null);
    const appointmentDescriptionRef  =  useRef(null);

    const navigate = useNavigate();

    const userToken = useSelector((store) => store.token?.accessToken);

    useEffect(() => {
        if (message) {
            window.scrollTo({top:0, behavior:"smooth"});
        }
    }, [message]);

    const handleDentalAppointment = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const payload = {
            first_name               : firstNameRef.current.value,
            last_name                : lastNameRef.current.value,
            gender                   : genderRef.current.value,
            user_phone_number        : userPhoneNumberRef.current.value,
            address                  : addressRef.current.value,
            email_address            : emailAddressRef.current.value,
            next_of_kin              : nextOfKinRef.current.value,
            next_of_kin_phone_number : nextOfKinPhoneNumberRef.current.value,
            next_of_kin_address      : nextOfKinAddressRef.current.value,
            amount                   : amountRef.current.value,
            appointment_time         : appointmentTimeRef.current.value,
            appointment_date         : appointmentDateRef.current.value,
            appointment_description  : appointmentDescriptionRef.current.value,
        };
        try {
            const data = await fetch(HEALTHCARE_DENTAL_URL, {
                method:"POST",
                headers:{
                    "Content-Type"  : "application/json",
                    "access-token"  : `Bearer ${userToken}`,
                },
                body:JSON.stringify(payload)
            });
            const json = await data.json();
            if (data.status === 401) {
                if (json.dental_error) {
                    setMessage(json.dental_error);
                    setTimeout(() => {
                        navigate("/");
                    }, 8000);
                } else if (json.re_auth_url) {
                    const authUrl = `${BASE_URL}${json.re_auth_url}`
                    setTimeout(() => {
                        window.open(authUrl, "_blank");
                    }, 8000);
                    setMessage(`
                        ❗You haven't authenticated yet.
                        <br />
                        🔐 Redirecting you to google for authentication........
                        <br />
                        <a
                        target  = "_blank"
                        href    = ${authUrl}
                        rel     = "noopener, noreferrer"
                        title   = "click here"
                        class   = "text-blue-600 underline animate-pulse cursor-pointer"
                        >Click here to authenticate.</a>
                        `);
                } else {
                    setMessage("Unauthorized!, access denied. Ensure that you are logged in and try again later, thank you.");
                }
                setIsError(true);
            } else if (data.status === 201) {
                setMessage(`${json.Dental}<br><a href=${json.googleCalenderLink} rel="noopener, noreferrer" target="_blank" title="click here" class="text-blue-500 justify-center items-center text-center font-semibold underline hover:text-lg hover:text-blue-800 my-0 mx-auto">Click this link to view the dental appointment you booked in google calender</a>`)
                setIsError(false);
            } else {
                const [key] = Object.keys(json);
                setMessage(json[key] || "An error occurred!. Please try again later.")
                setIsError(true);
            }

        } catch (error) {
            setMessage(`📡 Network error or server not connecting. Please try again later!. ${String(error)}`);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }

  return (
    <div className='mt-[16rem] overflow-x-hidden w-full items-center'>
      <form onSubmit={handleDentalAppointment} className="w-[50%] space-y-4 my-0 mx-auto shadow-2xl bg-white flex flex-col p-4 rounded-2xl xs:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[50%]">
              <h1 className="text-center font-sans text-blue-800 font-bold text-[1.5rem] mb-8 animate-pulse xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl">Dental Healthcare Appointment</h1>
                {
                    message && (
                        <div className={`break-words p-2 w-full ${isError ? "text-red-600 bg-red-100 font-semibold text-lg" : "text-green-600 bg-green-100 font-semibold text-lg"}`}>
                            <button className="text-[2rem] bg-white text-red-600 shadow-2xl w-8 h-8 text-center rounded-full border-[1px] border-red-300" onClick={() => setMessage(null)}>&times;</button>
                            <div dangerouslySetInnerHTML={{__html:message}} />
                        </div>
                    )
                }
                <label htmlFor="first_name" className="font-bold text-blue-600 text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl"><strong>First Name:</strong></label>
                <input
                type="text"
                className="border-[1px] border-blue-600 outline-none text-[1.2rem] px-2 py-1 rounded-lg md:text-2xl lg:text-2xl xl:text-2xl" 
                placeholder="Please enter your first name"
                ref={firstNameRef}
                id="first_name"
                name="first_name"
                autoComplete="given-name"
                required
                />
                <label htmlFor="last_name" className="font-bold text-blue-600 text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl"><strong>Last Name:</strong></label>
                <input
                type="text"
                className="border-[1px] border-blue-600 outline-none text-[1.2rem] px-2 py-1 rounded-lg md:text-2xl lg:text-2xl xl:text-2xl" 
                placeholder="Please enter your last name"
                ref={lastNameRef}
                id="last_name"
                name="last_name"
                autoComplete="family-name"
                required
                />
                <label htmlFor="gender" className="font-bold text-blue-600 text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl"><strong>Gender:</strong></label>
                <input
                type="text"
                className="border-[1px] border-blue-600 outline-none text-[1.2rem] px-2 py-1 rounded-lg md:text-2xl lg:text-2xl xl:text-2xl" 
                placeholder="Please enter your gender"
                ref={genderRef}
                id="gender"
                name="gender"
                autoComplete="on"
                required
                />
                <label htmlFor="user_phone_number" className="font-bold text-blue-600 text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl"><strong>User Phone Number:</strong></label>
                <input
                type="text"
                className="border-[1px] border-blue-600 outline-none text-[1.2rem] px-2 py-1 rounded-lg md:text-2xl lg:text-2xl xl:text-2xl" 
                placeholder="Please enter your phone number"
                ref={userPhoneNumberRef}
                id="user_phone_number"
                name="user_phone_number"
                autoComplete="on"
                required
                />
                <label htmlFor="address" className="font-bold text-blue-600 text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl"><strong>Address:</strong></label>
                <input
                type="text"
                className="border-[1px] border-blue-600 outline-none text-[1.2rem] px-2 py-1 rounded-lg md:text-2xl lg:text-2xl xl:text-2xl" 
                placeholder="Please enter your address"
                ref={addressRef}
                id="address"
                name="address"
                autoComplete="off"
                required
                />
                <label htmlFor="email_address" className="font-bold text-blue-600 text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl"><strong>Email Address:</strong></label>
                <input
                type="email"
                className="border-[1px] border-blue-600 outline-none text-[1.2rem] px-2 py-1 rounded-lg md:text-2xl lg:text-2xl xl:text-2xl" 
                placeholder="Please enter your email address"
                ref={emailAddressRef}
                id="email_address"
                name="email_address"
                autoComplete="off"
                required
                />
                <label htmlFor="next_of_kin" className="font-bold text-blue-600 text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl"><strong>Next Of kin:</strong></label>
                <input
                type="text"
                className="border-[1px] border-blue-600 outline-none text-[1.2rem] px-2 py-1 rounded-lg md:text-2xl lg:text-2xl xl:text-2xl" 
                placeholder="Please enter your next of kin"
                ref={nextOfKinRef}
                id="next_of_kin"
                name="next_of_kin"
                autoComplete="on"
                required
                />
                <label htmlFor="next_of_kin_phone_number" className="font-bold text-blue-600 text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl"><strong>Next Of Kin Phone Number:</strong></label>
                <input
                type="text"
                className="border-[1px] border-blue-600 outline-none text-[1.2rem] px-2 py-1 rounded-lg md:text-2xl lg:text-2xl xl:text-2xl" 
                placeholder="Please enter your next of kin phone number"
                ref={nextOfKinPhoneNumberRef}
                id="next_of_kin_phone_number"
                name="next_of_kin_phone_number"
                autoComplete="on"
                required
                />
                <label htmlFor="next_of_kin_address" className="font-bold text-blue-600 text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl"><strong>Next Of Kin Address:</strong></label>
                <input
                type="text"
                className="border-[1px] border-blue-600 outline-none text-[1.2rem] px-2 py-1 rounded-lg md:text-2xl lg:text-2xl xl:text-2xl" 
                placeholder="Please enter your next of kin address"
                ref={nextOfKinAddressRef}
                id="next_of_kin_address"
                name="next_of_kin_address"
                autoComplete="off"
                required
                />
                <label htmlFor="amount" className="font-bold text-blue-600 text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl"><strong>Amount:</strong></label>
                <input
                type="number"
                className="border-[1px] border-blue-600 outline-none text-[1.2rem] px-2 py-1 rounded-lg md:text-2xl lg:text-2xl xl:text-2xl" 
                placeholder="The amount to be paid is N60,000"
                ref={amountRef}
                id="amount"
                name="amount"
                autoComplete="on"
                min={1000}
                step={1000.00}
                required
                />
                <label htmlFor="appointment_time" className="font-bold text-blue-600 text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl"><strong>Appointment Time:</strong></label>
                <input
                type="time"
                className="border-[1px] border-blue-600 outline-none text-[1.2rem] px-2 py-1 rounded-lg md:text-2xl lg:text-2xl xl:text-2xl" 
                placeholder="Please choose your convenient time for the appointment"
                ref={appointmentTimeRef}
                id="appointment_time"
                name="appointment_time"
                autoComplete="on"
                required
                />
                <label htmlFor="appointment_date" className="font-bold text-blue-600 text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl"><strong>Appointment Date:</strong></label>
                <input
                type="date"
                className="border-[1px] border-blue-600 outline-none text-[1.2rem] px-2 py-1 rounded-lg md:text-2xl lg:text-2xl xl:text-2xl" 
                placeholder="Please choose your convenient date for the appointment"
                ref={appointmentDateRef}
                id="appointment_date"
                name="appointment_date"
                autoComplete="on"
                required
                />
                <label htmlFor="appointment_description" className="font-bold text-blue-600 text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl"><strong>Appointment Description:</strong></label>
                <textarea
                className="border-[1px] border-blue-600 outline-none text-[1.2rem] px-2 py-1 rounded-lg md:text-2xl lg:text-2xl xl:text-2xl"
                ref={appointmentDescriptionRef}
                placeholder="Please write a little description of what you want to do."
                id="appointment_description"
                name="appointment_description"
                autoComplete="on"
                required
                autoFocus
                />
                <button className="bg-blue-600 flex flex-row p-2 justify-center rounded-lg break-words hover:bg-blue-400">
                    {
                        isLoading ? (
                            <>
                            <Spinner />
                            <div className="ml-8 text-white text-[1.2rem]">
                            Please wait! while we process your data..........
                            </div>
                            </>
                        ) : (
                            <div className="text-white text-[1.2rem] font-sans font-bold sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl">
                                Submit
                            </div>

                        )                        
                    }
                </button>
        </form>
    </div>
  )
};
export default HealthCareDentalAppointment;
