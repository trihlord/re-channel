import type { Contact } from "@/models/contact/data";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import * as contactCreateActions from "./actions";
import { ContactCreateStatus } from "./data";

export const contactCreateName = "contactCreate";

interface ContactCreateState {
  items: Contact[];
  status: ContactCreateStatus;
}

const contactCreateInitialState: ContactCreateState = {
  items: [],
  status: ContactCreateStatus.idle,
};

const contactCreateSlice = createSlice({
  name: contactCreateName,
  initialState: contactCreateInitialState,
  reducers: {},
  extraReducers: (build) =>
    build
      .addCase(contactCreateActions.showConfirm, (state) => {
        state.status = ContactCreateStatus.idle;
      })
      .addCase(contactCreateActions.hideConfirm, (state) => {
        state.status = ContactCreateStatus.pending;
      })
      .addCase(contactCreateActions.concat, (state, action) => {
        state.items = state.items.concat(action.payload);
      }),
});

export const contactCreateReducer = contactCreateSlice.reducer;

export function selectContactState(state: {
  [contactCreateName]: ContactCreateState;
}) {
  return state[contactCreateName];
}

export const selectItems = createSelector(
  selectContactState,
  (state) => state.items
);

export const selectIsConfirmHidden = createSelector(
  selectContactState,
  (state) => state.status
);

export { contactCreateActions };
