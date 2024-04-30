"use client";
import { useRouter } from "next/navigation";

const RouterHeader = () => {
  const router = useRouter();

  return (
    <div className="p-4 bg-blue-400 text-white">
      <button
        className="border rounded p-4 mx-2 bg-slate-800"
        type="button"
        onClick={() => router.push("/")}
      >
        My expenses
      </button>
      <button
        className="border rounded p-4 mx-2 bg-slate-800"
        type="button"
        onClick={() => router.push("/extra")}
      >
        My girls expenses
      </button>
    </div>
  );
};

export default RouterHeader;
