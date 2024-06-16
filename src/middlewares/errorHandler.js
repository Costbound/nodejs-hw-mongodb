import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  console.log(`ErrorHandler: err is`, err);
  // if (err instanceof HttpError) {
  //   // const responseData = {
  //   //   status: err.status,
  //   //   message: err.name,
  //   //   data: { message: err.message },
  //   // };
  //   // if (err.errors) {
  //   //   responseData.data.errors = err.errors;
  //   // }
  //   res.status(err.status).json({
  //     status: err.status,
  //     message: err.name,
  //     data: { message: err.message },
  //   });
  // }
  res.status(500).json({
    satus: 500,
    message: 'Something went wrong',
    data: err.message,
  });
};
