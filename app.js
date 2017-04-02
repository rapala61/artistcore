const Koa = require('koa');

const middleware = require('./middleware');

const app = new Koa();

app.use(middleware.xResponseTime());

app.use((ctx) => {
  ctx.body = '<h1>Hi Stranger</h1>';
});

module.exports = app;
