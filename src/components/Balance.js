import React from "react";

function Balance({ incomes, expenses }) {
  const totalIncome = incomes.reduce((acc, income) => acc + income.amount, 0);
  const totalExpense = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );
  const balance = totalIncome - totalExpense;

  let balanceText = "";
  let balanceColor = "";

  if (balance > 0) {
    balanceText = `Możesz jeszcze wydać ${balance} złotych`;
    balanceColor = "green";
  } else if (balance === 0) {
    balanceText = "Bilans wynosi zero";
    balanceColor = "black";
  } else {
    balanceText = `Bilans jest ujemny. Jesteś na minusie ${Math.abs(
      balance
    )} złotych`;
    balanceColor = "red";
  }

  return (
    <div
      className="balance"
      style={{
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: "10px",
        color: balanceColor,
      }}
    >
      {balanceText}
    </div>
  );
}

export default Balance;
