function xResponseTime() {
  return async function _xResponseTime(ctx, next) {
    const start = new Date();
    await next();
    const end = new Date();
    ctx.set('X-Response-Time', `${end - start}ms`);
  };
}

module.exports = xResponseTime;
