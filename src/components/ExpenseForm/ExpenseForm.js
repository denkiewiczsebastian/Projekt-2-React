import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm({ addExpense }) {
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const parsedAmount = parseFloat(expenseAmount);

    if (expenseName.trim() === "" || isNaN(parsedAmount) || parsedAmount <= 0) {
      setError("Podaj poprawną kwotę (większą niż 0).");
      return;
    }

    addExpense(expenseName, parsedAmount);
    setExpenseName("");
    setExpenseAmount("");
    setError("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Nazwa wydatku"
        value={expenseName}
        onChange={(e) => setExpenseName(e.target.value)}
      />
      <input
        className="input"
        type="number"
        placeholder="Kwota wydatku"
        value={expenseAmount}
        onChange={(e) => setExpenseAmount(e.target.value)}
      />
      <button className="button" type="submit">
        Dodaj wydatek
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default ExpenseForm;
