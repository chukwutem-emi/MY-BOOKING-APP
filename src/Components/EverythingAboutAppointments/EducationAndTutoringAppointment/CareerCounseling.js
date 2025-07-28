import React, { cache, useEffect, useRef, useState } from 'react'
import { BASE_URL, CAREER_COUNSELING_URL } from '../../../Utils/constants';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../../Utils/Spinner';

function CareerCounseling() {
    const[message, setMessage] = useState("");
    const[errorMsg, setErrorMsg] = useState(false);
    const[loading, setLoading] = useState(false);

    const getUserToken = useSelector((store) => store.token?.accessToken);

    const navigate = useNavigate();
    
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const genderRef = useRef(null);
    const userPhoneNumberRef = useRef(null);
    const addressRef = useRef(null);
    const emailAddressRef = useRef(null);
    const nextOfKinRef = useRef(null);
    const nextOfKinPhoneNumberRef = useRef(null);
    const nextOfKinAddressRef = useRef(null);
    const amountRef = useRef(null);
    const appointmentDateRef = useRef(null);
    const appointmentTimeRef = useRef(null);
    const appointmentDescriptionRef = useRef(null);

    useEffect(() => {
        if (message) {
            window.scrollTo({top:0, behavior:"smooth"});
        }
    }, [message])

    const handleCareerClick = async (event) => {
        event.preventDefault();
        setLoading(true);
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
            const data = await fetch(CAREER_COUNSELING_URL, {
                method:"POST",
                headers:{
                    "Content-Type" : "application/json",
                    "access-token" : `Bearer ${getUserToken}`,
                },
                body:JSON.stringify(payload)
            });
            const json = await data.json();
            if (data.status === 401) {
                if (json.re_auth_url) {
                    const authUrl = `${BASE_URL}${json.re_auth_url}`
                    setTimeout(() => {
                        window.open(authUrl, "_blank")
                    }, 5000);
                    setMessage(`
                        ❗You haven't authenticated yet.
                        <br />
                        🔐 Redirecting you to google for authentication...........
                        <br />
                        <a
                        href     = ${authUrl}
                        target   = "_blank"
                        rel      = "noopener noreferrer"
                        class    = "text-blue-600 underline animate-pulse"
                        >
                        Click here to authenticate
                        </a>
                        `);
                } else if (json.Msg) {
                    setMessage("⚠️ Access denied!. You must be logged in to book an appointment");
                    setTimeout(() => {
                        navigate("/")  
                    }, 8000);
                } else {
                    setMessage("Unauthorized access!.Please login or try again later.");
                }
                setErrorMsg(true);
            } else if (data.status === 201) {
                setMessage(`
                    ${json.Career_counseling}<br><a class="text-blue-500 justify-center items-center text-center font-semibold underline hover:text-lg hover:text-blue-800 my-0 mx-auto" target="_blank" href=${json.googleCalenderEvent} ref="noopener noreferrer">Click here to view the career-counseling appointment</a>
                    `);
                setErrorMsg(false);
            } else {
                const [key] = Object.keys(json);
                setMessage(json[key] || "An error occurred!.")
                setErrorMsg(true)
            }
        }catch(error) {
            setMessage(`❌Network issue or server not responding ${String(error)}`);
            setErrorMsg(true)
        }finally {
            setLoading(false);
        }
    }
  return (
    <div className='my-[12rem] w-full items-center min-h-screen overflow-x-hidden'>
      <form onSubmit={handleCareerClick} className='flex flex-col space-y-4 w-[50%] bg-white p-8 rounded-2xl my-0 mx-auto shadow-2xl xs:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[50%]'>
        <h1 className='text-center justify-center text-blue-800 text-[1.4rem] font-extrabold mb-[2rem] animate-pulse xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl'>Career-Counseling Appointment</h1>
        {
            message && (
                <div className={`p-2 break-words w-full ${errorMsg ? "text-red-500 bg-red-100 text-sm" : "text-green-700 bg-green-100 font-semibold text-lg"}`}>
                    <button className='text-[2rem] bg-white text-red-600 shadow-2xl w-8 h-8 text-center rounded-full border-[1px] border-red-300' title='Cancel' onClick={() => setMessage(null)}>&times;</button>
                    <div dangerouslySetInnerHTML={{__html:message}}/>
                </div>
            )
        }
        <label htmlFor='first_name' className='text-blue-700 font-sans font-bold text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl'><strong>First Name:</strong></label>
        <input 
        type='text'
        placeholder='Please enter your first name'
        id='first_name'
        name='first_name'
        ref={firstNameRef}
        className='py-1 px-2 text-[1.2rem] font-sans rounded-md border-[1px] outline-none border-blue-300 md:text-2xl lg:text-2xl xl:text-2xl'
        autoComplete="given-name"
        required
        />
        <label htmlFor='last_name' className='text-blue-700 font-sans font-bold text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl'><strong>Last Name:</strong></label>
        <input 
        type='text'
        placeholder='Please enter your last name'
        id='last_name'
        name='last_name'
        ref={lastNameRef}
        className='py-1 px-2 text-[1.2rem] font-sans outline-none rounded-md border-[1px] border-blue-300 md:text-2xl lg:text-2xl'
        autoComplete='family-name'
        required
        />
        <label htmlFor='gender' className='text-blue-700 font-sans font-bold text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl'><strong>Gender:</strong></label>
        <input 
        type='text'
        placeholder='Your gender'
        id='gender'
        name='gender'
        ref={genderRef}
        className='py-1 px-2 text-[1.2rem] font-sans outline-none rounded-md border-[1px] border-blue-300 md:text-2xl lg:text-2xl xl:text-2xl'
        autoComplete='on'
        required
        />
        <label htmlFor='user_phone_number' className='text-blue-700 font-sans font-bold text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl'><strong>Phone Number:</strong></label>
        <input 
        type='text'
        placeholder='Enter Your phone number'
        id='user_phone_number'
        name='user_phone_number'
        ref={userPhoneNumberRef}
        className='py-1 px-2 text-[1.2rem] font-sans outline-none rounded-md border-[1px] border-blue-300 md:text-2xl lg:text-2xl xl:text-2xl'
        autoComplete='on'
        required
        />
        <label htmlFor='address' className='text-blue-700 font-sans font-bold text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl'><strong>Address:</strong></label>
        <input 
        type='text'
        placeholder='Enter your address'
        id='address'
        name='address'
        ref={addressRef}
        className='py-1 px-2 text-[1.2rem] font-sans outline-none rounded-md border-[1px] border-blue-300 md:text-2xl lg:text-2xl xl:text-2xl'
        autoComplete='on'
        required
        />
        <label htmlFor='email_address' className='text-blue-700 font-sans font-bold text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl'><strong>Email Address:</strong></label>
        <input 
        type='email'
        placeholder='Enter your email address'
        id='email_address'
        name='email_address'
        ref={emailAddressRef}
        className='py-1 px-2 text-[1.2rem] font-sans outline-none rounded-md border-[1px] border-blue-300 md:text-2xl lg:text-2xl xl:text-2xl'
        autoComplete='off'
        required
        />
        <label htmlFor='next_of_kin' className='text-blue-700 font-sans font-bold text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl'><strong>Next Of Kin:</strong></label>
        <input 
        type='text'
        placeholder='Enter your next of kin'
        id='next_of_kin'
        name='next_of_kin'
        ref={nextOfKinRef}
        className='py-1 px-2 text-[1.2rem] font-sans outline-none rounded-md border-[1px] border-blue-300 md:text-2xl lg:text-2xl xl:text-2xl'
        autoComplete='on'
        required
        />
        <label htmlFor='next_of_kin_phone_number' className='text-blue-700 font-sans font-bold text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl'><strong>Next Of Kin Phone Number:</strong></label>
        <input 
        type='text'
        placeholder='Enter your next of kin phone number'
        id='next_of_kin_phone_number'
        name='next_of_kin_phone_number'
        ref={nextOfKinPhoneNumberRef}
        className='py-1 px-2 text-[1.2rem] font-sans outline-none rounded-md border-[1px] border-blue-300 md:text-2xl lg:text-2xl xl:text-2xl'
        autoComplete='on'
        required
        />
        <label htmlFor='next_of_kin_address' className='text-blue-700 font-sans font-bold text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl'><strong>Next Of Kin Address:</strong></label>
        <input 
        type='text'
        placeholder='Enter your next of kin address'
        id='next_of_kin_address'
        name='next_of_kin_address'
        ref={nextOfKinAddressRef}
        className='py-1 px-2 text-[1.2rem] font-sans outline-none rounded-md border-[1px] border-blue-300 md:text-2xl lg:text-2xl xl:text-2xl'
        autoComplete='on'
        required
        />
        <label htmlFor='amount' className='text-blue-700 font-sans font-bold text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl'><strong>Next Of Kin Address:</strong></label>
        <input 
        type='number'
        placeholder='The amount to be paid is N40,000'
        id='amount'
        name='amount'
        ref={amountRef}
        className='py-1 px-2 text-[1.2rem] font-sans outline-none rounded-md border-[1px] border-blue-300 md:text-2xl lg:text-2xl xl:text-2xl'
        required
        min={1000}
        step={1000.00}
        autoComplete='on'
        />
        <label htmlFor='appointment_time' className='text-blue-700 font-sans font-bold text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl'><strong>Appointment Time:</strong></label>
        <input 
        type='time'
        placeholder='Choose the appointment time'
        id='appointment_time'
        name='appointment_time'
        ref={appointmentTimeRef}
        className='py-1 px-2 text-[1.2rem] font-sans outline-none rounded-md border-[1px] border-blue-300 md:text-2xl lg:text-2xl xl:text-2xl'
        autoComplete='off'
        required
        />
        <label htmlFor='appointment_date' className='text-blue-700 font-sans font-bold text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl'><strong>Appointment Date:</strong></label>
        <input 
        type='date'
        placeholder='Choose the appointment date'
        id='appointment_date'
        name='appointment_date'
        ref={appointmentDateRef}
        className='py-1 px-2 text-[1.2rem] font-sans outline-none rounded-md border-[1px] border-blue-300 md:text-2xl lg:text-2xl xl:text-2xl'
        autoComplete='off'
        required
        />
        <label htmlFor='appointment_description' className='text-blue-700 font-sans font-bold text-[1.2rem] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl'><strong>Appointment Description:</strong></label>
        <textarea
        placeholder='Describe what you want'
        id='appointment_description'
        name='appointment_description'
        ref={appointmentDescriptionRef}
        className='py-1 px-2 text-[1.2rem] font-sans outline-none rounded-md border-[1px] border-blue-300 md:text-2xl lg:text-2xl xl:text-2xl'
        autoComplete='on'
        autoFocus
        required 
        />
        <button type='submit' className='p-2 text-center text-[1.2rem] font-sans outline-none rounded-md bg-blue-800 text-white font-semibold hover:bg-blue-400'>
            {
                loading ? (
                    <>
                    <Spinner />
                    <div className='break-words animate-pulse font-sans text-white'>Please wait while we process your data............</div>
                    </>
                ) : (
                    <div className='sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-sans font-bold'>Submit</div>    
                )
            }
        </button>
      </form>
    </div>
  )
}

export default CareerCounseling
