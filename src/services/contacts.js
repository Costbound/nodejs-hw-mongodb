import { ContactsCollection } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};

export const createContact = async ({
  name,
  phoneNumber,
  email = null,
  isFavorite = false,
  contactType = 'personal',
}) => {
  const contact = await ContactsCollection.create({
    name,
    phoneNumber,
    email,
    isFavorite,
    contactType,
  });
  return contact;
};

export const updateContact = async (contactId, payload) => {
  const rawResult = await ContactsCollection.findOneAndUpdate(
    { _id: contactId },
    payload,
    { new: true, includeResultMetadata: true },
  );

  return rawResult;
};
