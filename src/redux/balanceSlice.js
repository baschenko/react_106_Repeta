import { createAction } from "@reduxjs/toolkit";

export const deposit = createAction("balance/deposit");

export const withdraw = createAction("balance/withdraw");

export default function balanceReducer(state = { value: 500 }, action) {
  switch (action.type) {
    case "balance/deposit":
      return {
        ...state,
        value: state.value + action.payload,
      };

    case "balance/withdraw":
      return {
        ...state,
        value: state.value + action.payload,
      };
    default:
      return state;
  }
}
