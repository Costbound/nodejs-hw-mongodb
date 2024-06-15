import { Router } from 'express';
import { getContactsController } from '../controllers/contacts.js';

const router = Router();

router.get('/contacts', getContactsController);

router.get('/contacts/:contactId', getContactsController);

export default router;
