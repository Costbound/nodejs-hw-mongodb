import { ContactsCollection } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return JSON.parse(contacts);
};

// export const getContactById = async (id) => {
//   const dbJson = await fs.readFile(PATH_DB, 'utf8');
//   const contacts = JSON.parse(dbJson);
//   const contact = contacts.find((contact) => contact.id === id);
//   if (contact) {
//     return {
//       status: 200,
//       data: contact,
//     };
//   } else {
//     return {
//       status: 404,
//     };
//   }
// };
