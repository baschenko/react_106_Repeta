import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "locale",
  initialState: { lang: "pl" },
  reducers: {
    changeLang: (state, action) => {
      return {
        ...state,
        lang: action.payload,
      };
    },
  },
});

export const { changeLang } = slice.actions;

export default slice.reducer;

// export const changeLang = createAction("locale/changeLang");

// export default function localeReducer(state = { lang: "pl" }, action) {
//   switch (action.type) {
//     case "locale/changeLang":
//       return {
//         ...state,
//         lang: action.payload,
//       };

//     default:
//       return state;
//   }
// }
