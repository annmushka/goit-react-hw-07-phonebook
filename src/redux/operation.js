import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContact,
  addContact,
  deleteContact,
} from 'components/services/api';

export const fetchContactsOper = createAsyncThunk(
  'contacts/fetchAll',
  async (contacts, thunkAPI) => {
    try {
      const result = await fetchContact(contacts);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactsOper = createAsyncThunk(
  'contacts/getByQuary',
  async (contact, thunkAPI) => {
    try {
      const result = await addContact(contact);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsOper = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const result = await deleteContact(id);
      return result.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
