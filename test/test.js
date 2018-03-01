const request = require('supertest'),
    app = require('../app.js').getApp;

describe('GET /', () => {
    it("expects HTTP response 200", (done) => {
        request(app)
            .get('/')
            .expect(200, done)
    })
})