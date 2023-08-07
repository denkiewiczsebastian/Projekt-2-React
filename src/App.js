import React, { useState } from "react";
import "./App.css";

import Balance from "./components/Balance";
import IncomeForm from "./components/IncomeForm";
import ExpenseForm from "./components/ExpenseForm";
import IncomeList from "./components/IncomeList";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const addIncome = (name, amount) => {
    const income = { name, amount };
    setIncomes([...incomes, income]);
  };

  const addExpense = (name, amount) => {
    const expense = { name, amount };
    setExpenses([...expenses, expense]);
  };

  const deleteItem = (item, type) => {
    if (type === "income") {
      setIncomes(incomes.filter((income) => income !== item));
    } else {
      setExpenses(expenses.filter((expense) => expense !== item));
    }
  };

  const editItem = (item, type, newName, newAmount) => {
    const newItem = { name: newName, amount: newAmount };
    if (type === "income") {
      setIncomes(incomes.map((income) => (income === item ? newItem : income)));
    } else {
      setExpenses(
        expenses.map((expense) => (expense === item ? newItem : expense))
      );
    }
  };

  return (
    <div className="container">
      <h1>Budżet domowy</h1>
      <Balance incomes={incomes} expenses={expenses} />
      <IncomeForm addIncome={addIncome} />
      <ExpenseForm addExpense={addExpense} />
      <IncomeList
        incomes={incomes}
        deleteItem={deleteItem}
        editItem={editItem}
      />
      <ExpenseList
        expenses={expenses}
        deleteItem={deleteItem}
        editItem={editItem}
      />
    </div>
  );
}

export default App;
