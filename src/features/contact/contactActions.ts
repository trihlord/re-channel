import { createAction } from "@reduxjs/toolkit";
import type { Contact } from "./contactData";

export const create = createAction<Contact>("contact/create");
export const showConfirm = createAction("contact/showConfirm");
export const cancelOrConfirm = createAction("contact/cancelOrConfirm");
export const hideConfirm = createAction("contact/hideConfirm");
export const cancel = createAction("contact/cancel");
export const confirm = createAction("contact/confirm");
export const concat = createAction<Contact>("contact/concat");
