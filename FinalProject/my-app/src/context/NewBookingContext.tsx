import { User, Booking, api } from "../api/api";
import React, { ReactNode, createContext, useContext, useState } from "react";

type NewBookingContextType = {
  facility: string;
  sportType: string;
  setFacility: (name: string) => void;
  setSportType: (name: string) => void;
};

const NewBookingContext = createContext<NewBookingContextType>({
  facility: "",
  sportType: "",
  setFacility: () => {},
  setSportType: () => {},
});

export const useNewBookingContext = () => useContext(NewBookingContext);

export const NewBookingProvider = ({ children }: { children: ReactNode }) => {
  const [sportType, setSportType] = useState("");
  const [facility, setFacility] = useState("");

  return (
    <NewBookingContext.Provider
      value={{ sportType, setSportType, facility, setFacility }}
    >
      {children}
    </NewBookingContext.Provider>
  );
};
