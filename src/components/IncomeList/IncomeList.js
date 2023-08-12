import React, { useState } from "react";
import "./IncomeList.css";

function IncomeList({ incomes, deleteItem, editItem }) {
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
    if (!isNaN(editedAmount) && parseFloat(editedAmount) > 0) {
      editItem(incomes[index], "income", editedName, parseFloat(editedAmount));
      setError("");
    } else {
      setError("Podaj poprawną kwotę (większą niż 0).");
    }
    setEditingIndex(null);
    setNewName("");
    setNewAmount("");
  };

  return (
    <ul className="incomeList">
      {incomes.map((income, index) => (
        <li className="incomeItem" key={index}>
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
                type="text"
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
              {income.name}: {income.amount} zł
              <button
                className="button"
                onClick={() => handleEdit(index, income.name, income.amount)}
              >
                Edytuj
              </button>
              <button
                className="button"
                onClick={() => deleteItem(income, "income")}
              >
                Usuń
              </button>
            </>
          )}
        </li>
      ))}
      {error && <div className="error">{error}</div>}
    </ul>
  );
}

export default IncomeList;
