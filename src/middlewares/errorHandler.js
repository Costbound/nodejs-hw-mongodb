import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res) => {
  if (err instanceof HttpError) {
    const responseData = {
      status: err.status,
      message: err.name,
      data: { message: err.message },
    };
    if (err.errors) {
      responseData.data.errors = err.errors;
    }
    res.status(err.status).json(responseData);
  }
  res.status(500).json({
    satus: 500,
    message: 'Something went wrong',
    data: err.message,
  });
};
