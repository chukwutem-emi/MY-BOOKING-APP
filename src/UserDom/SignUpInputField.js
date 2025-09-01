import React from "react";

const SignUpInputField = ({id, label, inputRef, type, placeholder, autoComplete, handleClearMsg}) => {
    return (
        <>
        <label htmlFor={id} className="text-red-400 font-sans font-bold text-xl xs:text-lg sm:text-xl md:text-xl"><strong>{label}</strong></label>
        <input
        id={id}
        name={id}
        type={type}
        ref={inputRef}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-md outline-none bg-gray-700 p-4 text-white font-sans text-lg"
        required
        autoCorrect="on"
        onChange={handleClearMsg} 
        />
        </>
    );
};
export default SignUpInputField;