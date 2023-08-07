import React from "react";

function ExpenseList({ expenses, deleteItem, editItem }) {
  return (
    <ul className="expenseList">
      {expenses.map((expense, index) => (
        <li
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginBottom: "5px",
            color: "red",
          }}
        >
          {expense.name}: {expense.amount} zł
          <button onClick={() => editItem(expense, "expense")}>Edytuj</button>
          <button onClick={() => deleteItem(expense, "expense")}>Usuń</button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
