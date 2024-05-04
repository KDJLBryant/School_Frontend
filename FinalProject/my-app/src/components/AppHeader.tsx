"use client";
import Image from "next/image";
import Logo from "../assets/Logo.jpg";

const AppHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-around bg-slate-900">
      <Image className="md:size-1/2 lg:size-1/4" src={Logo} alt="Logo" />
      <div className="rounded-xl text-center p-4 bg-orange-500">
        <p className="text-3xl font-bold text-white">Book a sport facility</p>
      </div>
    </div>
  );
};

export default AppHeader;
