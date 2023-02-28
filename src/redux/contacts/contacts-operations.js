// import { Notify } from 'notiflix';
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
      dispatch(fetchAllContactsSuccess(data));
    } catch ({ response }) {
      dispatch(fetchAllContactsError(response.data.message));
    }
  };
  return func;
};

// const isDublicate = (contacts, { name, phone }) => {
//   const normalizedName = name.toLowerCase();

// const isNameAdded = contacts.some(
//   contact => contact.name.toLowerCase() === name.toLowerCase()
// );
// const isNumberAdded = contacts.some(contact => contact.phone === phone);
// if (isNameAdded) {
//   Notify.failure(`${name} is alredy in contacts`);
//   return;
// } else if (isNumberAdded) {
//   Notify.failure(`${phone} is alredy in contacts`);
//   return;
// }
// };

export const fetchAddContact = data => {
  const func = async dispatch => {
    try {
      dispatch(fetchAddContactLoading());
      const result = await addContact(data);
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
