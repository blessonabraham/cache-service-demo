import { App } from "../src/App";
const request = require("supertest");

describe("Should test the App", () => {

    test("Should respond with 200 HTTP Code", async () => {
        const app = App()
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
    })

})