import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Исходные контакты телефона
const phoneContacts = {
  items: [
    { id: 'id-1', name: 'Eva', number: '7654-09-09' },
    { id: 'id-2', name: 'Adam', number: '0123-45-67' },
   
  ],
};


const contactsSlice = createSlice({
  name: 'contacts', 
  initialState: phoneContacts, 
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload); 
      },
    },
    prepare(newContact) {
      return {
        payload: { id: nanoid(), ...newContact }, 
      };
    },
    removeContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id !== action.payload
      );
      state.items.splice(index, 1); 
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;


export const contactsReducer = persistReducer(
  { key: 'contacts', storage },
  contactsSlice.reducer
);
