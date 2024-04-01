import React, { useContext } from "react";
import { GlobalContest } from "../Context/GlobalContest";
export default function Balance() {
  const { transactions } = useContext(GlobalContest);

  const amount = transactions.map((val) => val.amount);
  const total = amount.reduce((acc, next) => (acc += next), 0);
  console.log(transactions);
  return (
    <div className=" p-3 rounded">
      <h4>Your Balance</h4>
      <h1 className="text-2xl">{total}</h1>
    </div>
  );
}
