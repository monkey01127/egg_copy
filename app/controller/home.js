/*
 * @Description:
 * @Author: lijuan.sun
 * @Date: 2020-06-28 14:55:36
 * @LastEditTime: 2020-06-28 14:56:52
 * @LastEditors: lijuan.sun
 * @FilePath: \egg-example\app\controller\home.js
 */
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'Hello world';
  }
}

module.exports = HomeController;
