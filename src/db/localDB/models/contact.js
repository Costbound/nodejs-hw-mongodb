import { Utils } from '../../../utils/main.js';

const defaultExtraData = {
  email: null,
  isFavorite: false,
  contactsType: 'personal',
};

export class Contact {
  id;
  name;
  phoneNumber;
  email;
  isFavorite;
  contactsType;
  createdAt;
  updatedAt;

  constructor(name, phoneNumber, extraData) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    Object.assign(this, defaultExtraData, extraData);
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
    this.id = Utils.generateId();
  }
}
