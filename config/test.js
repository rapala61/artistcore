const enableDestroy = require('server-destroy');
const test = require('ava');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

module.exports = {
  app,
  chaiHttp,
  chai,
  test,
  enableDestroy,
};
