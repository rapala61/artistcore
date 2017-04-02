require('dotenv-safe').load();

module.exports = {
  port: process.env.PORT || 3000,
  workers: process.env.WEB_CONCURRENCY || 1,
};
