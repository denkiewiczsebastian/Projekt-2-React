import React from "react";
import "./Balance.css";

function Balance({ incomes, expenses }) {
  const totalIncome = incomes.reduce((acc, income) => acc + income.amount, 0);
  const totalExpense = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );
  const balance = totalIncome - totalExpense;

  let balanceText = "";
  let balanceColorClass = "";

  if (balance > 0) {
    balanceText = `Możesz jeszcze wydać ${balance} złotych`;
    balanceColorClass = "green";
  } else if (balance === 0) {
    balanceText = "Bilans wynosi zero";
    balanceColorClass = "black";
  } else {
    balanceText = `Bilans jest ujemny. Jesteś na minusie ${Math.abs(
      balance
    )} złotych`;
    balanceColorClass = "red";
  }
  return <div className={`balance ${balanceColorClass}`}>{balanceText}</div>;
}

export default Balance;
