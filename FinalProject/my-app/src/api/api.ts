export type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  socialSec: number;
  addressId: number;
  bookings: [{}];
};

export type Booking = {
  id: number;
  duration: number;
  facilityId: number;
  sportTypeId: number;
  userId: number;
};

// Wipped up array to take place of server side facilites
export const Facilities = [
  {
    id: 1,
    name: "Someplace",
  },
  {
    id: 2,
    name: "Otherplace",
  },
  {
    id: 3,
    name: "Bestplace",
  },
];

// Wipped up array to take place of server side sport types
export const SportTypes = [
  {
    id: 1,
    name: "Tennis",
  },
  {
    id: 2,
    name: "Football",
  },
  {
    id: 3,
    name: "Ice hockey",
  },
];

const getUsers = async (): Promise<User[]> => {
  const res = await fetch("http://localhost:5286/api/Users");

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  const response = await res.json();
  console.log("Fetching Users", response);
  return response;
};

const getUserBooking = async ({ user }: { user: User }): Promise<Booking> => {
  const res = await fetch("http://localhost:5286/api/Bookings");

  if (!res.ok) {
    throw new Error("Failed to fetch bookings");
  }

  const response = await res.json();
  console.log("Fetching Booking", response);

  const userBooking = response.find(
    (booking: Booking) => booking.userId == user.id
  );
  return userBooking;
};

export const api = {
  getUsers,
  getUserBooking,
};
