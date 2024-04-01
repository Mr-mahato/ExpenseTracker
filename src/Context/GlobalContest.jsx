import React, { useState, useContext, createContext, useReducer } from "react";
import AppReducer from './AppReducer'
const initialState = {
  transaction: [
  ],
};
// this is the contest object which gonna hold my data through the component
export const GlobalContest = createContext(initialState);
// lets create a contestProvider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // lets add delte button
  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }
  return (
  <GlobalContest.Provider value={{transactions:state.transaction , deleteTransaction , addTransaction}}>
    {children}
  </GlobalContest.Provider>
  );
};
