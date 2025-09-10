import React from "react";
import Spinner from "../../Utils/Spinner";
import EducationCustomDropDown from "../../AppointmentCustomDropDown/EducationCustomDropDown";
import InputFields from "./InputFields";
import { useSelector } from "react-redux";
import lang from "../../Utils/multiLanguageConfig";

const CareerCounselingDom = ({handleCareerClickForm, message, loading, addressRef, appointmentDateRef, appointmentDescriptionRef, genderRef, nextOfKinAddressRef, nextOfKinPhoneNumberRef, nextOfKinRef, appointmentTimeRef, errorMsg, handleSelected, setMessage}) => {

    const langKey = useSelector((store) => store.config?.lang);

    return (
        <form onSubmit={handleCareerClickForm} className='flex flex-col space-y-4 w-full bg-white p-8 rounded-2xl mb-[2rem] mx-auto shadow-2xl xs:w-[80%] sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[50%]'>
            <h1 className='text-blue-800 font-extrabold mb-[2rem] animate-pulse xs:text-[0.8rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.3rem]'>{lang[langKey]?.appointmentsInputFields?.careerCounselingHeading}</h1>
            {
                message && (
                    <div className={`p-2 break-words w-full font-sans xs:text-[0.6rem] sm:text-[0.8rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem] ${errorMsg ? "text-red-500 bg-red-100 text-sm" : "text-green-700 bg-green-100 font-semibold text-lg"}`}>
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
            <label htmlFor='appointment_description' className='text-blue-700 font-sans font-bold xs:text-[0.7rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.2rem]'><strong>{lang[langKey]?.appointmentsInputFields?.appointmentsDescriptionLabel}</strong></label>
            <textarea
            placeholder={lang[langKey]?.appointmentsInputFields?.appointmentsDescriptionPlaceHolder}
            id='appointment_description'
            name='appointment_description'
            ref={appointmentDescriptionRef}
            className='py-1 px-2 font-sans outline-none rounded-md border-[1px] border-blue-300 xs:text-[0.7rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.2rem]'
            autoComplete='on'
            autoFocus
            required 
            />
            <button type='submit' className='p-2 font-sans outline-none rounded-md bg-blue-800 text-white font-semibold hover:bg-blue-400'>
                {
                    loading ? (
                        <div className='flex flex-row justify-between'>
                            <Spinner />
                            <div className='animate-pulse break-words xs:ml-[6rem] sm:ml-[6rem] md:ml-[6rem] lg:ml-[10rem] xl:ml-[12rem'>{lang[langKey]?.appointmentsInputFields?.appointmentButtonParagraph}</div>
                        </div>
                    ) : (
                        <div className='text-center font-bold xs:text-[1.3rem] sm:text-[1.4rem] md:text-[1.4rem] lg:text-[1.5rem] xl:text-[1.5rem]'>{lang[langKey]?.appointmentsInputFields?.appointmentButtonInnerText}</div>    
                    )
                }
            </button>
      </form>
    );
};
export default CareerCounselingDom;