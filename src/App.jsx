import React from "react";
import Header from "./component/Header";
import Balance from "./component/Balance";
import IncomeExpense from "./component/IncomeExpense";
import TransactionList from "./component/TransactionList";
import AddTransaction from "./component/AddTransaction";
import { GlobalProvider } from "./Context/GlobalContest";

export default function App() {
  return (
    <GlobalProvider>
      <div className="p-10 mt-10 border w-1/3 mx-auto flex flex-col ">
        <Header />
        <div className="container flex flex-col">
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}
