import { createAction } from "@reduxjs/toolkit";

export const changeLang = createAction("locale/changeLang");

export default function localeReducer(state = { lang: "pl" }, action) {
  switch (action.type) {
    case "locale/changeLang":
      return {
        ...state,
        lang: action.payload,
      };

    default:
      return state;
  }
}
