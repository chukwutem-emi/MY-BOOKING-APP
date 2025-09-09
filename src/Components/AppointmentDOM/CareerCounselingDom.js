import React from "react";
import Spinner from "../../Utils/Spinner";
import EducationCustomDropDown from "../../AppointmentCustomDropDown/EducationCustomDropDown";
import InputFields from "./InputFields";
import { useSelector } from "react-redux";
import lang from "../../Utils/multiLanguageConfig";

const CareerCounselingDom = ({handleCareerClickForm, message, loading, addressRef, appointmentDateRef, appointmentDescriptionRef, genderRef, nextOfKinAddressRef, nextOfKinPhoneNumberRef, nextOfKinRef, appointmentTimeRef, errorMsg, handleSelected, setMessage}) => {

    const langKey = useSelector((store) => store.config?.lang);

    return (
        <form onSubmit={handleCareerClickForm} className='flex flex-col space-y-4 w-[90%] bg-white p-8 rounded-2xl mb-[2rem] mx-auto shadow-2xl xs:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[50%]'>
            <h1 className='text-blue-800 text-[1.4rem] font-extrabold mb-[2rem] animate-pulse xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] lg:text-[1.4rem] xl:text-[1.4rem]'>{lang[langKey]?.appointmentsInputFields?.careerCounselingHeading}</h1>
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
            label={lang[langKey]?.appointmentsInputFields?.appointmentsGenderLabel}
            placeholder={lang[langKey]?.appointmentsInputFields?.appointmentsGenderPlaceHolder}
            type="text" 
            />
            <InputFields
            autoComplete="on"
            id="address"
            inputRef={addressRef}
            label={lang[langKey]?.appointmentsInputFields?.appointmentsAddressLabel}
            placeholder={lang[langKey]?.appointmentsInputFields?.appointmentsAddressPlaceHolder}
            type="text"
            />
            <EducationCustomDropDown handleSelected={handleSelected} />
            <InputFields
            autoComplete="on"
            id="next_of_kin"
            inputRef={nextOfKinRef}
            label={lang[langKey]?.appointmentsInputFields?.appointmentsNextOfKinLabel}
            placeholder={lang[langKey]?.appointmentsInputFields?.appointmentsNextOfKinPlaceHolder}
            type="text" 
            />
            <InputFields
            autoComplete="on"
            id="next_of_kin_phone_number"
            inputRef={nextOfKinPhoneNumberRef}
            label={lang[langKey]?.appointmentsInputFields?.appointmentsNextOfKinPhoneNumberLabel}
            placeholder={lang[langKey]?.appointmentsInputFields?.appointmentsNextOfKinPhoneNumberPlaceHolder}
            type="text" 
            />
            <InputFields
            autoComplete="on"
            id="next_of_kin_address"
            inputRef={nextOfKinAddressRef}
            label={lang[langKey]?.appointmentsInputFields?.appointmentsNextOfKinAddressLabel}
            placeholder={lang[langKey]?.appointmentsInputFields?.appointmentsNextOfKinAddressPlaceHolder}
            type="text" 
            />
            <InputFields
            autoComplete="on"
            id="appointment_time"
            inputRef={appointmentTimeRef}
            label={lang[langKey]?.appointmentsInputFields?.appointmentsTimeLabel}
            placeholder={lang[langKey]?.appointmentsInputFields?.appointmentsTimePlaceHolder}
            type="time" 
            />
            <InputFields
            autoComplete="on"
            id="appointment_date"
            inputRef={appointmentDateRef}
            label={lang[langKey]?.appointmentsInputFields?.appointmentsDateLabel}
            placeholder={lang[langKey]?.appointmentsInputFields?.appointmentsDatePlaceHolder}
            type="date" 
            />
            <label htmlFor='appointment_description' className='text-blue-700 font-sans font-bold text-[1.2rem] xs:text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.5rem]'><strong>{lang[langKey]?.appointmentsInputFields?.appointmentsDescriptionLabel}</strong></label>
            <textarea
            placeholder={lang[langKey]?.appointmentsInputFields?.appointmentsDescriptionPlaceHolder}
            id='appointment_description'
            name='appointment_description'
            ref={appointmentDescriptionRef}
            className='py-1 px-2 text-[1.2rem] font-sans outline-none rounded-md border-[1px] border-blue-300 xs:text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.5rem]'
            autoComplete='on'
            autoFocus
            required 
            />
            <button type='submit' className='p-2 text-center text-[1.2rem] font-sans outline-none rounded-md bg-blue-800 text-white font-semibold hover:bg-blue-400'>
                {
                    loading ? (
                        <div className='flex flex-row'>
                            <Spinner />
                            <div className='break-words animate-pulse font-sans text-white ml-[3rem]'>{lang[langKey]?.appointmentsInputFields?.appointmentButtonParagraph}</div>
                        </div>
                    ) : (
                        <div className='sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-sans font-bold'>{lang[langKey]?.appointmentsInputFields?.appointmentButtonInnerText}</div>    
                    )
                }
            </button>
      </form>
    );
};
export default CareerCounselingDom;