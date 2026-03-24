const assert = require('assert');
const request = require('supertest');
const { describe, it } = require('node:test');
const app = require('../src/app');

describe('Test app', () => {
  it('Should return default index page without error', async () => {
    const res = await request(app).get('/');

    assert.strictEqual(res.status, 200);
    assert.strictEqual(
        res.headers['content-type'],
        'text/html; charset=utf-8'
    );
  });
});
