const { ApiError } = require('../exceptions/api-error');
const { TokenService } = require('../service/token-service');

exports.verifyToken = function (req, res, next) {
  try {
    const { accessToken } = req.cookies;
    if (!accessToken) {
      return next(ApiError.UnauthorizedError());
    }

    const userData = TokenService.validateAccessToken(accessToken);
    if (!userData) {
      return next(ApiError.UnauthorizedError());
    }

    req.user = userData;
    next();
  } catch (e) {
    return next(ApiError.UnauthorizedError());
  }
};
