import { User } from "@/api/api";
import { useRef } from "react";
import { useFetchedBookingContext } from "@/context/FetchedBookingContext";

const FindUserInput = ({ users }: { users: User[] }) => {
  const fNameRef = useRef<HTMLInputElement>(null);
  const lNameRef = useRef<HTMLInputElement>(null);
  const { setUser } = useFetchedBookingContext();

  const findAndSetUser = () => {
    const foundUser = users.find(
      (user) =>
        user.firstName === fNameRef.current?.value &&
        user.lastName === lNameRef.current?.value
    );
    if (foundUser) {
      setUser(foundUser);
    } else {
      alert("User not found!");
    }
  };

  return (
    <div className="p-4 bg-slate-500">
      <p className="p-2 rounded-xl text-xl text-center font-bold text-white bg-slate-700">
        Enter you first and last name to find your booking
      </p>
      <div className="flex md:flex-col">
        <div className="p-2">
          <label htmlFor="fName">FirstName: </label>
          <input
            className="rounded"
            id="fName"
            type="string"
            placeholder="John"
            ref={fNameRef}
          />
        </div>
        <div className="p-2">
          <label htmlFor="lName">LastName: </label>
          <input
            className="rounded"
            id="lName"
            type="string"
            placeholder="Doe"
            ref={lNameRef}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="border px-4 my-2 rounded text-xl font-bold bg-blue-600 hover:bg-blue-700"
          onClick={findAndSetUser}
        >
          search
        </button>
      </div>
    </div>
  );
};

export default FindUserInput;
