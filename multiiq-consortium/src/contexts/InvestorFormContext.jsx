import { createContext, useContext, useState } from "react";

const InvestorFormContext = createContext(); // FIXED

export const InvestorFormProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const openForm = () => setOpen(true);
  const closeForm = () => setOpen(false);

  return (
    <InvestorFormContext.Provider value={{ open, openForm, closeForm }}>
      {children}
    </InvestorFormContext.Provider>
  );
};

export const useInvestorForm = () => useContext(InvestorFormContext);
