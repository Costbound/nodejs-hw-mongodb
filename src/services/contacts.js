import { ContactsCollection } from '../db/models/contacts.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllContacts = async ({ page, perPage }) => {
  const skip = (page - 1) * perPage;
  const contactsQuery = ContactsCollection.find();
  const contactsCount = await ContactsCollection.find()
    .merge(contactsQuery)
    .countDocuments();

  const contacts = await contactsQuery.skip(skip).limit(perPage).exec();

  const paginationData = calculatePaginationData(contactsCount, page, perPage);

  return {
    contacts: contacts,
    ...paginationData,
  };
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
    { new: true },
  );

  return rawResult;
};

export const deleteContact = async (contactId) => {
  const deletedContact = await ContactsCollection.findByIdAndDelete(contactId);

  return deletedContact;
};
