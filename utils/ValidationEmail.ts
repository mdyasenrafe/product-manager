import validator from "validator";
import React from "react";

export const ValidationEmail = (
  email: string,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setEmailError: React.Dispatch<React.SetStateAction<string | undefined>>
) => {
  setEmail(email);
  if (email.length == 0) setEmailError("Email Field is required");
  else {
    const emailValidation = validator.isEmail(email);
    if (emailValidation) setEmailError(undefined);
    else setEmailError("Email is not valid");
  }
};
