import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice.jsx';

export const store = configureStore({
  reducer: {
    contactsData: contactsReducer,
  },
});
