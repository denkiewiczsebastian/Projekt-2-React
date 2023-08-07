import React, { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expenseName.trim() === "" || isNaN(expenseAmount)) {
      return;
    }
    addExpense(expenseName, parseFloat(expenseAmount));
    setExpenseName("");
    setExpenseAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nazwa wydatku"
        value={expenseName}
        onChange={(e) => setExpenseName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Kwota wydatku"
        value={expenseAmount}
        onChange={(e) => setExpenseAmount(e.target.value)}
      />
      <button type="submit">Dodaj wydatek</button>
    </form>
  );
}

export default ExpenseForm;
