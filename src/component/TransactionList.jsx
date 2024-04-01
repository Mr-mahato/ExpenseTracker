import React, { useContext } from "react";
import { GlobalContest } from "../Context/GlobalContest";
import  Transaction  from "./Transaction";

// lets get the data from the contest
export default function TransactionList() {
  const { transactions } = useContext(GlobalContest);
  return (
    <>
      <h1 className="mt-6 border-b-2 border-gray-500">History</h1>

      <div className="flex flex-col">
        {/* this is the best way of printing the data from the api  */}
        {transactions.map((transaction) =>  <Transaction transaction={transaction} key={transaction.id}/> )}
      </div>
    </>
  );
}
