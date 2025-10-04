import { createStore } from "redux";
import { reducers } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("tasks");
    if (!serializedState) return undefined;
    return { tasks: JSON.parse(serializedState) };
  } catch (e) {
    console.warn("Cannot load tasks from localStorage", e);
    return undefined;
  }
}

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state.tasks);
    localStorage.setItem("tasks", serializedState);
  } catch (e) {
    console.warn("Cannot save tasks to localStorage", e);
  }
}

const persistedState = loadFromLocalStorage();

// export const store = createStore(reducers, persistedState);
export const store = configureStore({ reducer: reducers, preloadedState: persistedState });

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});
