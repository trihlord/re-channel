import {
  contactCreateName,
  contactCreateReducer,
} from "@/features/contactCreate/slice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  [contactCreateName]: contactCreateReducer,
});
