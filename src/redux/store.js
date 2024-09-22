import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./balanceSlice";
import localeReducer from "./localeReducer";

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    locale: localeReducer,
  },
});

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "balance/deposit":
//       return {
//         ...state,
//         balance: {
//           value: state.balance.value + action.payload,
//         },
//       };

//     case "balance/withdraw":
//       return {
//         ...state,
//         balance: {
//           value: state.balance.value - action.payload,
//         },
//       };
//     case "locale/changeLang":
//       return {
//         ...state,
//         locale: {
//           lang: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };
