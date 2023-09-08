import { createSlice, current } from "@reduxjs/toolkit";

const mySlice = createSlice({
  name: "myReducer",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    deleteUser(state, action) {
      state.splice(action.payload, 1);
    },
    updateUserWork(state, action) {
      const uu = state.find((user) => user.id == action.payload.id);
      if (uu) {
        uu.Name = action.payload.Name;
        uu.LastName = action.payload.LastName;
        uu.Email = action.payload.Email;
        uu.Password = action.payload.Password;
      }
    },
  },
});

export const { addUser, deleteUser, updateUserWork } = mySlice.actions;
export default mySlice.reducer;
