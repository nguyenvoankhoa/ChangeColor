import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  headerColor: "#fff",
  bannerColor: "#fff",
  footerColor: "#fff",
  textColor: "#000",
  textActive: "#ff324d",
  onFocus: "",
};
const changeColorSlice = createSlice({
  name: "color",
  initialState: initialState,
  reducers: {
    changeFocus(state, action) {
      state.onFocus = action.payload;
    },
    changeHeaderColor(state, action) {
      state.headerColor = action.payload;
    },
    changeBannerColor(state, action) {
      state.bannerColor = action.payload;
    },
    changeFooterColor(state, action) {
      state.footerColor = action.payload;
    },
    changeTextColor(state, action) {
      state.textColor = action.payload;
    },
    changeTextActiveColor(state, action) {
      state.textActive = action.payload;
    },
  },
});

const store = configureStore({
  reducer: changeColorSlice.reducer,
});
export const changeColor = changeColorSlice.actions;
export default store;
