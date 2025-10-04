import { createAction } from "@reduxjs/toolkit";
import { ADD_TASK, DELETE_TASK } from "./constans";

// export function addTaskFunc(payload){
//     return {type: ADD_TASK, payload}
// }

export const addTaskFunc = createAction(ADD_TASK, (payload) => ({ payload }));

// export function delteTaskFunc(payload){
//     return {type: DELETE_TASK, payload}
// }

export const deleteTaskFunc = createAction(DELETE_TASK, (payload) => ({
  payload,
}));
