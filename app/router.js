'use strict';

// app/router.js
module.exports = app => {
  const { router, controller } = app;
  // 用户
  router.resources('users', '/users', controller.user);
  // 登录
  router.post('login', '/login', controller.login.login);
};
