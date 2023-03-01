import axios from 'axios';
axios.defaults.baseURL = 'https://63fdd5f419f41bb9f6549e09.mockapi.io';

export const fetchContact = async () => {
  const { data } = await axios.get('contacts');
  return data;
};

export const addContact = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
