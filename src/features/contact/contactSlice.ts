import { createSelector, createSlice } from "@reduxjs/toolkit";
import * as contactActions from "./contactActions";
import type { Contact } from "./contactData";

export const contactName = "contact";

interface ContactState {
  items: Contact[];
  isConfirmHidden: boolean;
}

const contactInitialState: ContactState = {
  items: [],
  isConfirmHidden: true,
};

const contactSlice = createSlice({
  name: contactName,
  initialState: contactInitialState,
  reducers: {},
  extraReducers: (build) =>
    build
      .addCase(contactActions.showConfirm, (state) => {
        state.isConfirmHidden = false;
      })
      .addCase(contactActions.hideConfirm, (state) => {
        state.isConfirmHidden = true;
      })
      .addCase(contactActions.concat, (state, action) => {
        state.items = state.items.concat(action.payload);
      }),
});

export const contactReducer = contactSlice.reducer;

export function selectContactState(state: { [contactName]: ContactState }) {
  return state[contactName];
}

export const selectItems = createSelector(
  selectContactState,
  (state) => state.items
);

export const selectIsConfirmHidden = createSelector(
  selectContactState,
  (state) => state.isConfirmHidden
);

export { contactActions };
