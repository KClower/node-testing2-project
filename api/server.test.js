const supertest = require('supertest');
const server = require('./server.js');

describe('server', () => {
    it("Tests are working", () => {
        expect(true).toBe(true);
    });

    describe('GET /', () => {
        it("Should respond 200 OK", () => {
            return supertest(server)
                .get("/")
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });
        it("Should respond with JSON", () => {
            return supertest(server)
                .get("/")
                .then(res => {
                    expect(res.type).toMatch(/json/i);
                });
        });
        it("Should return with string", () => {
            return supertest(server)
                .get("/")
                .then(res => {
                    expect(res.body).toMatch("");
                });
        });
        it("Should return with welcome message", () => {
            return supertest(server)
                .get("/")
                .then(res => {
                    expect(res.body).toBe("Welcome to Machines API")
                })
        })
    })


})