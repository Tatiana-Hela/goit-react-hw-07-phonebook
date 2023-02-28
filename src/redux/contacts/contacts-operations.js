import { getAllContacts, addContact, deleteContact } from 'services/contacts';
import {
  fetchAllContactsLoading,
  fetchAllContactsSuccess,
  fetchAllContactsError,
  fetchAddContactLoading,
  fetchAddContactSuccess,
  fetchAddContactError,
  fetchDeleteContactLoading,
  fetchDeleteContactError,
  fetchDeleteContactSuccess,
} from './contacts-actions';

export const fetchContacts = () => {
  const func = async dispatch => {
    try {
      dispatch(fetchAllContactsLoading());
      const data = await getAllContacts();
      console.log(data);
      dispatch(fetchAllContactsSuccess(data));
    } catch ({ response }) {
      dispatch(fetchAllContactsError(response.data.message));
    }
  };
  return func;
};

export const fetchAddContact = data => {
  const func = async dispatch => {
    try {
      dispatch(fetchAddContactLoading());
      const result = await addContact(data);
      console.log(result);
      dispatch(fetchAddContactSuccess(result));
    } catch ({ response }) {
      dispatch(fetchAddContactError(response.data.message));
    }
  };
  return func;
};

export const fetchDeleteContact = id => {
  const func = async dispatch => {
    try {
      dispatch(fetchDeleteContactLoading());
      await deleteContact(id);
      dispatch(fetchDeleteContactSuccess(id));
    } catch ({ response }) {
      dispatch(fetchDeleteContactError(response.data.message));
    }
  };
  return func;
};
