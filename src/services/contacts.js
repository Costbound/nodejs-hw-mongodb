import { DB_DATA } from '../constants/localDB.js';

export const getAllContacts = async () => {
  try {
    return DB_DATA;
  } catch (err) {
    console.log(err);
  }
};
