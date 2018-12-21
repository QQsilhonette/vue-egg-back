'use strict';

const Controller = require('../core/base_controller');

class LoginController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.createRule = {
      username: 'string',
      password: 'string',
    };
  }
  async login() {
    const { ctx } = this;
    const content = ctx.request.body;
    ctx.validate(this.createRule, content);
    const { username, password } = content;
    const query = { name: username };
    const user = await ctx.service.user.find(query);
    if (!user) {
      this.failure('用户不存在！');
    } else {
      this.success(user);
    }
  }
}

module.exports = LoginController;
