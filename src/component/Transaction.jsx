import React,{useContext} from "react";
import { GlobalContest } from "../Context/GlobalContest";
export default function Transaction({ transaction }) {
    const { deleteTransaction } = useContext(GlobalContest);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div className="group flex">
      <button className="mt-2 p-2 text-red-600 text-2xl "
      onClick={() => deleteTransaction(transaction.id)}
      >X</button>
      <div
        className={`flex w-full shadow-md border-r-4 mt-2 justify-between p-2 4 ${
          sign === "-" ? "border-red-600" : "border-green-600"
        }`}
      >
        <h1>{transaction.text}</h1>
        <h1 className="">
          {sign}${Math.abs(transaction.amount)}
        </h1>
      </div>
    </div>
  );
}
