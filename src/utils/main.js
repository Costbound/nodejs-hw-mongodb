import { getAllContacts } from '../services/contacts.js';

const generateId = async () => {
  const dbData = await getAllContacts();
  const dbIdsArr = dbData.map((contact) => contact.id);
  const highestId = Math.max(...dbIdsArr);
  return dbIdsArr.length > 0 ? highestId : -1;
};

const latestId = await generateId();

export class Utils {
  static #id = latestId;

  static generateId() {
    Utils.#id += 1;
    return Utils.#id;
  }
}
