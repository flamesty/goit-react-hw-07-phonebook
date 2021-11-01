import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './app-actions';

axios.get("http://localhost:3000/db.json")

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get('/app-contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

const addContact = (name, number) => async dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());

  try {
    const { data } = await axios.post('/app-contacts', contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(`/app-contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};
export default contactsOperations;