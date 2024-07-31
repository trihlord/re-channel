import { ContactCreateStatus } from "@/features/contactCreate/data";
import type { Contact } from "@/models/contact/data";
import {
  createAction,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

export const contactCreateName = "contactCreate";

const submitForm = createAction<Contact>(`${contactCreateName}/submitForm`);
const cancelSubmit = createAction(`${contactCreateName}/cancelSubmit`);
const confirmSubmit = createAction(`${contactCreateName}/confirmSubmit`);

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
  reducers: {
    concatItems(state, action: PayloadAction<Contact | Contact[]>) {
      state.items = state.items.concat(action.payload);
    },
    openConfirm(state) {
      state.status = ContactCreateStatus.pending;
    },
    closeConfirm(state) {
      state.status = ContactCreateStatus.idle;
    },
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

export const contactCreateActions = {
  ...contactCreateSlice.actions,
  submitForm,
  cancelSubmit,
  confirmSubmit,
};

export const contactCreateReducer = contactCreateSlice.reducer;

export const contactCreateSelectors = contactCreateSlice.selectors;
