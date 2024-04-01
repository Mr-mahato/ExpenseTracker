import React, { useState , useContext } from "react";
import { GlobalContest } from "../Context/GlobalContest";
export default function AddTransaction() {
    const {addTransaction} = useContext(GlobalContest);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const id = Math.floor(Math.random() * 1000000);
  return (
    <div  className="flex flex-col gap-2">
      <h1 className="mt-6 border-b-2 border-gray-500">Add New Transaction</h1>

      <label htmlFor="">Text</label>
      <input
        type="text"
        className="outline-none border p-1"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

     
      <label htmlFor="">Amount</label>
      <input
        type="Number"
        className="outline-none border p-1"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button className="bg-blue-500 rounded p-2 text-white"
      onClick={()=>addTransaction({text,amount:+amount , id})}
      >
        Add Transaction
      </button>
    </div>
  );
}
