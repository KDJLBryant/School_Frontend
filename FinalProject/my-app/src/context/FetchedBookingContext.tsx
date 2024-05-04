import { User, Booking, api } from "../api/api";
import React, { ReactNode, createContext, useContext, useState } from "react";

type FetchedBookingContextType = {
  user: User | null;
  booking: Booking | null;
  setUser: (user: User | null) => void;
  setBooking: (booking: Booking | null) => void;
};

const FetchedBookingContext = createContext<FetchedBookingContextType>({
  user: null,
  booking: null,
  setUser: () => {},
  setBooking: () => {},
});

export const useFetchedBookingContext = () => useContext(FetchedBookingContext);

export const FetchedBookingProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [booking, setBooking] = useState<Booking | null>(null);

  return (
    <FetchedBookingContext.Provider
      value={{ user, booking, setUser, setBooking }}
    >
      {children}
    </FetchedBookingContext.Provider>
  );
};
