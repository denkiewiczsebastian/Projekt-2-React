import React, { useState } from "react";
import "./ExpenseList.css";

function ExpenseList({ expenses, deleteItem, editItem }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [newName, setNewName] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [error, setError] = useState("");

  const handleEdit = (index, name, amount) => {
    setEditingIndex(index);
    setNewName(name);
    setNewAmount(amount);
    setError("");
  };

  const handleSave = (index, editedName, editedAmount) => {
    const parsedAmount = parseFloat(editedAmount);

    if (editedName.trim() === "" || isNaN(parsedAmount) || parsedAmount <= 0) {
      setError("Podaj poprawną kwotę (większą niż 0).");
      return;
    }

    editItem(expenses[index], "expense", editedName, parsedAmount);
    setEditingIndex(null);
    setNewName("");
    setNewAmount("");
    setError("");
  };

  return (
    <ul className="expenseList">
      {expenses.map((expense, index) => (
        <li className="expenseItem" key={index}>
          {editingIndex === index ? (
            <>
              <input
                className="input"
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <input
                className="input"
                type="number"
                value={newAmount}
                onChange={(e) => setNewAmount(e.target.value)}
              />
              <button
                className="button"
                onClick={() => handleSave(index, newName, newAmount)}
              >
                Zapisz
              </button>
            </>
          ) : (
            <>
              {expense.name}: {expense.amount.toFixed(2)} zł
              <button
                className="button"
                onClick={() => handleEdit(index, expense.name, expense.amount)}
              >
                Edytuj
              </button>
              <button
                className="button"
                onClick={() => deleteItem(expense, "expense")}
              >
                Usuń
              </button>
            </>
          )}
        </li>
      ))}
      {error && <p className="error">{error}</p>}
    </ul>
  );
}

export default ExpenseList;
