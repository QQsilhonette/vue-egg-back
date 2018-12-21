'use strict';

const Service = require('egg').Service;

class User extends Service {
  async find(params) {
    return this.ctx.model.User.findOne({
      where: { name: params.name },
      order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
    });
  }

  async show(id) {
    const user = await this.ctx.model.User.findById(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user;
  }

  async create(user) {
    return this.ctx.model.User.create(user);
  }

  async update({ id, updates }) {
    const user = await this.ctx.model.User.findById(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user.update(updates);
  }

  async del(id) {
    const user = await this.ctx.model.User.findById(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user.destroy();
  }
}

module.exports = User;
