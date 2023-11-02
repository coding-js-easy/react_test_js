// Jest setup file

// This is needed so that skeletons can be tested for some reason ¯\_(ツ)_/¯
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Removes the "Not implemented: window.scrollTo" console error
Object.defineProperty(window, "scrollTo", { value: jest.fn(), writable: true });
