import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleSearch: false,
    searchTxt: null,
  },
  reducers: {
    toggleSearchPage: (state) => {
      state.toggleSearch = !state.toggleSearch;
    },
    setSearchText: (state, action) => {
      state.searchTxt = action.payload;
    },
  },
});

export const { toggleSearchPage, setSearchText } = gptSlice.actions;
export default gptSlice.reducer;
