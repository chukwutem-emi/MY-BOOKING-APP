import React from "react";

const PersonnelInputFields = ({label, id, type, inputRef, autoComplete, placeholder, handleClearMsg}) => {
    return (
        <>
        <label htmlFor={id} className="text-blue-900 font-bold text-[1.3rem] font-sans xs:text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.3rem] xl:text-[1.3rem]"><strong>{label}</strong></label>
        <input
        type={type}
        id={id}
        name={id}
        ref={inputRef}
        placeholder={placeholder}
        autoComplete={autoComplete}
        autoCorrect="on"
        onChange={handleClearMsg}
        className="outline-none border border-blue-900 p-2 text-[1.2rem] rounded-lg bg-gray-500 text-white font-sans font-bold xs:text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.2rem] xl:text-[1.2rem]"
        required 
        />
        </>
    );
};
export default PersonnelInputFields;