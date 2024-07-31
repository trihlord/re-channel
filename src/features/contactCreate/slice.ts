import * as contactCreateActions from "@/features/contactCreate/actions";
import { ContactCreateStatus } from "@/features/contactCreate/data";
import type { Contact } from "@/models/contact/data";
import { createSlice } from "@reduxjs/toolkit";

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
  extraReducers(build) {
    return build
      .addCase(contactCreateActions.showConfirm, function (state) {
        state.status = ContactCreateStatus.pending;
      })
      .addCase(contactCreateActions.hideConfirm, function (state) {
        state.status = ContactCreateStatus.idle;
      })
      .addCase(contactCreateActions.concatItems, function (state, action) {
        state.items = state.items.concat(action.payload);
      });
  },
  selectors: {
    items(state) {
      return state.items;
    },
    isStatusPending(state) {
      return state.status === ContactCreateStatus.pending;
    },
  },
});

export const contactCreateReducer = contactCreateSlice.reducer;

export const contactCreateSelectors = contactCreateSlice.selectors;

export { contactCreateActions };
