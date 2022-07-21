import { App } from "../src/App";
import * as utils from "../src/configs/Configs";
const request = require("supertest");

describe("Should test the App", () => {

    beforeAll(() => {
        jest.spyOn(utils, "mongoDBInstance")
        .mockImplementation(() => Promise.resolve({
            find: () => null as any,
            findOne: (_data: any) => null as any,
            getAllCache: () => null as any,
            insertOne: (_data: any) => null as any
        } as any));
    })

    test("Should get all cache from storage", async () => {
        const app = App()
        const response = await request(app).get("/cache/");
        expect(response.statusCode).toBe(200);
    })

    test("Should get only one cache based on Key", async () => {
        const app = App()
        const response = await request(app).get("/cache/123/");
        expect(response.statusCode).toBe(200);
    })

    test("Should add cache to storage", async () => {
        const app = App()
        const response = await request(app).post("/cache/", {
            key: '123',
            value: 'qwerty'
        });
        expect(response.statusCode).toBe(200);
    })

    test("Should delete a cache from storage", async () => {
        const app = App()
        const response = await request(app).delete("/cache/123");
        expect(response.statusCode).toBe(200);
    })

    test("Should delete all cache from storage", async () => {
        const app = App()
        const response = await request(app).delete("/cache");
        expect(response.statusCode).toBe(200);
    })

})