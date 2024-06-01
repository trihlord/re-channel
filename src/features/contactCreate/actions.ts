import type { Contact } from "@/models/contact/data";
import { createAction } from "@reduxjs/toolkit";

export const submitForm = createAction<Contact>("contactCreate/submitForm");

export const showConfirm = createAction("contactCreate/showConfirm");
export const hideConfirm = createAction("contactCreate/hideConfirm");

export const cancelSubmit = createAction("contactCreate/cancelSubmit");
export const confirmSubmit = createAction("contactCreate/confirmSubmit");

export const concatItems = createAction<Contact>("contactCreate/concatItems");
