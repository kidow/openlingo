import "@testing-library/jest-dom/vitest";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

class MockAnimation {
  finished = Promise.resolve();

  cancel() {}
}

Object.defineProperty(Element.prototype, "animate", {
  writable: true,
  value: () => new MockAnimation(),
});

Object.defineProperty(SVGElement.prototype, "getTotalLength", {
  writable: true,
  value: () => 100,
});
