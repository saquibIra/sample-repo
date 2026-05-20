import { describe, test, expect } from "vitest";
import { createCart, renderBadge } from "./cart.js";

describe("cart", () => {
  test("starts empty", () => {
    const c = createCart();
    expect(c.count()).toBe(0);
    expect(c.total()).toBe(0);
  });

  test("adds and totals items", () => {
    const c = createCart();
    c.add({ id: 1, price: 10 });
    c.add({ id: 2, price: 5, qty: 2 });
    expect(c.count()).toBe(2);
    expect(c.total()).toBe(20);
  });

  test("removes by id", () => {
    const c = createCart();
    c.add({ id: 1, price: 10 });
    c.add({ id: 2, price: 5 });
    c.remove(1);
    expect(c.count()).toBe(1);
    expect(c.items()[0].id).toBe(2);
  });

  test("renderBadge writes count to element", () => {
    const c = createCart();
    c.add({ id: 1, price: 1 });
    const el = document.createElement("span");
    renderBadge(el, c);
    expect(el.textContent).toBe("1");
  });
});
