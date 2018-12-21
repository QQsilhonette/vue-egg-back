'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    roles: STRING(30),
    token: STRING(255),
    introduction: STRING(50),
    avatar: STRING(50),
    created_at: DATE,
    updated_at: DATE,
  });

  return User;
};
