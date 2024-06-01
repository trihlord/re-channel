import { combineReducers } from "@reduxjs/toolkit";
import { contactName, contactReducer } from "./features/contact/contactSlice";

export const rootReducer = combineReducers({
  [contactName]: contactReducer,
});
