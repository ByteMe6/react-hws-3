import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, phone }) {
        return { payload: { id: nanoid(), name, phone } };
      },
    },
    deleteContact(state, action) {
      return state.filter((c) => c.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
