import React from "react";

const PersonnelInputFields = ({label, id, type, inputRef, autoComplete, placeholder, handleClearMsg}) => {
    return (
        <>
        <label htmlFor={id} className="text-blue-700 font-bold xs:text-[0.7rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.2rem]"><strong>{label}</strong></label>
        <input
        type={type}
        id={id}
        name={id}
        ref={inputRef}
        placeholder={placeholder}
        autoComplete={autoComplete}
        autoCorrect="on"
        onChange={handleClearMsg}
        className="p-2 rounded-lg font-sans text-start xs:text-[0.7rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.2rem] outline-none border-[1px] border-blue-300"
        required 
        />
        </>
    );
};
export default PersonnelInputFields;