const request = require('supertest');
const { describe, it } = require('mocha');
const app = require('../src/app');

describe('Test app', () => {
  it('Should return default index page without error', async () => request(app)
    .get('/')
    .expect('Content-Type', 'text/html; charset=utf-8')
    .expect(200));
});
