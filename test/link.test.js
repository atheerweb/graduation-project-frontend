import { check_balance_empty } from "../lib/initial-balance";

it("puts initial value of 0 in balance if client has no transactions", () => {
    expect(check_balance_empty(null)).toBe(0)
});


it("return balance if exists in balance if client has no transactions", () => {
    expect(check_balance_empty(200)).toBe(200)
});
