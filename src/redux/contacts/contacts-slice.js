import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
// import { store } from 'redux/store';

import {
  fetchAllContactsLoading,
  fetchAllContactsSuccess,
  fetchAllContactsError,
  fetchAddContactLoading,
  fetchAddContactSuccess,
  fetchAddContactError,
  fetchDeleteContactLoading,
  fetchDeleteContactSuccess,
  fetchDeleteContactError,
} from './contacts-actions';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchAllContactsLoading]: state => {
      state.isLoading = true;
    },
    [fetchAllContactsSuccess]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [fetchAllContactsError]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [fetchAddContactLoading]: state => {
      state.isLoading = true;
    },
    [fetchAddContactSuccess]: (state, { payload }) => {
      state.isLoading = false;
      state.items.push(payload);
    },
    [fetchAddContactError]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [fetchDeleteContactLoading]: state => {
      state.isLoading = true;
    },
    [fetchDeleteContactSuccess]: (state, { payload }) => {
      state.isLoading = false;
      const index = state.items.findIndex(item => item.id === payload);
      state.items.splice(index, 1);
    },
    [fetchDeleteContactError]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
