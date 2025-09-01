import React from "react";
import Spinner from "../../Utils/Spinner";
import EducationCustomDropDown from "../../AppointmentCustomDropDown/EducationCustomDropDown";
import InputFields from "./InputFields";

const CareerCounselingDom = ({handleCareerClickForm, message, loading, addressRef, appointmentDateRef, appointmentDescriptionRef, genderRef, nextOfKinAddressRef, nextOfKinPhoneNumberRef, nextOfKinRef, appointmentTimeRef, errorMsg, handleSelected, setMessage}) => {
    return (
        <form onSubmit={handleCareerClickForm} className='flex flex-col space-y-4 w-[50%] bg-white p-8 rounded-2xl mb-[2rem] mx-auto shadow-2xl xs:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[50%]'>
            <h1 className='text-center justify-center text-blue-800 text-[1.4rem] font-extrabold mb-[2rem] animate-pulse xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl'>Career-Counseling Appointment</h1>
            {
                message && (
                    <div className={`p-2 break-words w-full ${errorMsg ? "text-red-500 bg-red-100 text-sm" : "text-green-700 bg-green-100 font-semibold text-lg"}`}>
                        <button type="button" className='text-[2rem] bg-white text-red-600 shadow-2xl w-8 h-8 text-center rounded-full border-[1px] border-red-300' aria-label="Cancel" title='Cancel' onClick={() => setMessage("")}>&times;</button>
                        <div dangerouslySetInnerHTML={{__html:message}}/>
                    </div>
                )
            }
            <InputFields
            autoComplete="on"
            id="gender"
            inputRef={genderRef}
            label="Gender:"
            placeholder="Your gender"
            type="text" 
            />
            <InputFields
            autoComplete="on"
            id="address"
            inputRef={addressRef}
            label="Address:"
            placeholder="Enter your address"
            type="text"
            />
            <EducationCustomDropDown handleSelected={handleSelected} />
            <InputFields
            autoComplete="on"
            id="next_of_kin"
            inputRef={nextOfKinRef}
            label="Next Of Kin:"
            placeholder="Enter your next of kin"
            type="text" 
            />
            <InputFields
            autoComplete="on"
            id="next_of_kin_phone_number"
            inputRef={nextOfKinPhoneNumberRef}
            label="Next Of Kin Phone Number:"
            placeholder="Enter your next of kin phone number"
            type="text" 
            />
            <InputFields
            autoComplete="on"
            id="next_of_kin_address"
            inputRef={nextOfKinAddressRef}
            label="Next Of Kin Address:"
            placeholder="Enter your next of kin address"
            type="text" 
            />
            <InputFields
            autoComplete="on"
            id="appointment_time"
            inputRef={appointmentTimeRef}
            label="Appointment Time"
            placeholder="Choose the appointment time"
            type="time" 
            />
            <InputFields
            autoComplete="on"
            id="appointment_date"
            inputRef={appointmentDateRef}
            label="Appointment Date:"
            placeholder="Choose the appointment date"
            type="date" 
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
                        <div className='flex flex-row'>
                            <Spinner />
                            <div className='break-words animate-pulse font-sans text-white ml-[3rem]'>Please wait while we process your data............</div>
                        </div>
                    ) : (
                        <div className='sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-sans font-bold'>Submit</div>    
                    )
                }
            </button>
      </form>
    );
};
export default CareerCounselingDom;