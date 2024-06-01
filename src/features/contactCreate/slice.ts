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
      .addCase(contactCreateActions.concatItems, (state, action) => {
        state.items = state.items.concat(action.payload);
      }),
});

export const contactCreateReducer = contactCreateSlice.reducer;

export function selectContactCreateState(state: {
  [contactCreateName]: ContactCreateState;
}) {
  return state[contactCreateName];
}

export const selectContactCreateItems = createSelector(
  selectContactCreateState,
  (state) => state.items
);

export const selectContactCreateIsHidden = createSelector(
  selectContactCreateState,
  (state) => state.status === ContactCreateStatus.idle
);

export { contactCreateActions };
