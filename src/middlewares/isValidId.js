import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export const isValidId = (req, res, next) => {
  isValidObjectId(req.params.id)
    ? next()
    : next(createHttpError(404, 'Not found'));
};
