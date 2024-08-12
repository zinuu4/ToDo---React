const { ApiError } = require('../exceptions/api-error');
const { TodoError } = require('../exceptions/todo-error');

exports.errorMiddleware = (err, req, res) => {
  console.log(err);
  if (err instanceof ApiError || err instanceof TodoError) {
    return res
      .status(err.status)
      .json({ message: err.message, errors: err.errors });
  }
  return res.status(500).json({ message: 'Unexpected error' });
};
