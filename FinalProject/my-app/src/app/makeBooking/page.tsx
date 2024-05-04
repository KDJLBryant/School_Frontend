"use client";
import { Facilities, SportTypes } from "@/api/api";
import PageRouter from "@/components/PageRouter";
import {
  NewBookingProvider,
  useNewBookingContext,
} from "@/context/NewBookingContext";
import { Dispatch, SetStateAction, useState } from "react";

const CreateBookingInput = () => {
  const { sportType, facility, setFacility, setSportType } =
    useNewBookingContext();

  return (
    <div className="py-4">
      <p className="py-4 text-center text-4xl font-bold">Select a Sport</p>
      {SportTypes.map((s) => (
        <div key={s.id} className="flex justify-center">
          <p className="p-4">{s.name}</p>
          <button
            className="border rounded p-2 bg-red-500"
            onClick={() => setSportType(s.name)}
          >
            Select
          </button>
        </div>
      ))}
      {sportType && (
        <p className="py-4 text-center font-bold text-green-400">
          Selected {sportType}
        </p>
      )}
      <p className="py-4 text-center text-4xl font-bold">Select a facility</p>
      {Facilities.map((f) => (
        <div key={f.id} className="flex justify-center">
          <p className="p-4">{f.name}</p>
          <button
            className="border rounded p-2 bg-red-500"
            onClick={() => setFacility(f.name)}
          >
            Select
          </button>
        </div>
      ))}
      {facility && (
        <p className="py-4 text-center font-bold text-green-400">
          Selected {facility}
        </p>
      )}
    </div>
  );
};

const ContinueAndPrevButtons = () => {
  return (
    <div className="flex justify-around bg-slate-600">
      <PageRouter route="/" buttonText="Previous" />
      <PageRouter route="/" buttonText="Continue" />
    </div>
  );
};

const makeBooking = () => {
  const [selectedFacility, setSelectedFacility] = useState("");
  const [selectedSportType, setSelectedSportType] = useState("");

  return (
    <div className="bg-slate-500">
      <NewBookingProvider>
        <CreateBookingInput />
        <div>
          <ContinueAndPrevButtons />
        </div>
      </NewBookingProvider>
    </div>
  );
};

export default makeBooking;
