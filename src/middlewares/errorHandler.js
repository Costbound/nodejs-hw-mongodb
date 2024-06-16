import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      message: err.name,
      data: { message: err.message, errors: err.errors },
    });
  }
  res.status(500).json({
    satus: 500,
    message: 'Something went wrong',
    data: err.message,
  });
};
