

// const supertest = require('supertest');
const db = require('../../data/dbConfig.js');
const Machines = require('./machines-model.js');

describe('environment', () => {
    it("Should be using testing environment", () => {
        expect(process.env.NODE_ENV).toBe("testing");
    });
});




describe('Machine Model', () => {
    afterAll(() => {
        return db.destroy;
    });
    describe('GetAll()', () => {
        it("Should return an array", async () => {
            const result = await Machines.getAll()
            expect(Array.isArray(result)).toBe(true)
        });
        it("Should return all records in machines table", async () => {
            await db("machines").truncate();
            await Machines.create({ name: "Toshiba" });
            await Machines.create({ name: "Fanuc" });

            const result = await Machines.getAll();
            expect(result).toHaveLength(2)
        })
    })

    describe('Create()', () => {
        beforeEach(async () => {
            await db("machines").truncate();
        });
        it("Should create machine in database", async () => {
            await Machines.create({ name: "Toshiba" });
            await Machines.create({ name: "Fanuc" });

            const machines = await db('machines');

            expect(machines).toHaveLength(2);
        });
        it("Should return an object with created id", async () => {
            const result = await Machines.create({ name: "Toshiba" });
            expect(result).toHaveProperty("id")
        });
        it("Should return an object with numeric id", async () => {
            const result = await Machines.create({ name: "Toshiba" });
            expect(typeof result.id).toBe("number")
        })
    });
});


