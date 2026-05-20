export function createCart() {
  const items = [];
  return {
    add(item) { items.push(item); },
    remove(id) {
      const i = items.findIndex((x) => x.id === id);
      if (i >= 0) items.splice(i, 1);
    },
    total() {
      return items.reduce((s, x) => s + x.price * (x.qty ?? 1), 0);
    },
    count() { return items.length; },
    items() { return [...items]; },
  };
}

export function renderBadge(el, cart) {
  el.textContent = String(cart.count());
}
