import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import {
  getAllContacts,
  addContactByData,
  deleteContactById,
} from 'services/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await getAllContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkAPI) => {
    try {
      const result = await addContactByData(data);
      console.log(result);
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  },
  {
    condition: ({ name, phone }, { getState }) => {
      const { contacts } = getState();
      // console.log(contacts);
      const isNameAdded = contacts.items.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
      const isNumberAdded = contacts.items.some(
        contact => contact.phone === phone
      );
      if (isNameAdded) {
        Notify.failure(`${name} is alredy in contacts`);
        return false;
      } else if (isNumberAdded) {
        Notify.failure(`${phone} is alredy in contacts`);
        return false;
      }
    },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await deleteContactById(id);
      return id;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
