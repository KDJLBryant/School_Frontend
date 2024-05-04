import { useRouter } from "next/navigation";

const PageRouter = ({
  route,
  buttonText,
}: {
  route: string;
  buttonText: string;
}) => {
  const router = useRouter();

  return (
    <button
      className="border px-4 my-2 rounded bg-blue-600 hover:bg-blue-700"
      onClick={() => router.push(route)}
    >
      {buttonText}
    </button>
  );
};

export default PageRouter;
