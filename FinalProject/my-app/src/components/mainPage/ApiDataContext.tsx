import { Booking, Facilities, SportTypes, User, api } from "@/api/api";
import { useFetchedBookingContext } from "@/context/FetchedBookingContext";
import { useEffect } from "react";

const UserAndBookingDisplay = () => {
  const { user, booking, setBooking } = useFetchedBookingContext();

  if (!user) {
    return null;
  }

  const fetchUserBooking = async () => {
    const fetchedBooking = await api.getUserBooking({ user: user });
    setBooking(fetchedBooking);
  };

  useEffect(() => {
    fetchUserBooking();
  }, [user]);

  return (
    <div className="text-center bg-green-600">
      <p className="text-xl text-white">
        Found you{" "}
        <b>
          {user.firstName} {user.lastName}
        </b>
      </p>
      {booking && (
        <>
          <p>Booking found: {booking.duration} mins</p>
          {Facilities.map((f) => (
            <div key={f.id}>
              <p>
                {f.name
                  ? f.id === booking.facilityId
                    ? f.name
                    : null
                  : "Nothing"}
              </p>
            </div>
          ))}
          {SportTypes.map((s) => (
            <div key={s.id}>
              <p>
                {s.name
                  ? s.id === booking.sportTypeId
                    ? s.name
                    : null
                  : "Nothing"}
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default UserAndBookingDisplay;
