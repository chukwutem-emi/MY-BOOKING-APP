import React from "react";
import Spinner from "../../Utils/Spinner";
import ProfessionalServiceDropDown from "../../AppointmentCustomDropDown/ProfessionalServiceDropDown";
import InputFields from "./InputFields";


const RealEstateAgentDom = ({handleRealEstateAppointmentForm, message, isError, isLoading, addressRef, genderRef, nextOfKinAddressRef, nextOfKinPhoneNumberRef, nextOfKinRef, appointmentDateRef, appointmentDescriptionRef, appointmentTimeRef, handleSelected, setMessage}) => {
    return (
        <form onSubmit={handleRealEstateAppointmentForm} className="w-[50%] space-y-4 mb-[2rem] mx-auto shadow-2xl bg-white flex flex-col p-4 rounded-2xl xs:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[50%]">
            <h1 className="break-words font-sans text-blue-800 font-bold text-[1.5rem] mb-8 animate-pulse xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] lg:text-[1.4rem] xl:text-[1.4rem]">Real Estate Agent Appointment</h1>
            {
                message && (
                    <div className={`break-words p-2 w-full ${isError ? "text-red-600 bg-red-100 font-semibold text-lg" : "text-green-600 bg-green-100 font-semibold text-lg"}`}>
                        <button type="button" className="text-[2rem] bg-white text-red-600 shadow-2xl w-8 h-8 text-center rounded-full border-[1px] border-red-300" onClick={() => setMessage("")} title="cancel">&times;</button>
                        <div dangerouslySetInnerHTML={{__html:message}} />
                    </div>
                )
            }
            <InputFields
            autoComplete="on"
            id="gender"
            inputRef={genderRef}
            label="Gender:"
            placeholder="Please enter your gender"
            type="text" 
            />
            <InputFields
            autoComplete="on"
            id="address"
            inputRef={addressRef}
            label="Address:"
            placeholder="Please enter your address"
            type="text" 
            />
            <ProfessionalServiceDropDown handleSelected={handleSelected}/>
            <InputFields
            autoComplete="on"
            id="next_of_kin"
            inputRef={nextOfKinRef}
            label="Next Of kin:"
            placeholder="Please enter your next of kin"
            type="text" 
            />
            <InputFields
            autoComplete="tel"
            id="next_of_kin_phone_number"
            inputRef={nextOfKinPhoneNumberRef}
            label="Next Of Kin Phone Number:"
            placeholder="Please enter your next of kin phone number"
            type="text" 
            />
            <InputFields
            autoComplete="on"
            id="next_of_kin_address"
            inputRef={nextOfKinAddressRef}
            label="Next Of Kin Address:"
            placeholder="Please enter your next of kin address"
            type="text" 
            />
            <InputFields
            autoComplete="on"
            id="appointment_time"
            inputRef={appointmentTimeRef}
            label="Appointment Time:"
            placeholder="Please choose your convenient time for the appointment"
            type="time" 
            />
            <InputFields
            autoComplete="on"
            id="appointment_date"
            inputRef={appointmentDateRef}
            label="Appointment Date:"
            placeholder="Please choose your convenient date for the appointment"
            type="date" 
            />
            <label htmlFor="appointment_description" className="font-bold text-blue-600 text-[1.2rem] xs:text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.5rem]"><strong>Appointment Description:</strong></label>
            <textarea
            className="border-[1px] border-blue-600 outline-none text-[1.2rem] px-2 py-1 rounded-lg xs:text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.5rem]"
            ref={appointmentDescriptionRef}
            placeholder="Please write a little description of what you want to do."
            id="appointment_description"
            name="appointment_description"
            autoComplete="on"
            required
            autoFocus
            />
            <button type="submit" className="bg-blue-600 flex flex-row p-2 justify-center rounded-lg break-words hover:bg-blue-400">
                {
                    isLoading ? (
                        <div className="flex flex-row">
                            <Spinner />
                            <div className="ml-8 break-words text-white text-[1.2rem]">
                            Please wait! while we process your data..........
                            </div>
                        </div>
                    ) : (
                        <div className="text-white text-[1.2rem] font-sans font-bold sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl">
                            Submit
                        </div>
                    )                        
                }
            </button>
        </form>   
    );
};
export default RealEstateAgentDom;