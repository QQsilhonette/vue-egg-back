'use strict';

module.exports = appInfo => {
  const config = exports = {
    security: {
      csrf: {
        enable: false,
      },
      // 白名单
      domainWhiteList: [ 'http://localhost:8863' ],
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1545275384587_3820';

  // add your config here
  config.middleware = [];

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'egg-sequelize-doc-default',
    username: 'root',
    password: '12345678',
  };
  return config;
};
