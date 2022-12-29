import request from "supertest";
import app from "../src/app";

jest.mock("../src/services/order.services");


describe("GET /api/v1/order", () => {
    test("responds with an array of orders", async () => {
      await request(app)
        .get("/api/v1/order")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .then((res) => {
            const result = res.body;
            const result1 = res.body.data[0];
            expect(result.success).toBe(true);
            expect(result.data.length).toBeGreaterThanOrEqual(0);
            expect(result1._id.length).toEqual(24);
            expect(result1.orderItems).toEqual(expect.any(Array));
            expect(result1.phone).toEqual(expect.any(String));
        });
    });
});

describe("POST /api/v1/order", () => {
    const order = {
        "orderItems": [
            {
                "product": "Orange",
                "quantity": 2
            },
            {
                "product": "Banana",
                "quantity": 3
            }
        ],
        "phone": "+420702241333",
    };

    it("responds with a success message", async () => {
      await request(app)
        .post("/api/v1/order")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .send(order)
        .expect(201)
        .then((res) => {
            expect(res.body.success).toBe(true);
            expect(res.body.message).toBe('New order created successfully');
        });
    });
});