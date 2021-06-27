'use strict';

const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);

describe('API tests', () => {
  it('handle invaliad requests', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  });

  it('handle errors', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
  });

  it('handle correct routes', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
  });
});
