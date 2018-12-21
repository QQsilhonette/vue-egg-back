// app/controller/users.js
'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.createRule = {
      name: 'string',
    };
  }

  // /users?limit=2&offset=1
  async index() {
    const { ctx } = this;
    ctx.validate(this.createRule, ctx.query);
    const query = { name: ctx.query.name };
    ctx.body = await ctx.service.user.list(query);
  }

  async show() {
    // /users/1
    const ctx = this.ctx;
    ctx.body = await ctx.service.user.show(ctx.helper.parseInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const user = await ctx.service.user.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = user;
  }

  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const body = ctx.request.body;
    ctx.body = await ctx.service.user.update({ id, updates: body });
  }

  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    await ctx.service.user.del(id);
    ctx.status = 200;
  }
}

module.exports = UserController;
