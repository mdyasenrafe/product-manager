import React from "react";
export const ValidationPassword = (
  e: string,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  setPasswordError: React.Dispatch<React.SetStateAction<string | undefined>>
) => {
  setPassword(e);
  if (e.length == 0) setPasswordError("Password Field is required");
  else if (e.length < 6)
    setPasswordError("Password must be at least 6 characters");
  else setPasswordError(undefined);
};
