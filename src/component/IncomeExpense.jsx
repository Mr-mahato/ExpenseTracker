import React, { useContext } from "react";
import { GlobalContest } from "../Context/GlobalContest";
export default function IncomeExpense() {
  const { transactions } = useContext(GlobalContest);
  const amount = transactions.map((transaction) => transaction.amount);

  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <div className="flex justify-between shadow-md  p-3">
      <div className=" border-gray-500 ">
        <h1 className="text-center">Income</h1>
        <h1 className="text-2xl text-green-600">{income}</h1>
      </div>
      <div>
        <h1 className="text-center">Expenses</h1>
        <h1 className="text-2xl text-red-600">{expense}</h1>
      </div>
    </div>
  );
}
