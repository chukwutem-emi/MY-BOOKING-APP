import React from "react";

const InputFields = ({id, type, placeholder, inputRef, label, autoComplete}) => {
    return (
        <>
        <label htmlFor={id} className="text-xl text-blue-700 font-extrabold sm:text-[1.5rem] md:text-[1.7rem] lg:text-[1.7rem]"><strong>{label}</strong></label>
        <input
        id={id}
        name={id}
        type={type}
        ref={inputRef}
        placeholder={placeholder}
        className="p-2 rounded-lg font-sans text-[1rem] text-start md:text-[1.7rem] lg:text-[1.7rem] outline-none border-[1px] border-blue-300"
        autoComplete={autoComplete}
        required
        />
        </>
    );
};
export default InputFields;