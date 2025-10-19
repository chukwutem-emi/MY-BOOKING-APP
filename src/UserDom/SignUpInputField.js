import React from "react";

const SignUpInputField = ({id, label, inputRef, type, placeholder, autoComplete, handleClearMsg}) => {
    return (
        <>
        <label htmlFor={id} className="text-gray-900 font-sans xs:text-[1rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.1] xl:text-[1.1rem]"><strong>{label}</strong></label>
        <input
        id={id}
        name={id}
        type={type}
        ref={inputRef}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-md outline-none bg-gray-200 border border-gray-400 p-4 text-black font-sans xs:text-[1rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.2] xl:text-[1.2rem]"
        required
        autoCorrect="on"
        onChange={handleClearMsg} 
        />
        </>
    );
};
export default SignUpInputField;