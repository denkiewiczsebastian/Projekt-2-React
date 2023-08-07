import React, { useState } from "react";

function IncomeList({ incomes, deleteItem, editItem }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [newName, setNewName] = useState("");
  const [newAmount, setNewAmount] = useState("");

  const handleEdit = (index, name, amount) => {
    setEditingIndex(index);
    setNewName(name);
    setNewAmount(amount);
  };

  const handleSave = (index, editedName, editedAmount) => {
    editItem(incomes[index], "income", editedName, editedAmount);
    setEditingIndex(null);
    setNewName("");
    setNewAmount("");
  };

  return (
    <ul className="incomeList">
      {incomes.map((income, index) => (
        <li
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginBottom: "5px",
            color: "green",
          }}
        >
          {editingIndex === index ? (
            <>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <input
                type="number"
                value={newAmount}
                onChange={(e) => setNewAmount(e.target.value)}
              />
              <button onClick={() => handleSave(index, newName, newAmount)}>
                Zapisz
              </button>
            </>
          ) : (
            <>
              {income.name}: {income.amount} zł
              <button
                onClick={() => handleEdit(index, income.name, income.amount)}
              >
                Edytuj
              </button>
              <button onClick={() => deleteItem(income, "income")}>Usuń</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default IncomeList;
