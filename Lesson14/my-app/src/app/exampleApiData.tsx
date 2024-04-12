import { ChangeEvent, useEffect, useState, FC } from "react";

type Expense = {
  id: number;
  name: string;
  cost: number;
};

async function getData(): Promise<Expense[]> {
  const res = await fetch("http://localhost:3001/api/expenses");

  if (res.ok) {
    const response: Expense[] = await res.json();
    return response;
  } else {
    console.log("Error getting data");
    return [];
  }
}

const DataCard: FC<{ data: Expense[] }> = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div
          className="border rounded-lg m-4 p-4 text-center bg-blue-500"
          key={index}
        >
          <p className="underline font-bold text-2xl">Expense: {item.id}</p>
          <p className="text-xl">Name: {item.name}</p>
          <p className="text-xl">Cost: {item.cost}</p>
        </div>
      ))}
    </div>
  );
};

const ExampleApiData = () => {
  const [dataState, setDataState] = useState<Expense[]>([]);

  const fetchData = async () => {
    const fetchedData = await getData();
    setDataState(fetchedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="m-10">
      <div className="mb-4">
        <p className="font-bold text-2xl text-red-600">Test API</p>
        <DataCard data={dataState} />
      </div>
    </div>
  );
};

export default ExampleApiData;
