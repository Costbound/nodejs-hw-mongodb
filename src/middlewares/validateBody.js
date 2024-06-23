import createHttpError from 'http-errors';

export const validateBody = (schema) => async (req, res, next) => {
  try {
    console.log(`Request file:`, req.file);
    console.log(`Request body:`, req.body);

    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (err) {
    const error = createHttpError(400, 'ValidationError', {
      errors: err.details,
    });
    next(error);
  }
};
