export const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    satus: 500,
    message: 'Something went wrong',
    data: err.message,
  });
};
