const { AuthService } = require('../service/auth-service');

exports.registration = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userData = await AuthService.registration(email, password);
    res.cookie('refreshToken', userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      httpOnly: true,
      path: '/',
    });
    res.cookie('accessToken', userData.accessToken, {
      maxAge: 30 * 60 * 1000, // 30 min
      httpOnly: true,
      path: '/',
    });

    return res.json(userData);
  } catch (e) {
    next(e);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userData = await AuthService.login(email, password);
    res.cookie('refreshToken', userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      httpOnly: true,
      path: '/',
    });
    res.cookie('accessToken', userData.accessToken, {
      maxAge: 30 * 60 * 1000, // 30 min
      httpOnly: true,
      path: '/',
    });

    return res.json(userData);
  } catch (e) {
    next(e);
  }
};

exports.logout = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;

    const token = await AuthService.logout(refreshToken);

    res.clearCookie('refreshToken');
    res.clearCookie('accessToken');

    return res.json(token);
  } catch (e) {
    next(e);
  }
};

exports.refresh = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;

    const userData = await AuthService.refresh(refreshToken);
    res.cookie('refreshToken', userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      httpOnly: true,
      path: '/',
    });
    res.cookie('accessToken', userData.accessToken, {
      maxAge: 30 * 60 * 1000, // 30 min
      httpOnly: true,
      path: '/',
    });

    return res.json(userData);
  } catch (e) {
    next(e);
  }
};
