import { FC, PropsWithChildren, useEffect, useState } from "react";
import { Expense, api } from "./api";
import exp from "constants";

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

const DeleteButton = ({ onDelete }: { onDelete: (id: number) => void }) => {
  const [deleteId, setDeletId] = useState(0);

  const handleDelete = () => {
    if (!deleteId) return;
    onDelete(deleteId);
    setDeletId(0);
  };

  return (
    <div>
      <input
        className="border m-4"
        type="number"
        placeholder="Expense id"
        value={deleteId}
        onChange={(e) => setDeletId(parseInt(e.target.value))}
      />
      <button className="border rounded bg-red-600 p-2" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

const Expenses = () => {
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
        <ExpenseInput onSubmit={api.postExpenses} />
        <DeleteButton onDelete={api.deleteExpense} />
        {expenses.map((expense) => (
          <p
            className="rounded-xl bg-red-300 text-center text-xl p-2 m-2"
            key={expense.id}
          >
            {expense.id}: {expense.name} - {expense.cost}kr
          </p>
        ))}
      </div>
    </div>
  );
};

export default Expenses;
