import { FC, PropsWithChildren, useEffect, useState } from "react";
import { Expense, api } from "./api";
import { AdminRightsProvider, useAdminRights } from "./AdminRightsContext";
import Link from "next/link";

type ExpenseInputProps = {
  onSubmit: (newExpense: Expense) => void;
};

const ExpenseInput: FC<ExpenseInputProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const handleSubmit = () => {
    if (!name || !cost) return;
    onSubmit({ id: 0, name: name, cost: parseFloat(cost) });
    setName("");
    setCost("");
  };

  return (
    <div>
      <input
        className="border m-4"
        type="text"
        placeholder="Expense Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border m-4"
        type="number"
        placeholder="Expense Cost"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />
      <button className="border rounded bg-blue-600 p-2" onClick={handleSubmit}>
        Add Expense
      </button>
    </div>
  );
};

const DeleteButton: FC<{ id: number }> = ({ id }) => {
  const { value } = useAdminRights();

  const handleDelete = () => {
    if (value) {
      api.deleteExpense(id);
    } else {
      console.log("Not authorized");
    }
  };

  return (
    <div>
      {value && (
        <button
          className="border rounded bg-red-600 p-2"
          onClick={handleDelete}
        >
          Delete
        </button>
      )}
    </div>
  );
};

const AdminToggle = () => {
  const { value, toggleValue } = useAdminRights();

  const handleToggle = () => {
    toggleValue();
    console.log("Toggled admin");
  };

  return (
    <div>
      <button
        onClick={handleToggle}
        className="border rounded bg-slate-600 p-2"
      >
        {value ? "Disable Admin" : "Enable Admin"}
      </button>
    </div>
  );
};

const MyExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>();

  const fetchExpenses = async () => {
    const fetchedExpenses = await api.getExpenses();
    setExpenses(fetchedExpenses);
  };
  useEffect(() => {
    fetchExpenses();
  }, []);

  if (!expenses) {
    return <p>Loading...</p>;
  }

  const handleDelete = (id: number) => {
    api.deleteExpense(id);
  };

  return (
    <div className="m-10">
      <div className="mb-4">
        <AdminRightsProvider>
          <p className="text-4xl my-4 font-bold underline">My expenses</p>
          <AdminToggle />
          <ExpenseInput onSubmit={api.postExpenses} />
          {expenses.map((expense) => (
            <div key={expense.id} className="flex items-center mb-2">
              <p
                className="rounded-xl bg-red-300 text-center text-xl p-2 m-2"
                key={expense.id}
              >
                {expense.id}: {expense.name} - {expense.cost}kr
              </p>
              <DeleteButton id={expense.id} />
            </div>
          ))}
        </AdminRightsProvider>
      </div>
    </div>
  );
};

export default MyExpenses;
