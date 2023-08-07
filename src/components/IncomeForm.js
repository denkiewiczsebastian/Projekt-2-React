import React, { useState } from "react";

function IncomeForm({ addIncome }) {
  const [incomeName, setIncomeName] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (incomeName.trim() === "" || isNaN(incomeAmount)) {
      return;
    }
    addIncome(incomeName, parseFloat(incomeAmount));
    setIncomeName("");
    setIncomeAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nazwa przychodu"
        value={incomeName}
        onChange={(e) => setIncomeName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Kwota przychodu"
        value={incomeAmount}
        onChange={(e) => setIncomeAmount(e.target.value)}
      />
      <button type="submit">Dodaj przychód</button>
    </form>
  );
}

export default IncomeForm;
