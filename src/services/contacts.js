import { PATH_DB } from '../constants/localDB.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
  const dbJson = await fs.readFile(PATH_DB, 'utf8');
  return JSON.parse(dbJson);
};

export const getContactById = async (id) => {
  const dbJson = await fs.readFile(PATH_DB, 'utf8');
  const contacts = JSON.parse(dbJson);
  const contact = contacts.find((contact) => contact.id === id);
  if (contact) {
    return {
      status: 200,
      data: contact,
    };
  } else {
    return {
      status: 404,
    };
  }
};
