import React from "react";

const PWDRequisite = ({
    capsLetterFlag,
    numberFlag,
    pwdLengthFlag,
    specialCharFlag,
}) => {

    return <div className="message">
        <p className={capsLetterFlag}>*Must Contain UpperCase</p>
        <p className={numberFlag}>*Must Contain a Number</p>
        <p className={pwdLengthFlag}>*Must contain more than 8 Characters</p>
        <p className={specialCharFlag}>*Must Contain a Special Character</p>
    </div>
};

export default PWDRequisite;