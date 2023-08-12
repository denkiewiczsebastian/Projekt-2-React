import React, { useState } from "react";
import "./IncomeForm.css";

function IncomeForm({ addIncome }) {
  const [incomeName, setIncomeName] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (incomeName.trim() === "") {
      setError("Podaj nazwę przychodu.");
    } else if (incomeAmount.trim() === "") {
      setError("Podaj kwotę przychodu.");
    } else if (isNaN(incomeAmount) || parseFloat(incomeAmount) <= 0) {
      setError("Podaj poprawną kwotę (większą niż 0).");
    } else {
      addIncome(incomeName, Number(parseFloat(incomeAmount).toFixed(2)));
      setIncomeName("");
      setIncomeAmount("");
      setError("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Nazwa przychodu"
        value={incomeName}
        onChange={(e) => setIncomeName(e.target.value)}
      />
      <input
        className="input"
        type="number"
        placeholder="Kwota przychodu"
        value={incomeAmount}
        onChange={(e) => setIncomeAmount(e.target.value)}
      />
      <button className="button" type="submit">
        Dodaj przychód
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default IncomeForm;
