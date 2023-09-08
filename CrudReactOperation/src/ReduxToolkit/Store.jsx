import { configureStore, combineReducers } from "@reduxjs/toolkit";
import myReducer from "./Reducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
let persistConfig = {
  key: "root",
  version: 1,
  storage,
};
let rootReducer = combineReducers({
  myReducer,
});
let persistMainReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistMainReducer,
});

export default store;
