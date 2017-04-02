/* eslint-disable no-param-reassign*/
const config = require('../../config/test');

config.chai.should();

const test = config.test;

// Setup
config.chai.use(config.chaiHttp);

test.beforeEach((t) => {
  t.context.server = config.app.listen();
  t.context.request = config.chai.request(t.context.server);
  config.enableDestroy(t.context.server);
});

test.afterEach((t) => {
  t.context.server.destroy();
});

test('GET / should respond with status 200', async (t) => {
  await t.context.request
    .get('/')
    .end((err, res) => {
      res.status.should.equal(200);
    });
});

test('GET / Should respond with x-response-time header', async (t) => {
  await t.context.request
    .get('/')
    .end((err, res) => {
      res.headers.should.have.property('x-response-time');
    });
});
