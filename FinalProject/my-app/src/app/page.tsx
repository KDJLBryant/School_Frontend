"use client";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import SLIDES from "@/components/ImageCarousel/ImageCarouselData";
import FindUserInput from "@/components/mainPage/FindUserInput";
import { User, api } from "../api/api";
import { useEffect, useState } from "react";
import UserAndBookingDisplay from "@/components/mainPage/ApiDataContext";
import {
  FetchedBookingProvider,
  useFetchedBookingContext,
} from "@/context/FetchedBookingContext";
import PageRouter from "@/components/PageRouter";

const CreateNewBookingButton = () => {
  const { user } = useFetchedBookingContext();
  return (
    user && (
      <div>
        <PageRouter route="/makeBooking" buttonText="New" />
      </div>
    )
  );
};

const UpdateBookingButton = () => {
  const { booking } = useFetchedBookingContext();
  return (
    booking && (
      <div>
        <PageRouter route="/makeBooking" buttonText="Update" />
      </div>
    )
  );
};

const Description = () => {
  return (
    <div>
      <p className="rounded text-center text-2xl bg-orange-400">
        No matter what sport you want to play, we will have the right facility
        for you. We have a growing number of companies joining our roster of
        amazing multipurpose facilities! Enter your name below and get booking
        now!
      </p>
    </div>
  );
};

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const fetchedUsers = await api.getUsers();
    setUsers(fetchedUsers);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="md:flex">
      <FetchedBookingProvider>
        <ImageCarousel data={SLIDES} />
        <Description />
        <FindUserInput users={users} />
        <UserAndBookingDisplay />
        <div className="flex justify-around bg-slate-400">
          <CreateNewBookingButton />
          <UpdateBookingButton />
        </div>
      </FetchedBookingProvider>
    </div>
  );
}
