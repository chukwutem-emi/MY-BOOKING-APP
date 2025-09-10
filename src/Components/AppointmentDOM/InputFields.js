import React from "react";

const InputFields = ({id, type, placeholder, inputRef, label, autoComplete}) => {
    return (
        <>
        <label htmlFor={id} className="text-blue-700 font-bold xs:text-[0.7rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.2rem]"><strong>{label}</strong></label>
        <input
        id={id}
        name={id}
        type={type}
        ref={inputRef}
        placeholder={placeholder}
        className="p-2 rounded-lg font-sans text-start xs:text-[0.7rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.2rem] outline-none border-[1px] border-blue-300"
        autoComplete={autoComplete}
        required
        />
        </>
    );
};
export default InputFields;