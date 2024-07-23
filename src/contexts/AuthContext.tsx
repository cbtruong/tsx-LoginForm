import React, { createContext, useState } from "react";
import { Props,AuthContextType,FormError } from "../type";

const AuthContext = createContext<AuthContextType>({
  formError: {
    name: "",
    email: "",
    phone: "",
    pass: "",
    noErr:"",
  },
  setFormError: () => {},
});


const AuthProvider: React.FC<Props> = ({ children }) => {
  const [formError, setFormError] = useState<FormError>({
    name: "",
    email: "",
    phone: "",
    pass: "",
    noErr:"",
  });

  return (
    <AuthContext.Provider value={{ formError, setFormError }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
