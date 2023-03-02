import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://63fdef07cd13ced3d7c2985f.mockapi.io/contacts',
});

export const getAllContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const addContactByData = async data => {
  const { data: result } = await contactsInstance.post('/', data);
  return result;
};

export const deleteContactById = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};
