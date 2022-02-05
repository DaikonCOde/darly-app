import { createSlice } from "@reduxjs/toolkit";

const Categories = createSlice({
  name : 'Categories',
  initialState: {
    listCategories: []
  },
  reducers: {
    updateListCategories: ( state, action ) => {
      state.listCategories = action.payload;
    }
  }

})

export const { updateListCategories } = Categories.actions;
export default Categories.reducer;