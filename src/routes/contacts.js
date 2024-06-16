import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getContactsByIdController,
  getContactsController,
  updateContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';
import { isValidContactId } from '../middlewares/idValidation.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));

router.get(
  '/contacts/:contactId',
  isValidContactId,
  ctrlWrapper(getContactsByIdController),
);

router.post(
  '/contacts',
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

router.patch(
  '/contacts/:contactId',
  isValidContactId,
  validateBody(updateContactSchema),
  ctrlWrapper(updateContactController),
);

router.delete(
  '/contacts/:contactId',
  isValidContactId,
  ctrlWrapper(deleteContactController),
);

export default router;
